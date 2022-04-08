import "./navBar.scss";
import logoNavBar from "../../atoms/logo-navbar.svg";
import { ListaLink } from "../../molecules/listaLink/listaLink";

export const NavBar = () => {
  return (
    <div className="navBar">
     <img src={logoNavBar} alt="Home" className="logoNavBar" />
      <ListaLink />
    </div>
  );
};
