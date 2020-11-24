import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

import GlobalStyle from "styles/GlobalStyle";

import Header from "components/Header";
import ShoppingCart from "components/ShoppingCart";
import Footer from "components/Footer";

import MainView from "views/MainView";
import DetailsItemView from "views/DetailsItemView";
import SearchListView from "views/SearchListView";

const AppWrapper = styled.div`
  transition: transform 0.2s ease-in;

  ${({ cartIsOpen }) =>
    cartIsOpen &&
    css`
      transform: translateX(-320px);
    `}
`;

function App() {
  const { cartIsOpen } = useSelector((state) => state);

  return (
    <BrowserRouter>
      <AppWrapper className="App" cartIsOpen={cartIsOpen}>
        <GlobalStyle />
        <Header />

        <Switch>
          <Route exact path="/" component={MainView} />
          <Route path="/details/:id" component={DetailsItemView} />
          <Route path="/search" component={SearchListView} />
        </Switch>
        <Footer />
      </AppWrapper>
      {cartIsOpen && <ShoppingCart />}
    </BrowserRouter>
  );
}

export default App;
