import { OpinionCard } from "../../molecules/opinionCard/opinionCard"
import "./opinionDisplay.scss"

export const OpinionDisplay =() =>{

return(
<div className="opinionDisplay">
<div className="buttonLeft"></div>
<OpinionCard/>
<OpinionCard/>
<OpinionCard/>
<OpinionCard/>
<div className="buttonRight"></div>
</div>
)
}