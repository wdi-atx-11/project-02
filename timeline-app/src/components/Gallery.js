// src/components/Tineline.js
import React, {Component} from 'react'
import LifeEvent from './LifeEvent'


class Gallery extends Component {
  render() {
    let lifeEventsArray = this.props.lifeEvents.map(lifeEvent => {
      return <LifeEvent
        key={ lifeEvent._id }
        data={ lifeEvent }
        uid={lifeEvent.uid}
      />
    });

    return (
      <section className="col-md-8 col-sm-12 timeline">
        { lifeEventsArray }
      </section>
    );
  }
}

export default Gallery;
