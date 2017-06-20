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
  onFormSubmit(e){
    e.preventDefault()
    console.log('edit life event form submitted')
    let updatedLifeEvent = {
      title: this.state.title,
      content: this.state.content
    }
    this.props.onUpdateLifeEvent(this.state.updatedLifeEvent, this.props.lifeEvent._id)
    this.setState({
      updatedLifeEvent: ''
    })
  }
  render(){
    return (
      <div className='editLifeEventForm' data-lifeEvents-index={this.props.lifeEvent._id}>
        <form onSubmit={e => this.onFormSubmit(e)}>
          <input
            onChange={e => { this.setState({ title: e.target.value }) }}
            placeholder='Title...'
            type='text'
            value={this.state.title} />
          <input
            onChange={e => { this.setState({ content: e.target.value }) } }
            placeholder='Content...'
            type='text'
            value={this.state.content} />
          <button type='submit'>Update!</button>
        </form>
      </div>
    )
  }
}

export default EditLifeEventForm
