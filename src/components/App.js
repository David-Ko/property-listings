import React from "react";
import "../../src/index.css";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import Listings from "./Listings";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <main>
        <NavBar />
        <Route path="/" exact component={Welcome} />
        <Route path="/listings" exact component={Listings} />
      </main>
    </BrowserRouter>
  );
}
export default App;
