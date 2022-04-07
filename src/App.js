import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import Cart from "./components/Cart";
import { Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
