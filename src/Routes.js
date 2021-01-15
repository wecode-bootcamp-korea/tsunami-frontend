import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// 컴포넌트
import Signup from "./Pages/Signup/Signup";
import Main from "./Pages/Main/Main";

// import 한 컴포넌트에 대한 경로
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}
