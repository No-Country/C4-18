import "./aboutUs.scss";
import logoFooter from "../../atoms/logo-central.svg";

export const AboutUs = () => {
    return (
        <div className="aboutUs-background">
            <div className="aboutUs">

            <div className="aboutUs-title">
                <h2>
                    Sobre Nosotros
                </h2>
                <div className="lineRed"></div>
                <div className="lineGrey"></div>
            </div>
            <div className="aboutUs-main">
                <div className="aboutUs-video">
                    <div className="video-iframe">
                        <iframe width="560" src="https://www.youtube.com/embed/sca4VG9b0NY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                        </iframe>
                    </div>                
                </div> {/* fin aboutUs-video */}
                <div className="aboutUs-paragraph">
                    <p>
                    Es una compañía española especializada en la venta de propiedades inmobiliarias, que destaca por su trato cercano y totalmente personalizado.                    
                    </p>
                    <p>
                    consciente de la confianza depositada por nuestros clientes nos sentimos día a día más comprometidos en el mejoramiento y calidad de nuestros servicios, brindando honestidad, excelencia y eficiencia en la labor encomendada.
                    </p>
                    <p>
                    Para ello contamos con un grupo de profesionales altamente  calificados, dotados  de un alto grado de responsabilidad y honestidad
                    </p>                
                </div> {/* fin aboutUs-paragraph */}
            </div> {/* fin aboutUs-main */}
                
            
            </div>
           
        </div>
    );
  };