import "./DetalleServicios.scss";
import {
  iconDuchaDark,
  iconEstacionamientoDark,
  iconCamasDark,
  iconMetros,
  iconWifiDark,
} from "../../atoms/atomsIndex";

export const DetalleServicios = (props) => {

  const property = props.property

  const servicios = property.servicios

  return (
    <>
      <div className="descripcion">
          <p>{property.descripcion}</p>
      </div>

      <div className="serviciosDetalle">
        <div className="columna">
          <div className="item-1">
            <img src={iconCamasDark} alt="" /> <span>Hasta {servicios.capacidad} huespedes</span>
          </div>
          <div className="item-2">
            <img src={iconDuchaDark} alt="" /> <span>Cuenta con {servicios.baños} baños </span>
          </div>
         {servicios.estacionamiento  ? <div className="item-3">
            <img src={iconEstacionamientoDark} alt="" />{" "}
            <span>cuenta con estacionamiento privado</span>{" "}
          </div>: <></>}
        </div>
        <div className="columna">
        {servicios.internet  ?   <div className="item-1">
            <img src={iconWifiDark} alt="" />
            <span>Conexion Wifi en toda la vivienda</span>
          </div>: <></>}
          <div  className="item-2">
            <img src={iconMetros} alt="" /> <span>{servicios.metraje} Metros Cuadrados</span>
          </div>
        </div>
      </div>
    </>
  );
};
