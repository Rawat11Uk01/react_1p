import React from "react";
import "./SingleProduct.css";
import { useState } from "react";
import { useContext } from "react";
import Context from "../Context/Context";
function SingleProduct({ prod }) {
   const {cart, setCart}= useContext(Context);
  const addToCartHandler = () => {
    setCart([...cart, prod])
  };

  const removeFromCartHandler = () => {
    setCart(cart.filter((c)=> c.id !== prod.id))
  };

  return (
    <div className="card">
      <div className="image">
        <img src={prod.image} />
      </div>
      <div className="text">
        <span>{prod.name}</span>
        <span>${prod.price}</span>
      </div>
      <button onClick={addToCartHandler}>Add to cart</button>
      <button onClick={removeFromCartHandler}>Remove from cart</button>
    </div>
  );
}

export default SingleProduct;
