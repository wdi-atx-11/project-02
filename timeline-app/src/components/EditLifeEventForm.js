// src/components/EditTodoForm.js
import React, {Component} from 'react'

class EditLifeEventForm extends Component {
  constructor(){
    // use Component's constructor
    super()
    // set initial state
    this.state = {
      updatedLifeEventTitle: '',
      updatedLifeEventContent: ''
    }
  }
  onInputChange(event){
    console.log('changing a lifeEvent!')
    this.setState({
      updatedLifeEventTitle: event.target.value
    })
  }
  onFormSubmit(event){
    event.preventDefault()
    console.log('edit todo form submitted')
    this.props.onUpdateLifeEvent(this.state.updatedLifeEventTitle, this.props.lifeEvent._id)
    this.setState({
      updatedLifeEventTitle: ''
    })
  }
  render(){
    return (
      <div className='editLifeEventForm' data-lifeEvents-index={this.props.data}>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <input
            onChange={event => this.onInputChange(event)}
            placeholder='Title...'
            type='text'
            value={this.state.updatedLifeEventTitle} />

          <button type='submit'>Update!</button>
        </form>
      </div>
    )
  }
}

export default EditLifeEventForm
