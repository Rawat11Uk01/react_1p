import React from "react";
import './Home.css'
import { useState } from "react";
import faker from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
function Home() {

  const productArray = [...Array(6)].map(()=>({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    image: faker.image.image(),
    price: faker.commerce.price(),
  }));
 
    const [product] = useState(productArray);

  return <div className="home">
  {product.map((prod)=>
  <SingleProduct key={prod.id} prod={prod}/>)}
  </div>;
}

export default Home;
