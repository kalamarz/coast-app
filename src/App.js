import React, { Component } from 'react';
import './App.css';
import Coasts from './containers/Coasts';
import  store from "./store";
import { Provider } from "react-redux";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Coasts />
        </div>
      </Provider>
    );
  }
}

export default App;