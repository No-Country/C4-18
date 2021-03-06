import "./propertiesDisplay.scss";
import { PropertyCard } from "../../molecules/propertyCard/propertyCard";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const PropertiesDisplay = (props) => {
  const [seleccion, setSeleccion] = useState([]);

  useEffect(() => {
    if (props.cantidad !== null) {
      let element = [];
      for (let i = 0; i < props.cantidad; i++) {
        element = [...element, props.propiedades[i]];
        setSeleccion(element);
      }
    } else {
      setSeleccion(props.propiedades);
    }
  }, [props]);


  return (
    <>
      <div className="propertiesCardShow">
        {seleccion.length ? (
          seleccion.map((data) => (
            <NavLink to={`/producto/${data._id}`}className="navLink">
            <PropertyCard
              key={data._id}
              id={data._id}
              imgPrincipal={data.imagenes[0]}
              ciudad={data.ubicacion.ciudad}
              direccion={data.ubicacion.direccion}
              precio={data.precio}
              servicios={data.servicios}
            />
          </NavLink>
      
          ))
        ) : (
          <>
            <p>Loading ...</p>
          </>
        )}
      </div>
    </>
  );
};