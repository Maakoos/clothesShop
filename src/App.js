import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import GlobalStyle from "styles/GlobalStyle";

import Header from "components/Header";
import MainView from "views/MainView";
import ShoppingCart from "components/ShoppingCart";

import DetailsItemView from "views/DetailsItemView";

function App() {
  const { cartIsOpen } = useSelector((state) => state);

  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />
        <Header />
        {cartIsOpen && <ShoppingCart />}
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route path="/details/" component={DetailsItemView} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
