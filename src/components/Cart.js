import React, { useState } from 'react'
import './Cart.css'
import Context from '../Context/Context'
import { useContext,useEffect } from 'react'
import SingleProduct from './SingleProduct'
function Cart() {
  const [total,setTotal]=useState();
 
  const {cart,setCart} = useContext(Context);
  useEffect(()=>{
    setTotal(cart.reduce((acc,cur)=>{
      return  acc + Number(cur.price);
   },0));
  },[cart])
  return (

    <div className='cart1'>
      <span>Total Amount: {total}</span>
{cart.map((prod)=>
  <SingleProduct key={prod.id} prod={prod} cart={cart} setCart={setCart}/>)}
    </div>
  )
}

export default Cart