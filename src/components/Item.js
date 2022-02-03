import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  function handleCartAdd(){
    setInCart((inCart) => !inCart);
  }
 const newClassName =  inCart ? 'in-cart' : ""
 const textbutton = inCart ? 'remove from the cart' : 'Add to Cart' 

  return (
    <li className={newClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? 'Remove' : 'Add'} onClick={handleCartAdd}>{textbutton}</button>
    </li>
  );
}

export default Item;
