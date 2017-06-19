// src/components/Tineline.js
import React, {Component} from 'react'
import LifeEvent from './LifeEvent'
import { auth } from '../utils/firebase'


class Timeline extends Component {
  render(){
    let lifeEventsArray = this.props.lifeEvents.map( (lifeEvent) => {
      return (
        <LifeEvent
          key={lifeEvent._id}
          lifeEvent={lifeEvent}
          onUpdateLifeEvent={this.props.onUpdateLifeEvent}
          onDeleteLifeEvent={this.props.onDeleteLifeEvent} />
      )
    })
    return(
      <div className="lifeEvents">
        {lifeEventsArray}
      </div>
    )
  }
}

export default Timeline
