import "./listaLink.scss";
import { BotonSignIn } from "../../molecules/botonSingIn/botonSingIn";

export const ListaLink = () => {
  return (
    <div className="listaLink">
    <ul >
      <li>
        <a href="./">Encuentranos</a>
      </li>
      <li>
        <a href="./">Nosotros</a>
      </li>
      <li>
        <a href="./">Servicios</a>
      </li>
      <li>
        <a href="./">Contactanos</a>
      </li>
      <li className="invertButton">
        <BotonSignIn />
      </li>
    </ul>

    </div>
  );
};
