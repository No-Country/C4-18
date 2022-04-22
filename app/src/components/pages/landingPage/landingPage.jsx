import './landingPage.scss'
import {MainViewContainer} from '../../templates/mainViewContainer/mainViewContainer'
import { PropertiesViewContainer } from '../../templates/propertiesViewContainer/propertiesViewContainer'
import { AboutUs } from "../../organisms/aboutUs/aboutUs"
import { OpinionViewContainer } from '../../templates/opinionViewContainer/opinionViewContainer'
import { CiudadesViewContainer } from '../../templates/ciudadesViewContainer/ciudadesViewContainer'
import { Footer } from '../../organisms/footer/footer'
import { ContactViewContainer } from '../../templates/contactViewContainer/contactViewContainer'

export const LandingPage =()=>{


return(
<div className="landingPage">

<MainViewContainer />
<CiudadesViewContainer/>
<AboutUs/>
<PropertiesViewContainer/>
<OpinionViewContainer/>
<ContactViewContainer/>
<Footer/>
</div>

)

}