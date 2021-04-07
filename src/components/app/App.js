import React from "react";
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/Main";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Switch>
                  <Route path="/" component={Main} exact={true} />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
