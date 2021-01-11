import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// 컴포넌트
import Signin from "./Pages/Sign/Signin";
import Signup from "./Pages/Sign/Signup";

// import 한 컴포넌트에 대한 경로
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/Signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}
