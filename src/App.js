import React from "react";

import GlobalStyle from "styles/GlobalStyle";

import Header from "components/Header";
import Banner from "components/Banner";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Banner />
    </div>
  );
}

export default App;
