import React, { useEffect, useState } from "react";
import "./inputUser.scss";
import editIcon from "../../../imagenes/icons/pencil-solid.svg";
import confirmIcon from "../../../imagenes/icons/circle-check-solid.svg";

export const InputUser = ({
  type = "text",
  value = "Completar Datos",
  textData = "Loading...",
  nonEditable = false,
  nameInput,
  handleUpdate,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [iconButton, setIconButton] = useState(editIcon);
  const [setHidden, setSetHidden] = useState(true);
  const inputType = type;

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    const toggle = iconButton === editIcon ? confirmIcon : editIcon;
    setIconButton(toggle);
    setSetHidden(!setHidden)
    if(toggle === editIcon) handleUpdate({[nameInput]: inputValue})
  };

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <div className="inputUserContainer">
      <label className="labelUser">{textData}</label>

      <div className="inputWrap">
        <input
          className="inputUser"
          type={inputType}
          value={inputValue}
          onChange={(e) => {
            handleInputValue(e);
          }}
          disabled={setHidden}
        />
        {nonEditable ? (
          ""
        ) : (
          <button
            className="inputButton"
            type="button"
            onClick={() => handleClick()}
          >
            <img src={iconButton} alt="icon" />
          </button>
        )}
      </div>
    </div>
  );
};
