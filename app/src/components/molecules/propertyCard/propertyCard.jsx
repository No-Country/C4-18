import { CardFooterIcons } from "../cardFooterIcons/cardFooterIcons";

import "./propertyCard.scss";

export const PropertyCard = (props) => {

  return (
    <>
      <div style={{ backgroundImage: `url(${props.imgPrincipal})` }}className="cardContainer" >
        <div className="cardFooter">
          <h2 className="ciudad">{props.ciudad}</h2>
          <div className="line"></div>
          <p className="direccion">{props.direccion}</p>
          <p className="precio">$ {props.precio}</p>
          <div className="cardIcons">
            <CardFooterIcons
              key={props._id}
              Camas={props.servicios.capacidad}
              Ducha={props.servicios.ducha}
              Estacionamiento={props.servicios.estacionamiento}
              Internet={props.servicios.internet}
              Metraje={props.servicios.metraje}
            />
          </div>
        </div>
      </div>
    </>
  );
};
