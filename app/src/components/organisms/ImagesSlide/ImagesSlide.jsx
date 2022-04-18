import { PictureSlider } from "../../molecules/PictureSlider/PictureSlider";
import "./ImagesSlides.scss";

export const ImagesSlides = (props) => {
  

  return (
    <>

        <div className="frontImage">
        <img
          src={props.imagenes[0]}
          alt="Imagen Principal"
          />
          </div>

        <div className="sliderContainer">
          <PictureSlider imagenes={props.imagenes}/>
        </div>
        <div className="filter"></div>
    
    </>
  );
};
