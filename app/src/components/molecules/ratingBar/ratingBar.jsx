import "./ratingBar.scss"
import { emptyStar,fullStar,halfStar } from "../../atoms/atomsIndex"

export const RatingBar =()=>{

return(
<div className="ratingBar">

<img src={fullStar} alt="" />
<img src={fullStar} alt="" />
<img src={fullStar} alt="" />
<img src={halfStar} alt="" />
<img src={emptyStar} alt="" />

</div>
)
}