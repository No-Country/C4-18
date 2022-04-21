import { useEffect, useState } from "react";
import "./PictureSlider.scss";

export const PictureSlider = (props) => {
  const [imagenes, setImagenes] = useState([]);

  let arraySlider = [];

  const arrayImagenes = (array) => {
    for (let index = 1; index < array.length; index++) {
      arraySlider = [...arraySlider, { imagen: array[index], id: index }];
    }
  };
  useEffect(() => {
    arrayImagenes(props.imagenes);
    setImagenes(arraySlider);
  }, []);

  return (
    <div className="slider">
      {imagenes.map((data) => (
        <div key={data.id} className="sliderImg">
          <img src={data.imagen} alt="foto 1" />
        </div>
      ))}
    </div>
  );
};
