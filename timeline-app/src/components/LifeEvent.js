// src/components/Todo.js
import React, {Component} from 'react'
import EditLifeEventForm from './EditLifeEventForm'

class LifeEvent extends Component {
  render() {
    return (
      <div className="row lifeEvent">
        <div className="col-md-11 col-sm-11 lifeEvent-text">
          <blockquote >
            <p data-timeline-index={this.props.lifeEvent._id}
               className="lifeEvent-title">{ this.props.lifeEvent.title }
            </p>
            <p className="lifeEvent-content">{ this.props.lifeEvent.content }</p>
              <button
              className='btn btn-xs btn-danger'
              onClick={() => this.props.onDeleteLifeEvent(this.props.lifeEvent)}>
                Delete
            </button>
          </blockquote>

          <EditLifeEventForm
            lifeEvent={this.props.data}
            onUpdateLifeEvent={this.props.onUpdateLifeEvent}
          />

      </div>
      </div>
    );
  }
}

export default LifeEvent
