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
          <h4>Interested in using TimeShare? Login/Signup using our form at the top of the page!</h4>
        }

      </div>
    )
  }
}

export default Header
