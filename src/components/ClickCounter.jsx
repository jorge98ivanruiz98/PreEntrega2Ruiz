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
      <button className="button-cart" onClick={handleDecrement}>
        -
      </button>
      <p>{count}</p>
      <button className="button-cart" onClick={handincrement}>
        +
      </button>
      <button className="button-cart">Agregar al carrito</button>
    </div>
  );
}

export default ClickCounter;
