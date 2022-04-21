import { NavLink } from 'react-router-dom'
import { useProperty } from '../../../contexts/propertyContext'
import { PropertiesDisplay } from '../../organisms/propertiesDisplay/propertiesDisplay'
import './propertiesViewContainer.scss'

export const PropertiesViewContainer =()=>{
const {properties} = useProperty()


    return (
<div className="propertiesViewLandingPage">
<h2 className="seccionTitle">Más populares </h2>
<div className="lineRed"></div>
<div className="lineGrey"></div>
{properties.length ? (
        <PropertiesDisplay propiedades={properties} cantidad={6} />
      ) : (
        <></>
      )}
<NavLink to={`/search`} className="verMasNav">
      <button className="verMas">Ver Mas</button>
</NavLink>
</div>

    )


}