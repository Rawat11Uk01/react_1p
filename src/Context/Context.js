import { createContext } from "react";
import { useState } from "react";

const Context = createContext({
    cart: '',
});

export const ContextProvider = (props)=>{
const [cart,setCart]=useState([]);
const value = {
    cart,
    setCart
}

   return<Context.Provider value={{cart,setCart}} >
       {props.children}
   </Context.Provider>
};

export default Context;