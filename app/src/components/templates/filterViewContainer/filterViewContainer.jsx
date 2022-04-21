import "./filterViewContainer.scss";

import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useProperty } from "../../../contexts/propertyContext";
import { PropertiesDisplay } from "../../organisms/propertiesDisplay/propertiesDisplay";

export const FilterViewContainer = () => {
  const {
    properties,
    cityList,
    countryList,
  } = useProperty();

  const [propiedades, setPropiedades] = useState([]);
  const [filtroPais, setFiltroPais] = useState(" ");
  const [filtroCiudad, setFiltroCiudad] = useState(" ");
  const [capacidad, setCapacidad] = useState(0);
  const [loading, setLoading] = useState(true);

  const getProperties = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      "http://localhost:8000/api/propiedades",
      requestOptions
    );
    const data = await response.json();
    setPropiedades(data.data);
  };

  useEffect(() => {
    getProperties();
  }, []);

  const funcionFiltro = (array, pais, ciudad, capacidad) => {
    let filter = [];
    let filterCiudad = [];
    console.log(pais);
    console.log(ciudad);
    pais
      ? array.map((data) => {
          if (data.ubicacion.pais === pais && data.servicios.capacidad >= capacidad) {
            console.log(data);
            console.log(data.servicios.capacidad)

            filter = [...filter, data];
            console.log(filter);
          }
        })
      : console.log("no se establecio filtro de pais");

    ciudad !== " " && ciudad
      ? filter.map((data) => {
          if (data.ubicacion.ciudad === ciudad && data.servicios.capacidad >= capacidad) {
            console.log(data);
            filterCiudad = [...filterCiudad, data];
          }
        })
      : console.info("no se establecio filtro de ciudad");

    ciudad !== " " ? setPropiedades(filterCiudad) : setPropiedades(filter);
  };

  // useEffect(() => {
  //   if (filtroPais !== " " || filtroCiudad !== " " || capacidad !== 0) {
  //     getByFilter(propiedades, filtroPais, filtroCiudad, null, capacidad);
  //     setPropiedades(filterProperties);
  //   }
  // }, [filtroCiudad, filtroPais, capacidad]);

  useEffect(() => {
    if (filtroPais !== " " || filtroCiudad !== " " || capacidad !== 0) {
      funcionFiltro(properties, filtroPais, filtroCiudad, capacidad);
    } else {
      setPropiedades(properties);
    }
  }, [filtroCiudad, filtroPais, capacidad]);

const filtroCapacidad =(array, )=>{

// console.log(capacidad)
// filter.map((data) => {
//           if (data.ubicacion.ciudad === ciudad) {
//             console.log(data);
//             filterCiudad = [...filterCiudad, data];
//           }
//         })
//       : console.info("no se establecio filtro de ciudad");


}

useEffect(()=>{

  
})

  const showMoreProperties = () => {
    console.log("Funca el click");
  };

  return (
    <div className="filterContainer">
      <div className="filterBar">
        <div className="locationFilter">
          <select onChange={(e) => setFiltroPais(e.target.value)}>
            {countryList.length ? (
              countryList.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))
            ) : (
              <></>
            )}
          </select>
          <select onChange={(e) => setFiltroCiudad(e.target.value)}>
            {cityList.length ? (
              cityList.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))
            ) : (
              <></>
            )}
          </select>
        </div>
        <div className="capacityFilter">
          <h4>Huespedes</h4>
          <input onChange={(e) => setCapacidad(e.target.valueAsNumber)} type="number" />
        </div>
      </div>
      <div className="lineRed"></div>
      <div className="lineGrey"></div>
      <PropertiesDisplay propiedades={propiedades} cantidad={null} />
    </div>
  );
};
