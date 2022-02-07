import React from "react";
import logo from "./logo.svg";
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import Content from './components/content/Content';
import "./App.css";
import { getLCP, getFID, getCLS } from "web-vitals";
import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";

if (typeof window !== "undefined") {
  getCLS(console.log);
  getFID(console.log);
  getLCP(console.log);

  const Axe = require("@axe-core/react");
  Axe(React, 1000);
}

function App() {
  return (

    <div className="App">

      <div className="Header">
        <Nav />
        <Content />
        <div className="Radial"></div>
        <img className="BigStar" width="56" height="56" src="images/star.svg" alt="" />
        <img className="SmallStar" width="23" height="23" src="images/star.svg" alt="" />
      </div>

      <div className="SectionCards">
        <GridWrap>
          <GridRow className="Row">
            <h2>Experience The Cardo</h2>
          </GridRow>

          <GridRow className="Row">
            <Cards />
          </GridRow>
        </GridWrap>
      </div>

    </div>
  );
}

export default App;
