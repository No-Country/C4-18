import './landingPage.scss'
import {MainViewContainer} from '../../templates/mainViewContainer/mainViewContainer'
import { PropertiesViewContainer } from '../../templates/propertiesViewContainer/propertiesViewContainer'
import { OpinionViewContainer } from '../../templates/opinionViewContainer/opinionViewContainer'
import { CiudadesViewContainer } from '../../templates/ciudadesViewContainer/ciudadesViewContainer'

export const LandingPage =()=>{


return(
<div className="landingPage">

<MainViewContainer />
<CiudadesViewContainer/>
<PropertiesViewContainer/>
<OpinionViewContainer/>

</div>

)

}