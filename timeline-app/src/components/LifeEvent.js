// src/components/Todo.js
import React, {Component} from 'react'
import EditLifeEventForm from './EditLifeEventForm'

class LifeEvent extends Component {
  render(){
    return(
      <div>
        <p data-lifeEvents-index={this.props.lifeEvent._id}>
          <span>{this.props.lifeEvent.body}</span>
          <span
            className='deleteButton'
            onClick={() => this.props.onDeleteLifeEvent(this.props.todo)}>
              (X)
          </span>
        </p>
        <EditLifeEventForm
          lifeEvent={this.props.lifeEvent}
          onUpdateLifeEvent={this.props.onUpdateLifeEvent} />
      </div>
    )
  }
}

export default LifeEvent
