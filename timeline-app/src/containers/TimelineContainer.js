// src/containers/TodosContainer.js
import React, {Component} from 'react'
import LifeEventModel from '../models/LifeEvent'
import Timeline from '../components/Timeline'
import CreateLifeEventForm from '../components/CreateLifeEventForm'
import EditLifeEventForm from '../components/EditLifeEventForm'
import App from '../App'
import { auth, firebase } from '../utils/firebase'



class TimelineContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      timeline: [],
      currentUser: auth.currentUser
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    LifeEventModel.all().then( (res) => {
      this.setState ({
        timeline: res.timeline
      })
    })
  }
  createLifeEvent(newBody) {
    let newLifeEvent = {
      body: newBody,
      completed: false
    }
    LifeEventModel.create(newLifeEvent).then((res) => {
      console.log('created life event', res)
      let timeline = this.state.timeline
      let newTimeline = timeline.push(res)
      this.setState({newTimeline})
    })
  }
  deleteLifeEvent(lifeEvent) {
    console.log('deleting lifeEvent', lifeEvent)
    LifeEventModel.delete(lifeEvent).then((res) => {
        let timeline = this.state.timeline.filter(function(lifeEvent) {
          return lifeEvent._id !== res._id
        });
        this.setState({timeline})
    })
  }

  updateLifeEvent(newLifeEventTitle, newLifeEventContent, id) {
    LifeEventModel.update(newLifeEventTitle, newLifeEventContent, id).then((res)=> {
      console.log(res);
      let newTimeline = this.state.timeline.map((lifeEvent) => {
        return lifeEvent
      });
      newTimeline.forEach((lifeEvent)=>{
        if(lifeEvent._id === id){
          lifeEvent.title = newLifeEventTitle,
          lifeEvent.content = newLifeEventContent
        }
      })
      this.setState({
          newTimeline
      })
    })
  }

  render(){
    return (
      <div className='timelineContainer'>
        {
          (this.state.currentUser != null) ?
          <CreateLifeEventForm
            createLifeEvent={this.createLifeEvent.bind(this)} /> :
            <section className="col-md-4 col-sm-12 add-event">Log in to add a life event</section>
        }
          <Timeline
            timeline={this.state.timeline}
            onDeleteLifeEvent={this.deleteLifeEvent.bind(this)}
            onUpdateLifeEvent={this.updateLifeEvent.bind(this)}
             />
      </div>
    )
  }
}

export default TimelineContainer
