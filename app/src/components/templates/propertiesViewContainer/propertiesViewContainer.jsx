import { NavLink } from 'react-router-dom'
import { useProperty } from '../../../contexts/propertyContext'
import { PropertiesDisplay } from '../../organisms/PropertiesDisplay/PropertiesDisplay'
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
<NavLink to={`/search`}>
      <button>Ver Mas</button>
</NavLink>
</div>

    )


}