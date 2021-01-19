import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// 컴포넌트
import Productlist from "./Pages/Productlist/Productlist";
import Productdetail from "./Pages/Productdetail/Productdetail";
// import Signin from "./Pages/Sign/Signin";
// import Signup from "./Pages/Sign/Signup";
// import Stationery from "./Pages/Stationery/Stationery";

// import 한 컴포넌트에 대한 경로
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/productlist" component={Productlist} />
          <Route exact path="/productdetail" component={Productdetail} />
        </Switch>
      </Router>
    );
  }
}
