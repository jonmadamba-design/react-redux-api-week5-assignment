import React from "react";
import "./App.css";
import AddUser from "./AddUser";
import User from "./Users";
import {Provider} from 'react-redux';
import Store from './Store';
// jm 1 import react spring
import { Spring } from 'react-spring/renderprops';


class App extends React.Component {

  render() {
    return (
    
      <Provider store={Store}>

      {/* jm 2 add spring component with props to / from */}
      <Spring
        from={{ opacity: 0, marginLeft: 200 }}
        to={{ opacity: 1, marginLeft: 0 }}
        config={{ duration: 1000, delay: 100 }}>
          {(props) => (

                <div className="App" style={props} >
                  <header className="App-header">
                    <h1>Form State, Spread Syntax, Ternary Operator</h1>
                  </header>
                </div>
              
            )}

      </Spring>
      <Spring
        from={{ opacity: 0, marginRight: 200 }}
        to={{ opacity: 1, marginRight: 0 }}
        config={{ duration: 1000, delay: 100 }}>
          {(props) => (

                <div className="App" style={props} >
                  <AddUser />
                  <hr />
                  <User />
                </div>
              
            )}

      </Spring>
              

      </Provider>
    );
  }
}

export default App;
