import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailsGameById } from "../fuctions/funciones";
import ClickCounter from "./ClickCounter";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  let params = useParams();

  let id = params.id;

  useEffect(() => {
    obtenerGameByID(id);
  }, [id]);

  const obtenerGameByID = async (id) => {
    const result = await detailsGameById(id).then((res) => setItem(res));
  };

  return (
    <div className="container">
      {item != null ? (
        <div className="row">
          <div className="card mb-3">
            <img src={item.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
            </div>

            <ClickCounter />
          </div>
        </div>
      ) : (
        <h1>...</h1>
      )}
    </div>
  );
}
export default ItemDetailContainer;
