import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Account from "./components/Account";


function App(){
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/account" component={Account} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
