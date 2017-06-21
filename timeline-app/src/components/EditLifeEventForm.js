// src/components/EditTodoForm.js
import React, {Component} from 'react'

class EditLifeEventForm extends Component {
  constructor(props){
    // use Component's constructor
    super(props)
    // set initial state
    this.state = {
        title: '',
        content: ''
    }
  }
  onTitleChange(e){
      this.setState({
        title: e.target.value
      })

  }
  onContentChange(e){
    this.setState({
      content: e.target.value
    })
  }
  onFormSubmit(e){

    e.preventDefault()
    let updatedLifeEvent = {
      title: this.state.title || this.props.lifeEvent.title,
      content: this.state.content || this.props.lifeEvent.content
    }
    this.props.onUpdateLifeEvent(updatedLifeEvent, this.props.lifeEvent._id)

    this.setState({
      title: '',
      content: ''
    })
  }
  render(){
    return (
      <div className='editLifeEventForm' data-lifeEvents-index={this.props.lifeEvent._id}>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <textarea
            onChange={event => this.onTitleChange(event)}
            placeholder='Update Title...'
            type='text'
            value={this.state.title} /> {'  '}
          <textarea
            onChange={event => this.onContentChange(event)}
            placeholder='Update Content...'
            type='text'
            value={this.state.content} />{'  '}
            <br />
          <button className="btn btn-primary" type='submit'>Update!</button>
        </form>
      </div>
    )
  }
}

export default EditLifeEventForm
