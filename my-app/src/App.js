import React, { Component } from "react";
import './App.css';

import Navigation from './components/Navigation/Navigation'
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import UserHomePage from './pages/UserHomePage/UserHomePage';

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

      <UserHomePage />
      </div>
    );
  }
}

export default App;
