import { useContext, useState, createContext, useEffect } from "react";

export const PropertyContext = createContext([]);

//Custom Hook
export const useProperty = () => useContext(PropertyContext);

// Custom Provider
export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [property, setProperty] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch("/properties.json")
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((data) => {
  //       setProperties(data);
  //       console.log(data);
  //     })
  //     .catch(console.error("Error al realizar el fetch de propiedades"))
  //     .finally(setIsLoading(false), console.log(properties));
  // }, []);

  const addProperty = () => {};
  const filterProperty = () => {};
  const updateProperty = () => {};
  const deleteProperty = () => {};

  return (
    <PropertyContext.Provider
      value={{
        properties,
        property,
        addProperty,
        filterProperty,
        updateProperty,
        deleteProperty,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};
