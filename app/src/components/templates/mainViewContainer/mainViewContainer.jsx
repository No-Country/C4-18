import "./mainViewContainer.scss";
import { LogoCentral } from "../../molecules/logoCentral/logoCentral";
import { NavBar } from "../../organisms/navBar/navBar";
import { useUser } from "../../../contexts/userContext";
import { BottomNav } from "../../molecules/BottomNav/BottomNav";


export const MainViewContainer = () => {

  const { userSession } = useUser();

  return (
    <div className="mainViewBackground">
      <div className="mainView">
        <NavBar />
        <LogoCentral />
        {userSession ?  <BottomNav/> : <></>}
      </div>
      
    </div>
  );
};
