import { DetalleServicios } from "../../molecules/DetalleServicios/DetalleServicios";
import { DetallesPropiedad } from "../../organisms/DetallesPropiedad/DetallesPropiedad";
import { ImagesSlides } from "../../organisms/ImagesSlide/ImagesSlide";
import "./propertyDetailContainer.scss";

export const PropertyDetailContainer = (props) => {
  const property = props.property;

  const map =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6457860615346!2d-0.14407868358872533!3d51.50136731896428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760520cd5b5eb5%3A0xa26abf514d902a7!2sBuckingham%20Palace!5e0!3m2!1sen!2sar!4v1650542698187!5m2!1sen!2sar";

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
            <iframe src={map} width="500" height="300"></iframe>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
