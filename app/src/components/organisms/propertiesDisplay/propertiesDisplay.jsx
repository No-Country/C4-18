import "./propertiesDisplay.scss";

import { PropertyCard } from "../../molecules/propertyCard/propertyCard";
import { useState, useEffect } from "react";


export const PropertiesDisplay = () => {
const [propertiesJson, setPropertiesJson] = useState([])

  const showMoreProperties = () => {
    console.log("Funca el click");
  };
useEffect(() => {
    fetch("./properties.json")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setPropertiesJson(data);
        console.log(data);
      })
      .catch(console.error("Error al realizar el fetch de propiedades"))
      .finally(console.log(propertiesJson));
  }, []);

  return (
    <>
      <div className="propertiesCardShow">
        <PropertyCard
          imgPrincipal={
            "https://www.terra.cl/u/fotografias/m/2021/6/8/f768x1-12131_12258_5050.jpeg"
          }
          ciudad={"Londres"}
          direccion={"London SW1A 1AA, United Kingdom"}
          precio={1500}
        />
        <PropertyCard
          imgPrincipal={
            "https://www.terra.cl/u/fotografias/m/2021/6/8/f768x1-12131_12258_5050.jpeg"
          }
          ciudad={"Londres"}
          direccion={"London SW1A 1AA, United Kingdom"}
          precio={1500}
        />
        <PropertyCard
          imgPrincipal={
            "https://www.terra.cl/u/fotografias/m/2021/6/8/f768x1-12131_12258_5050.jpeg"
          }
          ciudad={"Londres"}
          direccion={"London SW1A 1AA, United Kingdom"}
          precio={1500}
        />
        <PropertyCard
          imgPrincipal={
            "https://www.terra.cl/u/fotografias/m/2021/6/8/f768x1-12131_12258_5050.jpeg"
          }
          ciudad={"Londres"}
          direccion={"London SW1A 1AA, United Kingdom"}
          precio={1500}
        />
        <PropertyCard
          imgPrincipal={
            "https://www.terra.cl/u/fotografias/m/2021/6/8/f768x1-12131_12258_5050.jpeg"
          }
          ciudad={"Londres"}
          direccion={"London SW1A 1AA, United Kingdom"}
          precio={1500}
        />
        <PropertyCard
          imgPrincipal={
            "https://www.terra.cl/u/fotografias/m/2021/6/8/f768x1-12131_12258_5050.jpeg"
          }
          ciudad={"Londres"}
          direccion={"London SW1A 1AA, United Kingdom"}
          precio={1500}
        />
      </div>
      <button onClick={showMoreProperties} className="verMas">Ver mas</button>
    </>
  );
};
