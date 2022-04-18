import "./DetallesPropiedad.scss";
import { shareButton, likeButton } from "../../atoms/atomsIndex";
export const DetallesPropiedad = (props) => {

const property = props.property


  return (
    <>
      <div className="detalleTitulo">
        <h3>{property.titulo}</h3>
        <div className="iconos">
          <img src={shareButton} alt="Compartir" />
          <img src={likeButton} alt="Agregar a favoritos" />
        </div>
      </div>
      <div className="detalleGeneral">
        <p className="condiciones">
        {property.condiciones}
        </p>
        <p>{property.ubicacion.pais} / {property.ubicacion.ciudad}</p>
        <p>{property.ubicacion.direccion}</p>
      </div>
      <div className="detalleCapacidad">
        <p>Consulta para XX cantidad de personas</p>
      </div>

      <div className="detalleDisponibilidad">
        <input
          className="fechaInicial"
          type="date"
          id="start"
          name="trip-start"
          // value="2021-04-19"
          min="2021-04-19"
          max="2022-04-18"
        />
        <input
          className="fechaFinal"
          type="date"
          id="finish"
          name="trip-finish"
          // value="2022-04-19"
          min="2021-04-19"
          max="2022-04-18"
        />
      </div>
      <div className="detallePrecio">
        <p>Precio por noche: </p><h3>$ {property.precio}</h3>
      </div>
      <button className="botonConsultar"> Consultar </button>
    </>
  );
};
