import React, {Component} from 'react'
import LifeEventModel from '../models/LifeEvent'
import Gallery from '../components/Gallery'
import { auth } from '../utils/firebase'


class GalleryContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      lifeEvents: [],
      currentUser: auth.currentUser
    }
  }

  componentDidMount(){
    //this is dumb
    this.fetchData()
    this.fetchData()
    console.log("USER: ", auth.currentUser);
  }


  fetchData(){
    LifeEventModel.allGallery().then( (res) => {
      this.setState ({
        lifeEvents: res.lifeEvents,
        currentUser: auth.currentUser
      })
    })
  }

  render(){
    return (
      <div className='timelineContainer'>
      {
        (this.state.currentUser != null) ?
        <Gallery
          currentUser= {this.state.currentUser}
          lifeEvents={this.state.lifeEvents}
        /> :
        <section className="col-md-4 col-sm-12 add-event">Log in to add a life event</section>
      }
    </div>
    )
  }
}

export default GalleryContainer
