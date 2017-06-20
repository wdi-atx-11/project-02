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
      lifeEvents: [],
      currentUser: auth.currentUser
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    LifeEventModel.all().then( (res) => {
      this.setState ({
        lifeEvents: res.lifeEvents
      })
    })
  }
  createLifeEvent(title, content) {
    let newLifeEvent = {
      title: title,
      content: content
    }
    LifeEventModel.create(newLifeEvent).then((res) => {
      console.log('created life event', res)
      console.log(newLifeEvent)
      let lifeEvents = this.state.lifeEvents
      let newTimeline = lifeEvents.push(res)
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
      newTimeline.forEach((data)=>{
        if(data._id === id){
          data.title = newLifeEventTitle
          data.content = newLifeEventContent
        }
      })
      this.setState({
          newTimeline
      })
    })
  }

  render(){
    console.log (this.state.lifeEvents)
    return (
      <div className='timelineContainer'>
        {
          (this.state.currentUser != null) ?
          <CreateLifeEventForm
            createLifeEvent={this.createLifeEvent.bind(this)} /> :
            <section className="col-md-4 col-sm-12 add-event">Log in to add a life event</section>
        }
          <Timeline
            lifeEvents={this.state.lifeEvents}
            onDeleteLifeEvent={this.deleteLifeEvent.bind(this)}
            onUpdateLifeEvent={this.updateLifeEvent.bind(this)}
             />
      </div>
    )
  }
}

export default TimelineContainer
