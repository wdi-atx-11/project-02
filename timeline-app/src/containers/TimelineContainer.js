// src/containers/TodosContainer.js
import React, {Component} from 'react'
import LifeEventModel from '../models/LifeEvent'
import Timeline from '../components/Timeline'
import CreateLifeEventForm from '../components/CreateLifeEventForm'

class TimelineContainer extends Component {
  constructor(){
    super()
    this.state = {
      lifeEvents: []
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
        <CreateLifeEventForm
          createLifeEvent={this.createLifeEvent.bind(this)} />
        <Timeline
          lifeEvents={this.state.lifeEvents}
          onUpdateLifeEvent={this.updateLifeEvent.bind(this)}
          onDeleteLifeEvent={this.deleteLifeEvent.bind(this)} />
      </div>
    )
  }
}

export default TimelineContainer
