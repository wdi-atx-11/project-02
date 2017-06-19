// src/components/Todo.js
import React, {Component} from 'react'
import EditLifeEventForm from './EditLifeEventForm'

class LifeEvent extends Component {
  render() {
    return (
      <div className="row lifeEvent">
        <div className="col-md-11 col-sm-11 lifeEvent-text">
          <blockquote>
            <p className="lifeEvent-title">{ this.props.data.title }</p>
            <p className="lifeEvent-content">{ this.props.data.content }</p>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default LifeEvent
