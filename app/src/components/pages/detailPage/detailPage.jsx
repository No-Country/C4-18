import "./detailPage.scss"
import { useEffect, useState} from "react"
import { Header } from "../../organisms/header/header"
import { PropertyDetailContainer } from "../../templates/propertyDetailContainer/propertyDetailContainer"
import { useParams } from "react-router-dom"

export const DetailPage =()=>{
const [propertyById, setPropertyById] = useState([])
const {Id} = useParams()

  const getById = async (id)=>{
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
       const response = await fetch(`http://localhost:8000/api/propiedades/_id/${Id}`, requestOptions)
        const data = await response.json()
         setPropertyById(data.post)
  }
  
  useEffect(()=>{
    
    getById(Id)
    
  },[])


  return(
    <>
    <Header/>
    {propertyById.lenght!==0 ?<PropertyDetailContainer property={propertyById[0]}/> : <></> }
    
    </>
  )
} 