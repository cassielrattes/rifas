import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./pages/Login/Login";




const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          {/* <Route exact path="/home" component={Home} /> */}
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/register" component={Register} /> */}
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;