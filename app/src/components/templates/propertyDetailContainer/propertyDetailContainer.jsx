import { DetalleServicios } from "../../molecules/DetalleServicios/DetalleServicios";
import { DetallesPropiedad } from "../../organisms/DetallesPropiedad/DetallesPropiedad";
import { ImagesSlides } from "../../organisms/ImagesSlide/ImagesSlide";
import "./propertyDetailContainer.scss";

export const PropertyDetailContainer = (props) => {
  const property = props.property;
  


const map = "https://maps.google.com/maps?q={lat},%20-0.141797&t=&z=13&ie=UTF8&iwloc=&output=embed"


  return (
    <>
        <div className="container">
      {property ? (
        <div className="grid">
          <div className="imagenes">
            <ImagesSlides imagenes={property.imagenes}/>
          </div>
          <div className="detalles">
            <DetallesPropiedad property={property} />
          </div>
          <div className="servicios">
            <DetalleServicios property={property} />
          </div>
          <div className="mapa">
          
              <iframe width="100%" height="100%"  id="gmap_canvas" src={map} scrolling="no" ></iframe>
              
            
          
          </div>
          </div>
      ) : (
        <></>
        )}
        </div>
    </>
  );
};
