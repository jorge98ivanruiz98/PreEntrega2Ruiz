import React, { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(1);
  function handleDecrement() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  function handincrement() {
    setCount(count + 1);
  }

  return (
    <div className="counter">
      <button className="btn btn-primary btn-lg" onClick={handleDecrement}>
        -
      </button>
      <h1 className="card-title">{count}</h1>
      <button className="btn btn-primary btn-lg" onClick={handincrement}>
        +
      </button>
      <button className="btn btn-outline-primary">Agregar al carrito</button>
    </div>
  );
}

export default ClickCounter;
