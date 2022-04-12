const fetch = require('node-fetch');

const handleEmail = async (body, type) => {
    try {
        const templateId = type === "reserva" ? "template_9xvb3bd" : "template_hw3b6hg"

        const data = {
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: templateId,
            user_id: process.env.EMAILJS_PUBLIC_KEY,
            template_params: body
        };
        
        const result = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })        
        console.log("status", result.status)
        return {status: result.status, statusText: result.statusText};
        
    } catch (error) {
       console.log("ERROR:", error)
    }
  
};

module.exports = {handleEmail}

