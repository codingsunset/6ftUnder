import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SignUp from "./components/SignUp";
// import Login from "./components/Login";
import Account from "./components/Account";

// <<<<<<< passport
import Records from "./pages/Records";
import LogIn from "./pages/LogIn_YG";
import SignUp from "./pages/SignUp_YG";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// =======
// import Records from "./components/Records/Records";
// import AddRecord from "./components/AddRecord";
// import Nav from "./components/Nav";
import './styles.css';
// >>>>>>> dev3


function App(){
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/add" component={AddRecord} />
          <Route exact path="/signup" component={SignUp} />
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
