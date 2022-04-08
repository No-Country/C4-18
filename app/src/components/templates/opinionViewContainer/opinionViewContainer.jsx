import { OpinionDisplay } from "../../organisms/opinionDisplay/opinionDisplay";
import "./opinionViewContainer.scss";

export const OpinionViewContainer = () => {
  return (
    <div className="opinionContainer">
      <h2 className="seccionTitle">Tu opinion es importante </h2>
      <div className="lineRed"></div>
      <div className="lineGrey"></div>
      <OpinionDisplay/>
    </div>
  );
};
