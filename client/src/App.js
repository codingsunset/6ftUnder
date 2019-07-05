import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Account from "./components/Account";
import Records from "./components/Records/Records";
import AddRecord from "./components/AddRecord";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import './styles.css';


function App(){
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/add" component={AddRecord} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/records" component={Records} />
          <Route exact path="/records/:id" component={Records} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
