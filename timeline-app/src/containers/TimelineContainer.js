// src/containers/TodosContainer.js
import React, {Component} from 'react'
import EventModel from '../models/Event'
import Timeline from '../components/Timeline'
import CreateEventForm from '../components/CreateEventForm'

class Timeline extends Component {
  constructor(){
    super()
    this.state = {
      events: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    EventModel.all().then( (res) => {
      this.setState ({
        events: res.todos
      })
    })
  }
  createEvent(newBody) {
    let newEvent = {
      body: newBody,
      completed: false
    }
    EventModel.create(newEvent).then((res) => {
      console.log('created event', res)
      let events = this.state.events
      let newEvents = events.push(res)
      this.setState({newEvents})
    })
  }
  deleteEvent(todo) {
    console.log('deleting event', todo)
    EventModel.delete(event).then((res) => {
        let events = this.state.events.filter(function(event) {
          return event._id !== res._id
        });
        this.setState({events})
    })
  }

  updateEvent(newEventBody, id) {
    EventModel.update(newEventBody, id).then((res)=> {
      console.log(res);
      let newEvents = this.state.events.map((event) => {
        return event
      });
      newEvents.forEach((item)=>{
        if(item._id === id){
          item.body = newEventBody
        }
      })
      this.setState({
          newEvents
      })
    })
  }

  render(){
    return (
      <div className='timelineContainer'>
        <CreateEventForm
          createEvent={this.createEvent.bind(this)} />
        <Timeline
          events={this.state.events}
          onUpdateEvent={this.updateEvent.bind(this)}
          onDeleteEvent={this.deleteEvent.bind(this)} />
      </div>
    )
  }
}

export default TimelineContainer
