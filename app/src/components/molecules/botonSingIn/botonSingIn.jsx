import React, { useEffect, useState } from "react";
import { useUser } from "../../../contexts/userContext";
import { logOutDark } from "../../atoms/atomsIndex";
import { NavLink } from "react-router-dom";
import "./botonSingIn.scss";

export const BotonSignIn = () => {

  const { userSession, logoutUser } = useUser();

  const [avatarUser, setAvatarUser] = useState({});

  useEffect(() => {
    setAvatarUser(userSession);
  }, [userSession]);

  return (
    <>
      {avatarUser ? (
        <div className="userMain">
          <NavLink to={`/profile`}>
            <img
              src={avatarUser.avatar}
              alt="User profile"
              className="imgAvatar"
            />
          </NavLink>          
          <img
            src={logOutDark}
            alt="Log Out"
            className="logOut"
            onClick={(e) => {
              logoutUser()              
            }}
          />         
        </div>
      ) : (
        <div className="signIn">
          <a href="/login">
            <p>Iniciar sesion</p>
          </a>
        </div>
      )}
    </>
  );
};
