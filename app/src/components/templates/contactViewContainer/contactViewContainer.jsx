import "./contactViewContainer.scss";


export const ContactViewContainer = () => {
  return (
    <div className="contactViewBackground">
        <div className="contactView">
            
            <div className="contactTitle">
                <h2 className="contactH2">
                    Contactanos
                </h2>
                <div className="lineRed"></div>
                <div className="lineGrey"></div>
            </div>
            <div className="contactContainerForm">
                <form action="" className="contactForm">
                    <label htmlFor="">Comentario</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <label htmlFor="">Nombre</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Correo</label>
                    <input type="email" name="" id="" />

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>     
    </div>
  );
};