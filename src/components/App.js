import React from "react";
import "../../src/index.css";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import Listings from "./Listings";
import ContactUs from "./ContactUs";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <main>
        <NavBar />
        <Route path="/" exact component={Welcome} />
        <Route path="/listings" exact component={Listings} />
        <Route path="/contact_us" exact component={ContactUs} />
      </main>
    </BrowserRouter>
  );
}
export default App;
