import { useContext, useState, createContext, useEffect } from "react";
import { useUser } from "./userContext";

export const PropertyContext = createContext([]);

//Custom Hook
export const useProperty = () => useContext(PropertyContext);

// Custom Provider
export const PropertyProvider = ({ children }) => {
  const {userSession} = useUser()
  const [properties, setProperties] = useState([]);
  const [filterProperties, setFilterProperties] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [property, setProperty] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
    
  }, []);

useEffect(()=>{
  listCity(properties);
},[properties])


  const fetchProperties = async ()=>{
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      const response = await fetch("http://localhost:8000/api/propiedades", requestOptions)
      const data = await response.json()
      setProperties(data.data)
  }
  

  const listCity = (array) => {
    setIsLoading(true);
    const countries = [" "];
    const cities = [" "];
    for (let index = 0; index < array.length; index++) {
      const cityElement = array[index];
      cities.push(cityElement.ubicacion.ciudad);
      const countryElement = array[index];
      countries.push(countryElement.ubicacion.pais);
    }

    const newArrCity = cities.filter(
      (item, index) => cities.indexOf(item) === index
    );
    const newArrCountry = countries.filter(
      (item, index) => countries.indexOf(item) === index
    );

    setCityList(newArrCity);
    setCountryList(newArrCountry);
  };

  
  const getByFilter = (
    array,
    pais,
    ciudad,
    disponibilidad,
    capacidad,
    precio
  ) => {
    let filter = [];
    let filterCiudad =[]
    console.log(pais);
    console.log(ciudad);
 
    pais
      ? 
        array.map((data) => {
          if (data.ubicacion.pais === pais) {
            filter = [...filter, data];
          
          }
        }):console.log("no se establecio filtro de pais");
        
       
    ciudad
      ? filter.map((data) => {
          if (data.ubicacion.ciudad === ciudad) {
            filterCiudad = [...filterCiudad, data];
          }
        })
      : console.info("no se establecio filtro de ciudad");

 
ciudad ? 
    setFilterProperties(filterCiudad):setFilterProperties(filter)
  };


const addProperty = async (values) => {
    try {
      const response = await fetch("http://localhost:8000/api/propiedades", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
              'Content-Type': 'application/json',
              'Authorization': userSession.token                    
          },
      }).then(res => res.json()).then(res => res)

      return response

  } catch (error) {
      console.log("ERROR EN SIGNIN: ", error)      
  }
  };
  
  const updateProperty = async (values, img, id) => {
    try {
      const headers = !img
        ? {
            "Content-Type": "application/json",
            Authorization: userSession.token,
          }
        : { Authorization: userSession.token };
      const response = await fetch(
        `http://localhost:8000/api/propiedades/${id}`,
        {
          method: "PUT",
          body: !img ? JSON.stringify(values) : values,
          headers: headers,
        }
      )
        .then((res) => res.json())
        .then((res) => res);
      console.log("respuesta en property", response);
      return response;
    } catch (error) {
      console.log("UPDATE ERROR: ", error);
    }
  };
  const deleteProperty = () => {};

  return (
    <PropertyContext.Provider
      value={{
        setFilterProperties,
        filterProperties,
        getByFilter,
        isLoading,
        setIsLoading,
        properties,
        fetchProperties,
        property,
        cityList,
        countryList,
        listCity,
        addProperty,
        updateProperty,
        deleteProperty,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};
