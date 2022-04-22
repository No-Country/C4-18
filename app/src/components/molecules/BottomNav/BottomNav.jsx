import "./BottomNav.scss";
import { NavLink } from "react-router-dom";

export const BottomNav = () => {
  return (
    <div className="bottomNav">
        <NavLink to="/search" className="buscar">
      
          <h3>Buscar hospedajes</h3>
      
        </NavLink>
        <NavLink to="/post" className="publicar">
    
          <h3>Publicar nuevo hospedaje</h3>
   
        </NavLink>
    </div>
  );
};
