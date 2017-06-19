// src/components/Tineline.js
import React, {Component} from 'react'
import LifeEvent from './LifeEvent'
import { database, firebaseListToArray } from '../utils/firebase'


class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeline: []
    }

    this.ref = database.ref('/timeline');
  }

  componentWillMount() {
    this.ref
      .on('value', data => {
        const timeline = firebaseListToArray(data.val());
        console.log('timeline', timeline);

        this.setState({
          timeline: timeline
        });
      });
  }

  componentWillUnmount() {
    this.ref.off();
  }

  render() {
    const timeline = this.state.timeline.map(lifeEvent => {
      return <LifeEvent key={ lifeEvent.id } data={ lifeEvent } />
    });

    return (
      <section className="col-md-8 col-sm-12 timeline">
        { timeline }
      </section>
    );
  }
}

export default Timeline;
