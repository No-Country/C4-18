const bcrypt = require('bcryptjs');

// Encriptar un password
const encrypt = async (passwordPlain)=> {
    const hash = await bcrypt.hash(passwordPlain, 10);
    return hash;
};

// Verificar password
const compare = async (passwordPlain, password)=> {
    return await bcrypt.compare(passwordPlain, password);
};

module.exports = { encrypt, compare };