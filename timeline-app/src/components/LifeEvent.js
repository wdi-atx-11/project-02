// src/components/Todo.js
import React, {Component} from 'react'
import EditLifeEventForm from './EditLifeEventForm'

class LifeEvent extends Component {
  render() {
    return (
      <div className="row lifeEvent">
        <div className="col-md-1 col-sm-1 lifeEvent-profile">
          <img className="lifeEvent-profile-pic" src={ this.props.title } alt="" />
        </div>
        <div className="col-md-11 col-sm-11 lifeEvent-text">
          <blockquote>
            <p className="lifeEvent-text">{ this.props.data.content }</p>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default LifeEvent
