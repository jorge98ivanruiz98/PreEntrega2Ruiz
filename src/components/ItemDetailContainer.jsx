import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailsGameById } from "../fuctions/funciones";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  let params = useParams();

  let id = params.id;

  useEffect(() => {
    obtenerGameByID();
  }, [id]);

  const obtenerGameByID = async (id) => {
    const result = await detailsGameById(id).then((res) => setItem(res));
  };

  return (
    <>
        {item != null ? (
      <h1>{item.title}</h1>) : (<h1>...</h1>)}
    </>
  );
}
export default ItemDetailContainer;
