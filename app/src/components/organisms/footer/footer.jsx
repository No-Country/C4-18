import "./footer.scss";
import logoFooter from "../../atoms/logo-central.svg";
import iconoInstagram from "../../atoms/icono-instagram.svg";
import iconoFacebook from "../../atoms/icono-facebook.svg";
import iconoTwitter from "../../atoms/icono-twitter.svg";
import iconoEmail from "../../atoms/icono-email.svg";


export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-menu">
                <div>
                <img src={logoFooter} alt="Footer Home" className="logoFooter" />
                </div>
                
                <div className="container-top-footer">
                    <h4>Sobre Nosotros</h4>
                    <ul>
                        <li>
                            <a>Sobre Nosotros</a>
                        </li>
                        <li>
                            <a>Nuestros Servicios</a>
                        </li>
                        <li>
                            <a>Contactanos</a>
                        </li>
                        <li>
                            <a> compañia</a>
                        </li>
                    </ul>
                </div>
                <div className="container-top-footer">
                    <h4>Company</h4>
                    <ul>
                        <li>
                            <a>Asociados</a>
                        </li>
                        <li>
                            <a>Terminos de uso</a>
                        </li>
                        <li>
                            <a>Privacidad</a>
                        </li>
                    </ul>
                </div>
                <div className="container-top-footer container-top-footer-promotion">
                    <h4>Promociones</h4>
                    <ul>                
                        <li className="center-object">
                            <a>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ratione iusto dicta eveniet veniam maiores excepturi quidem? Assumenda
                            </a>
                        </li>
                        <li>
                            <form className="form"> 
                                <input type="text" className="input" placeHolder="correo"/>
                                <button type="submit" className="submit">enviar</button>
                            </form>  
                        </li>                      
                        <li className="center-object">
                            <a>Contactanos</a>
                        </li>
                    </ul>
                </div>
            </div> {/* fin de footer-menu */}
            <hr />
            <div className="footer-social-media">
                <h4>
                    Todos los derechos reservados por NC - G18
                </h4>
                <div className="iconos-social-media">
                <img src={iconoInstagram} alt="Instagram" className="iconoInstagram" />
                <img src={iconoFacebook} alt="Home" className="iconoFacebook" />
                <img src={iconoTwitter} alt="Home" className="iconoTwitter" />
                <img src={iconoEmail} alt="Home" className="iconoEmail" />
                </div>
                <h4>
                    Politica y privacidad
                </h4>
            </div> {/* footer-social-networking */}
      </div>
    );
  };