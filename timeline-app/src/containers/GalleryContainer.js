import React, {Component} from 'react'
import Timeline from '../components/Timeline'
import LifeEventModel from '../models/LifeEvent'


class GalleryContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      lifeEvents: []
    }
  }

  componentDidMount(){
    //this is dumb
    this.fetchData()
    this.fetchData()
  }


  fetchData(){
    LifeEventModel.all().then( (res) => {
      this.setState ({
        lifeEvents: res.lifeEvents
      })
    })
  }

  render(){
    return (
      <div className='timelineContainer'>
        <Timeline
          lifeEvents={this.state.lifeEvents}
        />
      </div>
    )
  }
}

export default GalleryContainer
