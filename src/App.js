import React, { Component } from 'react';
import Coasts from './components/Coasts';
import CoastDetails from './components/CoastDetails';
import  store from "./store";
import { Provider } from "react-redux";
import Sidebar from 'react-sidebar';

const mql = window.matchMedia(`(min-width: 800px)`);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false,
      sidebarDocked: mql.matches,
    };
  }

   componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged = () => {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Sidebar
            sidebar={ <Coasts /> }
            open={this.state.sidebarOpen}
            docked={this.state.sidebarDocked}
            onSetOpen={this.onSetSidebarOpen}>
            <button onClick={() => this.onSetSidebarOpen(true)}>
              Show list
            </button>
            <CoastDetails />
          </Sidebar>
        </div>
      </Provider>
    );
  }
}

export default App;