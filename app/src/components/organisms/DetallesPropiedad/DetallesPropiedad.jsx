import "./DetallesPropiedad.scss";
import { shareButton, likeButton } from "../../atoms/atomsIndex";
import { useState, useEffect } from "react";
import { useUser } from "../../../contexts/userContext";
import { Toast, Swal } from "../../atoms/atomsIndex";

export const DetallesPropiedad = (props) => {
  const { userSession } = useUser();

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
    idUser: "",
    idPost: "",
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

    setConsulta({
      ...consulta,
      idPost: property._id,
      idUser: userSession.userId,
    });

    fetch("http://localhost:8000/api/reservas", {
      method: "POST",
      body: JSON.stringify(consulta),
      headers: {
        "Content-Type": "application/json",
        Authorization: userSession.token,
      },
    })
      .then((res) => res.json())
      .then((res) => res.data)
      .finally(console.log("Consulta Enviada"));
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
        {/* <div className="detalleCapacidad">
          <p>Consulta para XX cantidad de personas</p>
        </div> */}

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

        {userSession ? (
          <button
            type="submit"
            className="botonConsultar"
            onClick={() => {
              Toast.fire({
                icon: "success",
                title: "Consulta enviada correctamente",
              });
            }}
          >
            Consultar{" "}
          </button>
        ) : (
          <button
            className="botonConsultar"
            onClick={() => {
              Swal.fire({
                icon: "error",
                title: "Inicie sesion para realizar una consulta",
              });
            }}
          >
            Consultar
          </button>
        )}
      </form>
    </>
  );
};
