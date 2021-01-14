import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// 컴포넌트
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import Stationery from "./Pages/Stationery/Stationery";
import Productlist from "./Pages/Productlist/Productlist";
import Productdetail from "./Pages/Productdetail/Productdetail";

// import 한 컴포넌트에 대한 경로
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/stationery" component={Stationery} />
          <Route exact path="/" component={Productlist} />
          <Route exact path="/productdetail" component={Productdetail} />
        </Switch>
      </Router>
    );
  }
}
