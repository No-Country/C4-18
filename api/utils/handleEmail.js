const fetch = require('node-fetch');

const handleEmail = async (body, type) => {
    try {
        const message = {
            idReserva: body.idReserva,
            nombre: body.nombre,
            telefono: body.telefono,
            correo: body.correo,
            idPost: body.idPost,
            tituloPost: body.tituloPost,
        };

        const data = {
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: "template_9xvb3bd",
            user_id: process.env.EMAILJS_PUBLIC_KEY,
            template_params: message
        };
        
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(function() {
            console.log("DONE!")
        }).catch(function(error) {
            console.log("Error: ", error)
        });
        
       
          console.log("respuesta:", {data})
    } catch (error) {
       console.log("ERROR:", error)
    }
  
};

module.exports = {handleEmail}

