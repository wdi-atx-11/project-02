// src/components/Todo.js
import React, {Component} from 'react'
import EditLifeEventForm from './EditLifeEventForm'
import {auth} from '../utils/firebase'

class LifeEvent extends Component {
  render() {
    return (
      <div>
      {
        (this.props.uid === auth.currentUser.uid) ?
        <div className="row lifeEvent">
          <div className="col-md-11 col-sm-11 lifeEvent-text">
            <blockquote>
              <p className="lifeEvent-eventDate"> EVENT DATE: <br /> { this.props.data.eventDate }</p>
              <p className="lifeEvent-postDate"> POST DATE: <br /> { this.props.data.postDate }</p>
              <p className="lifeEvent-title"> TITLE: <br /> { this.props.data.title }</p>
              <p className="lifeEvent-content"> CONTENT: <br /> { this.props.data.content }</p>
              <p className="lifeEvent-tags"> TAGS: <br /> { this.props.data.tags }</p>
              <p className="lifeEvent-photo"> PHOTO: <br /> { this.props.data.photo }</p>
              <p className="lifeEvent-userRating"> USER RATING: <br /> { this.props.data.userRating }</p>
              {
                (this.props.data.isPublic === true) ?
                <p className="lifeEvent-isPublic"> THIS POST IS PUBLIC </p> :
                <p className="lifeEvent-isPublic"> THIS POST IS PRIVATE</p>
              }
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
        :
        <div></div>
      }
    </div>
    );
  }
}

export default LifeEvent
