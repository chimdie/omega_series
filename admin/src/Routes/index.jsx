import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefualtLayout from "../layout/MainLayout";
import Dashboard from "../pages/index";

function index() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <DefualtLayout>
            <Dashboard />
          </DefualtLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default index;
