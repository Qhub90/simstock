import React, { Component } from "react";
import './App.css';

import Navigation from './components/Navigation/Navigation'
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="App">
      <Navigation />

      <SignIn />
      </div>
    );
  }
}

export default App;
