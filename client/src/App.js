import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Account from "./components/Account";
import Records from "./components/Records/Records";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import './styles.css';


function App(){
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
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
