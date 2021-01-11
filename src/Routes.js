import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// 컴포넌트
import Signin from "./Pages/Signin/Signin";
import Main from "./Pages/Main/Main";

// import 한 컴포넌트에 대한 경로
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </Router>
    );
  }
}
