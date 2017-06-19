// src/App.js
import React, { Component } from 'react'
import Header from './components/Header'
import { firebase, auth } from './utils/firebase'
import TimelineContainer from './containers/TimelineContainer'
import Navbar from './components/Navbar';


class App extends Component {
  constructor(props){
    super(props)
    this.state = ({
      loggedIn: this.props.currentUser
    })
  }

  loginButtonClicked(e) {
    e.preventDefault();
    // set up provider
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log("signing in")
    // tell Firebase auth to log in with a popup and that provider
    auth.signInWithPopup(provider);
  }


  logoutButtonClicked(e) {
    e.preventDefault();
    // tell Firebase auth to log out
    console.log("signing out");
    auth.signOut();
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

  render() {
    return (
      <div className="App">
        <Navbar
            currentUser={ this.state.currentUser }
            loginButtonClicked={ this.loginButtonClicked }
            logoutButtonClicked={ this.logoutButtonClicked } />
        <Header
          loginButtonClicked={this.loginButtonClicked.bind(this)}
          logoutButtonClicked={this.logoutButtonClicked.bind(this)}
          currentUser={this.state.currentUser} />
        {this.props.children}
      </div>
    );
  }
}

export default App
