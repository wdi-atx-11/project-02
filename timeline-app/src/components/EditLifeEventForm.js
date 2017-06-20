// src/components/EditTodoForm.js
import React, {Component} from 'react'

class EditLifeEventForm extends Component {
  constructor(){
    // use Component's constructor
    super()
    // set initial state
    this.state = {
      updatedLifeEventBody: ''
    }
  }
  onInputChange(event){
    console.log('changing a lifeEvent!')
    this.setState({
      updatedLifeEventBody: event.target.value
    })
  }
  onFormSubmit(event){
    event.preventDefault()
    console.log('edit todo form submitted')
    this.props.onUpdateLifeEvent(this.state.updatedLifeEventTitle, this.state.updatedLifeEventContent, this.props.lifeEvent._id)
    this.setState({
      updatedLifeEventBody: ''
    })
  }
  render(){
    return (
      <div className='editLifeEventForm' data-timeline-index={this.props.data}>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <input
            onChange={event => this.onInputChange(event)}
            placeholder='Title...'
            type='text'
            value={this.state.updatedLifeEventTitle} />
          <input
            onChange={event => this.onInputChange(event)}
            placeholder='Content...'
            type='text'
            value={this.state.updatedLifeEventContent} />
          <button type='submit'>Update!</button>
        </form>
      </div>
    )
  }
}

export default EditLifeEventForm
