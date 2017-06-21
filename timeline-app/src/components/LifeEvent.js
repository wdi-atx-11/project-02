// src/components/Todo.js
import React, {Component} from 'react'
import EditLifeEventForm from './EditLifeEventForm'

class LifeEvent extends Component {
  render() {
    return (
      <div className="row lifeEvent">
        <div className="col-md-11 col-sm-11 lifeEvent-text">
          <blockquote>
            <p className="lifeEvent-title"> TITLE: <br /> { this.props.data.title }</p>
            <p className="lifeEvent-content"> CONTENT: <br /> { this.props.data.content }</p>

            <EditLifeEventForm
                lifeEvent={this.props.data}
                onUpdateLifeEvent={this.props.onUpdateLifeEvent}
            />

            <button
                className='btn btn-danger'
                onClick={() => this.props.onDeleteLifeEvent(this.props.data)}>
                Delete!
            </button>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default LifeEvent
