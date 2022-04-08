import "./propertiesDisplay.scss";

import { PropertyCard } from "../../molecules/propertyCard/propertyCard";
import { useState, useEffect } from "react";
import { useProperty } from "../../../contexts/propertyContext";


export const PropertiesDisplay = () => {
const {properties} = useProperty()

  const showMoreProperties = () => {
    console.log("Funca el click");
  };

    

  return (
    <>
      <div className="propertiesCardShow">
        <PropertyCard
          imgPrincipal={
            properties[0].imagenes[0]
          }
          ciudad={"Londres"}
          direccion={properties[0].ubicacion}
          precio={1500}
        />
      </div>
      <button onClick={showMoreProperties} className="verMas">Ver mas</button>
    </>
  );
};
