import React, { Fragment, useEffect, useState, useCallback } from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./layouts/Navbar";
import Register from "./pages/Register/Register";
import CriaRifa from "./pages/Criarifa";
import api from "./services/api";





const App = () => {
  const [admin, setAdmin] = useState("");

  useEffect(useCallback(() => {
    async function auth() {
      await api.get("/users/admin").then((result) => {
        setAdmin(result.data)
      })
    }
    auth();
  }, []))



  return (
    <Fragment>
      <Navbar />
      <Switch>
        {admin === 'admin' ? (
          <Route exact path="/criarifa" component={CriaRifa} />
        ) : ''}
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Fragment>
  );
};

export default App;