// src/components/Tineline.js
import React, {Component} from 'react'
import LifeEvent from './LifeEvent'
import { database, firebaseListToArray } from '../utils/firebase'


class Timeline extends Component {
  render() {
    let timeline = this.props.timeline.map(lifeEvent => {
      return <LifeEvent
        key={ lifeEvent._id }
        data={ lifeEvent }
        onUpdateLifeEvent={this.props.onUpdateLifeEvent}
        onDeleteLifeEvent={this.props.onDeleteLifeEvent}
        />
    });

    return (
      <section className="col-md-8 col-sm-12 timeline">
        { timeline }
      </section>
    );
  }
}

export default Timeline;
