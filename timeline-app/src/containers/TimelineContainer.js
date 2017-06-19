// src/containers/TodosContainer.js
import React, {Component} from 'react'
import LifeEventModel from '../models/LifeEvent'
import Timeline from '../components/Timeline'
import CreateLifeEventForm from '../components/CreateLifeEventForm'
import App from '../App'
import { auth } from '../utils/firebase'



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
        lifeEvents: res.todos
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
      let lifeEvents = this.state.lifeEvents
      let newLifeEvents = lifeEvents.push(res)
      this.setState({newLifeEvents})
    })
  }
  deleteLifeEvent(lifeEvent) {
    console.log('deleting life event', lifeEvent)
    LifeEventModel.delete(lifeEvent).then((res) => {
        let lifeEvents = this.state.lifeEvents.filter(function(event) {
          return lifeEvent._id !== res._id
        });
        this.setState({lifeEvents})
    })
  }
  updateLifeEvent(newLifeEventBody, id) {
    LifeEventModel.update(newLifeEventBody, id).then((res)=> {
      console.log(res);
      let newLifeEvents = this.state.lifeEvents.map((lifeEvent) => {
        return lifeEvent
      });
      newLifeEvents.forEach((item)=>{
        if(item._id === id){
          item.body = newLifeEventBody
        }
      })
      this.setState({
          newLifeEvents
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
            lifeEvents={this.state.lifeEvents}
            onUpdateLifeEvent={this.updateLifeEvent.bind(this)}
            onDeleteLifeEvent={this.deleteLifeEvent.bind(this)} />
      </div>
    )
  }
}

export default TimelineContainer
