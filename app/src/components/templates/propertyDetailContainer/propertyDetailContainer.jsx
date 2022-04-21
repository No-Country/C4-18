import { DetalleServicios } from "../../molecules/DetalleServicios/DetalleServicios";
import { DetallesPropiedad } from "../../organisms/DetallesPropiedad/DetallesPropiedad";
import { ImagesSlides } from "../../organisms/ImagesSlide/ImagesSlide";
import "./propertyDetailContainer.scss";

export const PropertyDetailContainer = (props) => {
  const property = props.property;

  const map =
    "https://www.google.com/maps/embed/v1/place?q=51.506222,+-0.162422&key=AIzaSyAuVvdNHxezUbVXmzihOPZzfFWxZ8Ewpjo";

  return (
    <>
      <div className="container">
        {property ? (
          <div className="grid">
            <div className="imagenes">
              <ImagesSlides imagenes={property.imagenes} />
            </div>
            <div className="detalles">
              <DetallesPropiedad property={property} />
            </div>
            <div className="servicios">
              <DetalleServicios property={property} />
            </div>
            <div className="mapa">
              <iframe
             
                src={map}
              ></iframe>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
