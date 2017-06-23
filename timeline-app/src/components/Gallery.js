// src/components/Tineline.js
import React, {Component} from 'react'
import LifeEvent from './LifeEvent'


class Gallery extends Component {
  render() {
    let lifeEventsGalleryArray = this.props.lifeEvents.map(lifeEvent => {
      return <LifeEvent
        key={ lifeEvent._id }
        data={ lifeEvent }
      />
    });

    return (
      <section className="col-md-8 col-sm-12 timeline">
        { lifeEventsGalleryArray }
      </section>
    );
  }
}

export default Gallery;
