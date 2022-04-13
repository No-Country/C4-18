import "./propertiesDisplay.scss";
import { PropertyCard } from "../../molecules/propertyCard/propertyCard";
import { useEffect, useState } from "react";

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
            <PropertyCard
              key={data._id}
              id={data._id}
              imgPrincipal={data.imagenes[0]}
              ciudad={data.ubicacion.ciudad}
              direccion={data.ubicacion.direccion}
              precio={data.precio}
              servicios={data.servicios}
            />
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
