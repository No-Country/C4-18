import "./mainViewContainer.scss";
import { LogoCentral } from "../../molecules/logoCentral/logoCentral";
import { NavBar } from "../../organisms/navBar/navBar";

export const MainViewContainer = () => {
  return (
    <div className="mainViewBackground">
      <div className="mainView">
        <NavBar />
        <LogoCentral /> 
      </div>
    </div>
  );
};
