// src/components/Header.js
import React, {Component} from 'react'
import { auth } from '../utils/firebase'



class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentUser: auth.currentUser
    }
  }

  render(){
    return (
      <div className="App">
        {
          this.props.currentUser !=null ?
          <h2>
            Hello {this.props.currentUser.displayName} Welcome to TimeShare
          </h2> :
            <h1>You're a stranger.</h1>
        }

      </div>
    )
  }
}

export default Header
