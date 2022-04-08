import './landingPage.scss'
import {MainViewContainer} from '../../templates/mainViewContainer/mainViewContainer'
import { PropertiesViewContainer } from '../../templates/propertiesViewContainer/propertiesViewContainer'
import { OpinionViewContainer } from '../../templates/opinionViewContainer/opinionViewContainer'

export const LandingPage =()=>{


return(
<div className="landingPage">

<MainViewContainer />
<PropertiesViewContainer/>
<OpinionViewContainer/>

</div>

)

}