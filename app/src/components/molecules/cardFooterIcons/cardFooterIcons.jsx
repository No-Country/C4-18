import "./cardFooterIcons.scss"
import {iconDucha, iconEstacionamiento, iconCamas, iconMetros, iconWifi} from "../../atoms/atomsIndex"

export const CardFooterIcons =(props)=>{
 
return (
    <div className="iconContainer">
    {props.Camas ?<div className="capacidad"><p>{props.Camas}</p><img src={iconCamas} alt="" /></div> :<></>}
    {props.Ducha ? <img src={iconDucha} alt="" />:<></>}
    {props.Estacionamiento ? <img src={iconEstacionamiento} alt="" />:<></>}
    {props.Internet ? <img src={iconWifi} alt="" />:<></>}
    {props.Metraje ? <div className="metrosCuadrados"><img src={iconMetros} alt="" /><p>{props.Metraje} m2</p></div> :<></>}
    </div>

)
}
