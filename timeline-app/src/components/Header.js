// src/components/Header.js
import React, {Component} from 'react'
import { auth } from '../utils/firebase'
import './Header.css';


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
          <div>
            <h3 className="events">TimeShare: Share your events and moments to the world!</h3>
          </div> :
          <div className="title">
            <h4 className="events">Interested in using TimeShare? Login/Signup using our form at the top of the page!</h4>
          </div>
        }

      </div>
    )
  }
}

export default Header
