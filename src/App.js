import React from "react";
import "./App.css";
import SignInPage from "./component/sign-in-page.js";
import SignUpPage from "./component/sign-up-page.js";
import HomePage from './component/home-page.js';
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/sign-in" />
        </Route>
        <Route path="/sign-in">
          <SignInPage />
        </Route>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
        <Route path="/home-page">
          <HomePage />
        </Route>
      </Switch>
    </HashRouter>
  );
}
export default App;