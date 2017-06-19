// src/components/CreateTodoForm.js
import React, {Component} from 'react'

// inside src/components/CreateLifeEventForm.js
class CreateLifeEventForm extends Component {
  constructor(){
    // use Component's constructor
    super()
    // set initial state
    this.state = {
      lifeEvent: ''
    }
  }

  onInputChange(event){
    this.setState ({
      lifeEvent: event.target.value
    })
  }

  onFormSubmit(event){
    event.preventDefault()
    let newLifeEvent = this.state.lifeEvent
    this.props.createLifeEvent(newLifeEvent)
    this.setState({
      lifeEvent: ""
    })
}

  render(){
    return (
      <div className='createForm lifeEventForm'>
        <h2>Add an event from your life here!</h2>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <input
            onChange={event => this.onInputChange(event)}
            placeholder='Enter a life event here ...'
            type='text'
            value={this.state.lifeEvent} />
          <button type='submit'>Add Life Event!</button>
        </form>
      </div>
    )
  }
}

export default CreateLifeEventForm
