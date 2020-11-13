import './App.css';
import React from "react";
import {Provider} from "react-redux";
import {Router} from "@reach/router";
import Me from "./components/me";
import Person from "./components/person";
import Edit from "./components/edit";
import store from "./data-layer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="layout_wrapper">
          <Router>
            <Me path="/"/>
            <Person path="person/:personId"/>
            <Edit path="edit"/>
          </Router>
        </div>
      </Provider>
    </div>
  );
}

export default App;
