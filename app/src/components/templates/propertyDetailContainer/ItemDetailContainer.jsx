import "./ItemDetailContainer.css";
import { ItemDetail } from "../../organisms/propertyDetailDisplay/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const ItemDetailContainer = () => {
  const { Id } = useParams();
  const [itemDetail, setItemDetail] = useState({});

  useEffect(() => {
  
  }, [Id]);

  return (
    <div className="container">
      <ItemDetail item={itemDetail} />
    </div>
  );
};
