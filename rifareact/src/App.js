import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./layouts/Navbar";
import Register from "./pages/Register/Register";




const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route exact path="/home" component={Home} /> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;