import React, { useEffect, useState } from "react";
import { allGames, category } from "../fuctions/funciones";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [listGames, setListGames] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    if (categoryid) {
      obtenerCatogoria();
    } else {
      obtenerApi();
    }
  }, [categoryid]);

  const obtenerApi = async () => {
    const result = await allGames();
    setListGames(result);
  };

  const obtenerCatogoria = async (categoryid) => {
    const result = await category(categoryid).then((res) => setListGames(res));
  };

  return <ItemList listGames={listGames} />;
}
export default ItemListContainer;
