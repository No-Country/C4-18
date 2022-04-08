import { PropertiesDisplay } from '../../organisms/propertiesDisplay/propertiesDisplay'
import './propertiesViewContainer.scss'

export const PropertiesViewContainer =()=>{



    return (
<div className="propertiesViewLandingPage">
<h2 className="seccionTitle">Más populares </h2>
<div className="lineRed"></div>
<div className="lineGrey"></div>
<PropertiesDisplay/>
    
</div>

    )


}