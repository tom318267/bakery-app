import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import BakeryItems from "./components/BakeryItems/BakeryItems";
import "./App.css";
import Signup from "./components/Signup/Signup";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/items" component={BakeryItems} />
          <Route exact path="/sign-up" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
