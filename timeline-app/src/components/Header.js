// src/components/Header.js
import React, {Component} from 'react'
import {Link} from 'react-router'


class Header extends Component{


  render(){
    return (
      <div className="App">

          <h1><Link to={'/timeline'}>My Timeline</Link></h1>
          {this.props.currentUser !=null ? <h2>Hello {this.props.currentUser.displayName}</h2> : <h1>You're a stranger.</h1>}
          <button onClick={event => this.props.loginButtonClicked(event)}>Login</button>{' '}
          <button onClick={event => this.props.logoutButtonClicked(event)}>Logout</button>


      </div>

    )
  }
}

export default Header
