import React from "react";
import "./App.css";
import AddUser from "./AddUser";
import User from "./Users";
import {Provider} from 'react-redux';
import Store from './Store';

class App extends React.Component {

  render() {
    return (
    
      <Provider store={Store}>
      <div className="App">
        <header className="App-header">
          <h1>Form State, Spread Syntax, Ternary Operator</h1>
        </header>
        <AddUser />
        <hr />
        <User />
      </div>
      </Provider>
    );
  }
}

export default App;
