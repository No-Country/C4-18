const admin = require("firebase-admin");
const { handleErrorResponse } = require("../utils/handleError");

const serviceAccount = require("./firebase-key.json");

const BUCKET = process.env.BUCKET

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET
});

const bucket = admin.storage().bucket();

const uploadFileMiddleware = async (req, res, next)=>{

    if(!req.files) return next(); 

    req.files.firebaseUrl = [];
    const idUsuario = req.params.id ? req.params.id : req.body.idUsuario
    let imgNum = 0;
    for(let imagen of req.files){
        const isPhoto = imagen.mimetype.startsWith('image/');
        if (!isPhoto) {
            handleErrorResponse(res, "NOT_IMAGE", 415)
            return;
        } 
        const img = imagen;
        const imgName = `img-${imgNum}-${idUsuario}-${Date.now()}-${img.originalname.split(".").pop()}`;

        const file = await bucket.file(imgName);
       
        const stream = file.createWriteStream({
            metadata: {
                contentType: img.mimetype,
            }
        });

        stream.on('error', (e)=>{console.error(e);})

        stream.on('finish', async () => {
            await file.makePublic();        
        });
        req.files.firebaseUrl.push(`https://storage.googleapis.com/${process.env.BUCKET}/${imgName}`);
        stream.end(img.buffer)
        imgNum++;
    }
    imgNum = 0;     
    console.log('IMAGENES:', req.files.firebaseUrl)
    next();
}

const deleteImage = async (imgName)=>{

    const file = bucket.file(imgName);
    const response = await file.delete()
    console.log('IMAGENDELETE: ', file);
    return response;
}

module.exports = {uploadFileMiddleware, deleteImage};