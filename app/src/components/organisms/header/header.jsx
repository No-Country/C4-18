import { useEffect, useState } from "react";
import { useUser } from "../../../contexts/userContext";
import { logoHeader, logOut } from "../../atoms/atomsIndex";
import { NavLink } from "react-router-dom";

import "./header.scss";

export const Header = () => {
  const { userSession, logoutUser } = useUser();
  const [avatarUser, setAvatarUser] = useState({});

  useEffect(() => {
    setAvatarUser(userSession);
  }, [userSession]);

  return (
    <div className="headerContainer">
      <div className="user">
        <div className="avatarUser">
          {avatarUser ? (
            <NavLink to={`/profile`}>
              <img
                src={avatarUser.avatar}
                alt="User profile"
                className="imgAvatar"
              />
            </NavLink>
          ) : (
            <></>
          )}
          <div className="header">
            <a href="/">
              <img src={logoHeader} alt="logoHeader" />
            </a>
          </div>
          {userSession ? (
            <img
              src={logOut}
              alt="Log Out"
              className="logOut"
              onClick={() => {
                logoutUser();                
              }}
            />
          ) : (
            <>
              <NavLink to="/login" className="logIn">
                <h3 >
                  Iniciar Sesion
                  </h3>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
