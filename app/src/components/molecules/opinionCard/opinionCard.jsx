import { RatingBar } from "../ratingBar/ratingBar";
import "./opinionCard.scss";

export const OpinionCard = () => {
  return (
    <div className="opinionCard">
      <div className="avatarOpinion"></div>
      <RatingBar/>
      <p className="opinion">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laborum
        adipisci, facilis quis voluptatem quo.
      </p>
    </div>
  );
};
    