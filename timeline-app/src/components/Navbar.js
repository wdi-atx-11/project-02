import React, { Component } from 'react'
import { Link } from 'react-router'
import './Navbar.css'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { auth } from '../utils/firebase'

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: auth.currentUser
    }
  }
  sessionButton() {
    if (!this.props.currentUser ) {
      return <LoginButton { ...this.props }>Log in with Google</LoginButton>;
    } else {
      return (
        <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          <img className="navbar-profile-pic" src={ this.props.currentUser.photoURL } alt="" /> { this.props.currentUser.displayName } is logged in <span className="caret"></span>
        </a>
      )
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">TimeShare || </Link>
            <Link className="navbar-brand" to="/gallery">Public Gallery</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                { this.sessionButton() }
                <ul className="dropdown-menu">
                  <li><Link to="/">Home</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to="/timeline">Timeline</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to="/gallery">Public Gallery</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to="/about">About</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><LogoutButton { ...this.props }>Log out</LogoutButton></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
