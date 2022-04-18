import { DetalleServicios } from "../../molecules/DetalleServicios/DetalleServicios";
import { DetallesPropiedad } from "../../organisms/DetallesPropiedad/DetallesPropiedad";
import { ImagesSlides } from "../../organisms/ImagesSlide/ImagesSlide";
import "./propertyDetailContainer.scss";

export const PropertyDetailContainer = (props) => {
  const property = props.property;
  

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
           
            <br />
            <h2>Aca va el mapa</h2>
          </div>
          </div>
      ) : (
        <></>
        )}
        </div>
    </>
  );
};
