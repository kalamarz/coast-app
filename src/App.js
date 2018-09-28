import React, { Component } from 'react';
import './App.css';
import  store from "./store";
import { Provider } from "react-redux";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>

        </div>
      </Provider>
    );
  }
}

export default App;