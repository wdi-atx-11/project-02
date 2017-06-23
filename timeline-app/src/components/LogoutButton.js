
import React, { Component } from 'react';
import { Link } from 'react-router'

class LogoutButton extends Component {
  render() {
    return (
      <Link to="/"
        onClick={ this.props.logoutButtonClicked }>{ this.props.children }</Link>
    )
  }
}

export default LogoutButton;
