// src/components/Tineline.js
import React, {Component} from 'react'
import LifeEvent from './LifeEvent'


class Timeline extends Component {
  render() {
    let lifeEventsArray = this.props.lifeEvents.map(lifeEvent => {
      return <LifeEvent
        key={ lifeEvent._id }
        data={ lifeEvent }
        onUpdateLifeEvent={this.props.onUpdateLifeEvent}
        onDeleteLifeEvent={this.props.onDeleteLifeEvent}
      />
    });

    return (
      <section className="col-md-8 col-sm-12 timeline">
        { lifeEventsArray }
      </section>
    );
  }
}

export default Timeline;
