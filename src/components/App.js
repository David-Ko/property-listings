import React from "react";
import "../../src/index.css";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import ListingIndex from "./ListingIndex";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <main>
        <NavBar />
        <Route path="/" exact component={Welcome} />
        <Route path="/listings" exact component={ListingIndex} />
      </main>
    </BrowserRouter>
  );
}
export default App;
