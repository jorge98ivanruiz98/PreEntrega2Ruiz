import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function ItemList(props) {

  return (
    <div className="container">
      <div className="row">
        {props != null ? (
          props.listGames.map((game) => (
            <div className="col-md-2" key={game.id}>
              <img src={game.thumbnail} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{game.title}</h5>
                <p className="card-text">{game.short_description}</p>
                <Link to={`/details/${game.id}`}>
                    <button className="btn btn-outline-primary">Ver más</button>
                    </Link>
              </div>
            </div>
          ))
        ) : (
          <h1>...</h1>
        )}
      </div>
    </div>
  );
}
export default ItemList;
