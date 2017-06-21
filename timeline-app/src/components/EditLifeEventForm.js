// src/components/EditTodoForm.js
import React, {Component} from 'react'

class EditLifeEventForm extends Component {
  constructor(){
    // use Component's constructor
    super()
    // set initial state
    this.state = {
      updatedLifeEventTitle: ''
    }
  }
  onInputChange(event){
    console.log('changing a life event!')
    this.setState({
      updatedLifeEventTitle: event.target.value
    })
  }
  onFormSubmit(event){
    event.preventDefault()
    console.log('edit life event form submitted')
    this.props.onUpdateLifeEvent(this.state.updatedLifeEventTitle, this.props.lifeEvent._id)
    this.setState({
      updatedLifeEventTitle: ''
    })
  }
  render(){
    return (
      <div className='editLifeEventForm' data-lifeEvents-index={this.props.lifeEvent._id}>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <input
            onChange={event => this.onInputChange(event)}
            placeholder='Update...'
            type='text'
            value={this.state.updatedLifeEventTitle} />
          <button type='submit'>Update!</button>
        </form>
      </div>
    )
  }
}

export default EditLifeEventForm
