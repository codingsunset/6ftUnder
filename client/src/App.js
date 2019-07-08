import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SignUp from "./components/SignUp";
import LogIn from "./components/Login";
import Account from "./components/Account";
// import Records from "./pages/Records";
import Records from "./components/Records";
// import LogIn from "./pages/LogIn_YG";
import SignUp from "./pages/SignUp_YG";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import './styles.css';


function App(){
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/test" component={Records} />
          <Route exact path="/" component={LogIn} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/records" component={Records} />
          <Route exact path="/records/:id" component={Records} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App;
