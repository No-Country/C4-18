import "./saludo.scss";
import logo from '../../atoms/logo.svg'

export const Saludo = () => {
  return (
    <div className="saludo">
        <div  className="titulo">
          <h1>App G18 No Country</h1>
          <p>Desarrollo de app de publicacion y alquiler de hospedajes</p>
        </div>
        <img src={logo} alt="ACA VA EL LOGO" className="logo" />
    </div>
  );
};

