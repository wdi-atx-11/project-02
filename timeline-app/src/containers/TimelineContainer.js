// src/containers/TodosContainer.js
import React, {Component} from 'react'
import LifeEventModel from '../models/LifeEvent'
import Timeline from '../components/Timeline'
import CreateLifeEventForm from '../components/CreateLifeEventForm'
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
  deleteLifeEvent(ref) {
     firebase.database().ref('https://project-02-8b8aa.firebaseio.com/timeline/' + ref).remove();
  }
  updateLifeEvent(newLifeEventBody, id) {
    LifeEventModel.update(newLifeEventBody, id).then((res)=> {
      console.log(res);
      let newTimeline = this.state.timeline.map((lifeEvent) => {
        return lifeEvent
      });
      newTimeline.forEach((item)=>{
        if(item._id === id){
          item.body = newLifeEventBody
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
             />
      </div>
    )
  }
}

export default TimelineContainer
