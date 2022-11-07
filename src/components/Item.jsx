function Item (props) {
  return (
    <div className="card">
      <img src={props.game.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.game.name}</h5>
        <p className="card-text">{props.game.description}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}