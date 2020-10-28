import React, { Fragment } from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./layouts/Navbar";
import Register from "./pages/Register/Register";





const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Fragment>
  );
};

export default App;