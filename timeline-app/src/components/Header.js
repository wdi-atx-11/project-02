// src/components/Header.js
import React, {Component} from 'react'
import {Link} from 'react-router'
import { auth } from '../utils/firebase'


class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentUser: auth.currentUser
    }
  }


  render(){
    //console.log("IN HEADER: ", this.props);
    return (
      <div className="App">
        {
          (this.props.currentUser != null) ?
          <h1><Link to={'/timeline'}>Timeline</Link></h1> :
          <section className="col-md-4 col-sm-12 add-event">Log in to add a life event</section>
        }
          {this.props.currentUser !=null ? <h2>Hello {this.props.currentUser.email}</h2> : <h1>You're a stranger.</h1>}
          

      </div>

    )
  }
}

export default Header
