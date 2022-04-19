import "./DetallesPropiedad.scss";
import { shareButton, likeButton } from "../../atoms/atomsIndex";
import { useState, useEffect } from "react";
import { useUser } from "../../../contexts/userContext";

export const DetallesPropiedad = (props) => {
  
  const {
    userSession
  } = useUser();

useEffect(()=>{  console.log(userSession)},[userSession])
  
  const property = props.property;


  const date = new Date();

  let initDate = "";
  let maxDate = "";

  const dateFormat = (date) => {
    const mes = (date.getMonth() + 1).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    const dia = date
      .getDate()
      .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
    const anoMax = (date.getFullYear() + 1).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    initDate = `${date.getFullYear()}-${mes}-${dia}`;
    maxDate = `${anoMax}-${mes}-${dia}`;
  };

  dateFormat(date);

  const [consulta, setConsulta] = useState({
    idUser: userSession.userId,
    idPost: property._id,
    startDate: "",
    endDate: "",
    payment: {},
  });

  const handleChange = (event) => {
    event.target.name === "trip-start" ? (
      setConsulta({ ...consulta, startDate: event.target.value })
    ) : (
      <></>
    );
    event.target.name === "trip-finish" ? (
      setConsulta({ ...consulta, endDate: event.target.value })
    ) : (
      <></>
    );
  };

  const enviarConsulta = (event) => {
    event.preventDefault();

      fetch("http://localhost:8000/api/reservas", {
        method: "POST",
        body: JSON.stringify(consulta),
        headers: {
            'Content-Type': 'application/json',
            "Authorization":userSession.token               
        },
    }).then(res => res.json()).then(res => res.data).finally(console.log("Consulta Enviada"))
    
  };

  return (
    <>
      <form onSubmit={enviarConsulta} className="formularioConsulta">
        <div className="detalleTitulo">
          <h3>{property.titulo}</h3>
          <div className="iconos">
            <img src={shareButton} alt="Compartir" />
            <img src={likeButton} alt="Agregar a favoritos" />
          </div>
        </div>
        <div className="detalleGeneral">
          <p className="condiciones">{property.condiciones}</p>
          <p>
            {property.ubicacion.pais} / {property.ubicacion.ciudad}
          </p>
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
            min={initDate}
            max={maxDate}
            onChange={handleChange}
          />
          <input
            className="fechaFinal"
            type="date"
            id="finish"
            name="trip-finish"
            min={initDate}
            max={maxDate}
            onChange={handleChange}
          />
        </div>
        <div className="detallePrecio">
          <p>Precio por noche: </p>
          <h3>$ {property.precio}</h3>
        </div>
        <button type="submit" className="botonConsultar">
          {" "}
          Consultar{" "}
        </button>
      </form>
    </>
  );
};
