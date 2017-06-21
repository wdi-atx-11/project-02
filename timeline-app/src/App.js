// src/App.js
import React, { Component } from 'react'
import { firebase, auth } from './utils/firebase'
import Header from './components/Header'
import Navbar from './components/Navbar'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: null
    }
  }

  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('Logged in:', currentUser);
        // set currentUser in App component state
        this.setState({ currentUser });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  loginButtonClicked(e) {
    e.preventDefault();
    // set up provider
    const provider = new firebase.auth.GoogleAuthProvider();
    // tell Firebase auth to log in with a popup and that provider
    auth.signInWithPopup(provider);
  }

  logoutButtonClicked(e) {
    // tell Firebase auth to log out
    auth.signOut();
    this.setState({ currentUser: null });
  }

  render() {
    return (
      <div className="App">
        <Navbar
            currentUser={ this.state.currentUser }
            loginButtonClicked={ this.loginButtonClicked }
            logoutButtonClicked={ this.logoutButtonClicked } />
        <Header
          currentUser={this.state.currentUser} />
        {this.props.children}
      </div>
    );
  }
}

export default App
