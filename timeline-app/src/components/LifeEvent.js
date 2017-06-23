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
          <div className="row">
            <div className="lifeEvent card pull-center">
              <img className="card-img-top center-block img-frame" src={ this.props.data.photo }></img>
                <button className='btn btn-danger'
                  onClick={() => this.props.onDeleteLifeEvent(this.props.data)}>
                  X
                </button>

              <div className="card-block">
                <h2 className="card-title">{ this.props.data.title }</h2>
                <h5 className="event-date" >{ this.props.data.eventDate }</h5><span className="pull-center">rating: { this.props.data.userRating }</span><br />
                <p className="content">{ this.props.data.content }</p>

                <span className="cardfooter postdate pull-left">Posted on { this.props.data.postDate }</span>
                <span className="cardfooter pull-right ">Tag: { this.props.data.tags } </span><br/><hr/>

                <EditLifeEventForm
                  lifeEvent={this.props.data}
                  onUpdateLifeEvent={this.props.onUpdateLifeEvent}
                  onDeleteLifeEvent={this.props.onDeleteLifeEvent}
                  id={this.props.data._id}
                />

              </div>
              </div>
            <div className="col-sm-2 pull-left theline">
              <img className="img-dash" src="images/dashline.png"></img>
            </div>
          </div> :
        <div></div>
      }
    </div>
    );
  }
}

export default LifeEvent
