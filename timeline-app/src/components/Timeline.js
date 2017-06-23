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
        uid={lifeEvent.uid}
      />
    });

    return (
      <div className="timeline row">
          <div className="timeline-card timeline pull-right col-sm-8">

            { lifeEventsArray }

          </div>
          <div>
            <img id="arrow-line" src="images/line.png" />
          </div>
        </div>
    );
  }
}

export default Timeline;
