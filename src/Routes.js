import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// 컴포넌트
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import Step from "./Pages/Signup/Step";
import Find from "./Pages/Find/Find";
import Main from "./Pages/Main/Main";
import Footer from "./Components/Footer/Footer";
import Productdetail from "./Pages/Productdetail/Productdetail";
import Productlist from "./Pages/Productlist/Productlist";

// import 한 컴포넌트에 대한 경로
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/productdetail/:id" component={Productdetail} />
          <Route exact path="/productlist" component={Productlist} />
          <Route exact path="/Signin" component={Signin} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Step" component={Step} />
          <Route exact path="/Find" component={Find} />
          <Route exact path="/Footer" component={Footer} />
        </Switch>
      </Router>
    );
  }
}
