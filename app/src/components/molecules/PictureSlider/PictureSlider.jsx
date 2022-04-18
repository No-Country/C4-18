import { useEffect, useState } from "react"
import "./PictureSlider.scss"


export const PictureSlider =(props)=>{

    const [imagenes, setImagenes] = useState([])

useEffect(()=>{
    
    setImagenes([props.imagenes[1],props.imagenes[2],props.imagenes[3]])
},[props])

    return (
        <div className="slider">
            {imagenes.map((data)=>
              
                    (<div className="sliderImg">
                    <img src={data} alt="foto 1" />
                    </div>)
           
                    )
                    }

            



        </div>
    )
}