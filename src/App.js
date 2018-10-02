import React, { Component } from 'react';
import './App.css';
import Coasts from './components/Coasts';
import CoastDetails from './components/CoastDetails';
import  store from "./store";
import { Provider } from "react-redux";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Coasts />
          <CoastDetails />
        </div>
      </Provider>
    );
  }
}

export default App;