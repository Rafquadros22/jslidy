import React from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Nav />
        <Main />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
