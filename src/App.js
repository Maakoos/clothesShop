import React from "react";

import GlobalStyle from "styles/GlobalStyle";

import Header from "components/Header";
import Banner from "components/Banner";
import ShopBox from "components/ShopBox";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Banner />
      <ShopBox />
    </div>
  );
}

export default App;
