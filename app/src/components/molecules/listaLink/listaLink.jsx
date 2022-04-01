import "./listaLink.scss";
import { BotonSingIn } from "../../molecules/botonSingIn/botonSingIn";

export const ListaLink = () => {
  return (
    <ul>
      <li>
        <a>Encuentranos</a>
      </li>
      <li>
        <a>Nosotros</a>
      </li>
      <li>
        <a>Servicios</a>
      </li>
      <li>
        <a>Contactanos</a>
      </li>
      <li className="invertButton">
        <BotonSingIn />
      </li>
    </ul>
  );
};
