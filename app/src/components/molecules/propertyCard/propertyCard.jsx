import { CardFooterIcons } from "../cardFooterIcons/cardFooterIcons";

import "./propertyCard.scss";

export const PropertyCard = (props) => {
  return (
    <>
      <div style={{ backgroundImage: `url(${props.imgPrincipal})` }}className="cardContainer" >
        <div className="cardFooter">
          <h2 className="ciudad">{props.ciudad}</h2>
          <p className="direccion">{props.direccion}</p>
          <p className="precio">$ {props.precio}</p>
          <div className="cardIcons">
            <CardFooterIcons
              Camas={2}
              Ducha={true}
              Estacionamiento={true}
              Internet={true}
              Metraje={65}
            />
          </div>
        </div>
      </div>
    </>
  );
};
