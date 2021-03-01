import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import BakeryItems from "./components/BakeryItems/BakeryItems";
import Signup from "./components/Signup/Signup";
import { auth } from "./firebase/firebase.utils";
import "./App.scss";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/items" component={BakeryItems} />
            <Route exact path="/sign-up" component={Signup} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
