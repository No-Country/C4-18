import React, { useEffect, useState } from "react";
import { useUser } from "../../../contexts/userContext";
import { InputUser } from "../../molecules/inputUser/inputUser";
import "./userProfile.scss";
import editIcon from "../../../imagenes/icons/pencil-solid.svg";

export const UserProfile = () => {
  const { userSession, updateUser } = useUser();
  const [avatar, setAvatar] = useState("https://storage.googleapis.com/homenocountry-7389e.appspot.com/img-624eefc15144031e64ada31b.1649787325072.png")

  useEffect(() => {
    console.log("USER EN USERPROFILE: ", userSession);
    setTimeout(() => {
      asyncImg()
    }, 1000);
    
  }, [userSession]);

  const handleUpdate = (value)=>{
    updateUser(value);
  }

  const asyncImg = async ()=>{
    if(userSession){
      const imgAvatar = await userSession.avatar[0]
    console.log("IMAGEN", imgAvatar)
    setAvatar(imgAvatar)
  }
  }

  const handleUpdateAvatar = async (e)=>{    
    const formdata = new FormData();
    formdata.append("avatar", e.target.files[0], e.target.files[0].name);   
    updateUser(formdata, true)  
  }

  return userSession ? (
    <div className="userProfileContainer">
      <div className="accountData">
        <div className="imgContainer">
          <img className='avatarImg' src={avatar} alt="avatar" />
          <button
            className="buttonImg"
            type="button"            
          >
            <img className='iconImg' src={editIcon} alt="icon" />
          </button>
          <input className='fileImg' type="file" name="avatar" onChange={(e) => handleUpdateAvatar(e)}/>
        </div>
        <h2>Datos Cuenta</h2>
        <div className="accountDataForm">
          <InputUser value={userSession.correo} type="email" textData="Correo" nonEditable={true} nameInput='correo' handleUpdate={handleUpdate}/>
          <InputUser value={userSession.password} type="password" textData="Contraseña" nonEditable={true} nameInput='password' handleUpdate={handleUpdate}/>
        </div>
      </div>
      <div className="personalData">
        <h3>Datos Personales</h3>
        <div className="personalDataForm"> 
            <InputUser value={userSession.nombre} textData="Nombre y Apellido" nameInput='nombre' handleUpdate={handleUpdate}/>
            <InputUser value={userSession.dni} textData="Documento" nameInput='dni' handleUpdate={handleUpdate} />
            <InputUser value={userSession.telefono} textData="Telefono" nameInput='telefono' handleUpdate={handleUpdate} />
            <InputUser value={userSession.fechaDeNacimiento} type="date" textData="Fecha de nacimiento" nameInput='fechaDeNacimiento' handleUpdate={handleUpdate} />
            <InputUser value={userSession.direccion} textData="Direccion" nameInput='direccion' handleUpdate={handleUpdate} />
        </div>
      </div>
    </div>
  ) : (
    "Loading..."
  );
};
