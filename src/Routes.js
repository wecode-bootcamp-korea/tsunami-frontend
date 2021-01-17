import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// 컴포넌트
import Signin from "./Pages/Signin/Signin";
import Signup4 from "./Pages/Signup/Signup4";
import Signup2 from "./Pages/Signup/Signup2";
import Signup3 from "./Pages/Signup/Signup3";
import Signup1 from "./Pages/Signup/Signup1";
import Find from "./Pages/Find/Find";
import Main from "./Pages/Main/Main";

// import 한 컴포넌트에 대한 경로
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Signin" component={Signin} />
          <Route exact path="/Signup4" component={Signup4} />
          <Route exact path="/Signup2" component={Signup2} />
          <Route exact path="/Signup3" component={Signup3} />
          <Route exact path="/Signup1" component={Signup1} />
          <Route exact path="/Find" component={Find} />
        </Switch>
      </Router>
    );
  }
}
