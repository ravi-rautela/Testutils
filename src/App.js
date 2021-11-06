import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Form from './components/Form';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="textutils" aboutText="About" />
        {/* Default Props example  */}
        {/* <Navbar */}
        <div className="container my-3" >
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Form heading="Enter Your text below" />
            </Route>
          </Switch>

        </div>
      </Router>


    </>
  );
}

export default App;
