import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Contexts/CartContext";
import { Select } from "react-materialize";
import { Preloader } from "react-materialize";

export const ItemDetail = (props) => {
  const { addItem } = useCart();

  const [cartButton, setCartButton] = useState(false);

  const [qItemToAdd, setQItemToAdd] = useState(1);

  const [size, setSize] = useState();

  const addSize = () => {
    setSize(document.getElementById("sizeSelect").value);
  };

  const itemDetail = props.item;

  const selectedSize = () => {
    addSize();
  };

  const onAdd = (qItemToAdd) => {
    setQItemToAdd(qItemToAdd);
  };

  const loadItemCart = () => {
    if (qItemToAdd >= 1 && size !== undefined) {
      setCartButton(true);
      addItem(itemDetail, qItemToAdd, size);
    } else {
      alert("Para agregar la impresion seleccione un tamaño");
    }
  };

  return (
    <>
      {props.item ? (
        <>
          <div className="miniatureOne">
            <img src={itemDetail.img1} alt="mini1" className="miniature" />
          </div>
          <div className="miniatureTwo">
            <img src={itemDetail.img2} alt="mini2" className="miniature" />
          </div>
          <div className="miniatureThree">
            <img src={itemDetail.img3} alt="mini3" className="miniature" />
          </div>
          <div className="miniatureFour">
            <img src={itemDetail.img4} alt="mini4" className="miniature" />
          </div>
          <div className="itemImg ">
            <img
              src={itemDetail.img2}
              alt="ACA VA LA IMAGEN"
              className="miniature"
            />
          </div>
          <div className="detail">
            <h5>{itemDetail.title}</h5>
            <p className="description">{itemDetail.description}</p>
            <div className="line wv90 lineSpace" />
            <h4>$ {itemDetail.price}</h4>
            <br />
            <Select
              id="sizeSelect"
              required
              multiple={false}
              onChange={selectedSize}
              options={{
                classes: "",
                dropdownOptions: {
                  alignment: "left",
                  autoTrigger: true,
                  closeOnClick: true,
                  constrainWidth: true,
                  coverTrigger: true,
                  hover: false,
                  inDuration: 150,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 250,
                },
              }}
              value=""
            >
              <option value="0" defaultValue>
                Tamaño
              </option>
              <option value="80 x 60">80 x 60</option>
              <option value="60 x 40">60 x 40</option>
              <option value="20 x 20">20 x 20</option>
            </Select>
            <br />
            {cartButton ? (
              <div className="BuyOrMore">
                <Link to="/carrito">
                  <button className="buttonBlue">Terminar mi compra</button>
                </Link>

                <Link to="/">
                  <button className="buttonBlue">Seguir comprando</button>
                </Link>
              </div>
            ) : (
              <>
                <ItemCount
                  initial={qItemToAdd}
                  stock={itemDetail.stock}
                  onAdd={onAdd}
                />

                <button className="addProductButton" onClick={loadItemCart}>
                  Agregar al carrito
                </button>
              </>
            )}
          </div>
          <div className="itemFooter"></div>
        </>
      ) : (
        <Preloader
          active
          color="blue"
          flashing={false}
          size="big"
          className="centerPreloader"
        />
      )}
    </>
  );
};
