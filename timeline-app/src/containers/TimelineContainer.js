// src/containers/TodosContainer.js
import React, {Component} from 'react'
import LifeEventModel from '../models/LifeEvent'
import Timeline from '../components/Timeline'
import CreateLifeEventForm from '../components/CreateLifeEventForm'
import { auth } from '../utils/firebase'
import { Modal } from 'react-bootstrap';
import CreateModal from '../components/CreateModal'

class TimelineContainer extends Component {
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
  }


  fetchData(){
    LifeEventModel.all().then( (res) => {
      this.setState ({
        lifeEvents: res.lifeEvents,
        currentUser: auth.currentUser
      })
    })
  }
  createLifeEvent(newLifeEvent) {
    LifeEventModel.create(newLifeEvent).then( (res) => {
      console.log('created life event', res)
      let lifeEvents = this.state.lifeEvents
      let newTimeline = lifeEvents.push(res)
      this.setState({newTimeline})
    })
  }
  deleteLifeEvent(lifeEvent) {
    console.log('deleting lifeEvent', lifeEvent)
    LifeEventModel.delete(lifeEvent).then( (res) => {
        let lifeEvents = this.state.lifeEvents.filter(function(lifeEvent) {
          return lifeEvent._id !== res._id
        });
        this.setState({lifeEvents})
    })
  }
  updateLifeEvent(updatedLifeEvent, id) {
    LifeEventModel.update(updatedLifeEvent, id).then( (res) => {
      //console.log(res);
      let updatedLifeEvents = this.state.lifeEvents.map( (lifeEvent) => {
        return lifeEvent
      });
      updatedLifeEvents.forEach( (item) => {
        if(item._id === id) {
            item.eventDate = updatedLifeEvent.eventDate;
            item.postDate = updatedLifeEvent.postDate;
            item.title = updatedLifeEvent.title;
            item.isPublic = updatedLifeEvent.isPublic;
            item.content = updatedLifeEvent.content;
            item.tags = updatedLifeEvent.tags;
            item.photo = updatedLifeEvent.photo;
            item.userRating = updatedLifeEvent.userRating;
        }
      })
      //console.log(updatedLifeEvents);
      this.setState({updatedLifeEvents})
    })
  }

  render(){
      console.log(this.state.lifeEvents);
      return (
        <div className='timelineContainer container'>
          {
            (this.state.currentUser != null) ?
            <div className="noname">


              <Timeline
                currentUser= {this.state.currentUser}
                lifeEvents={this.state.lifeEvents}
                onDeleteLifeEvent={this.deleteLifeEvent.bind(this)}
                onUpdateLifeEvent={this.updateLifeEvent.bind(this)}
              />
            </div> :
            <section className="col-md-4 col-sm-12 add-event">Log in to add a life event</section>
          }
          <CreateModal />
        </div>
      )
    }
}

export default TimelineContainer
