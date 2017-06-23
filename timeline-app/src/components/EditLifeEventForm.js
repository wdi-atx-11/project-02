// src/components/EditTodoForm.js
import React, {Component} from 'react'

class EditLifeEventForm extends Component {
  constructor(props){
    // use Component's constructor
    super(props)
    // set initial state
    this.state = {
      eventDate: '',
      postDate: '',
      title: '',
      isPublic: false,
      content: '',
      tags: '',
      photo: '',
      userRating: '',
      uid: ''
    }
  }

  onFormSubmit(e){
    e.preventDefault()
    let updatedLifeEvent = {
      eventDate: this.state.eventDate || this.props.lifeEvent.eventDate,
      postDate: this.state.postDate || this.props.lifeEvent.postDate,
      title: this.state.title || this.props.lifeEvent.title,
      isPublic: this.state.isPublic || this.props.lifeEvent.isPublic,
      content: this.state.content || this.props.lifeEvent.content,
      tags: this.state.tags || this.props.lifeEvent.tags,
      photo: this.state.photo || this.props.lifeEvent.photo,
      userRating: this.state.userRating || this.props.lifeEvent.userRating,
    }
    this.props.onUpdateLifeEvent(updatedLifeEvent, this.props.lifeEvent._id)

    this.setState({
      eventDate: '',
      postDate: '',
      title: '',
      isPublic: false,
      content: '',
      tags: '',
      photo: '',
      userRating: '',
      uid: ''
    })
  }
  render(){
    let dataTarget = "#collapseItem-" + this.props.id
    let targetId = "collapseItem-" + this.props.id
    return (

      <div>

        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target={dataTarget} aria-expanded="false" aria-controls="collapseExample">
          EDIT
        </button>

        <div className="collapse hideedit" id={targetId}>
              <div className="card card-block">


                  <div className='editLifeEventForm' data-lifeEvents-index={this.props.lifeEvent._id}>
                    <form onSubmit={ e => this.onFormSubmit(e) } className="form-add-lifeEvent">
                      <div className="row">
                        <input
                          onChange={ e => { this.setState({ eventDate: e.target.value }) } }
                          value={ this.state.eventDate }
                          className="form-control"
                          rows="3"
                          placeholder="Edit the event date..." />
                      </div>

                      <div className="row">
                        <input
                          onChange={ e => { this.setState({ title: e.target.value }) } }
                          value={ this.state.title }
                          className="form-control"
                          rows="3"
                          placeholder="Edit the title..." />
                      </div>

                      <div className="row">
                        <input
                          onChange={ e => { this.setState({ content: e.target.value }) } }
                          value={ this.state.content }
                          className="form-control"
                          rows="3"
                          placeholder="Edit what happened..." />
                      </div>

                      <div className="row">
                        <input
                          onChange={ e => { this.setState({ tags: e.target.value }) } }
                          value={ this.state.tags }
                          className="form-control"
                          rows="3"
                          placeholder="Edit the tags..." />
                      </div>

                      <div className="row">
                        <input
                          onChange={ e => { this.setState({ photo: e.target.value }) } }
                          value={ this.state.photo }
                          className="form-control"
                          rows="3"
                          placeholder="Upload a different photo" />
                      </div>

                      <div className="row">
                        <input
                          onChange={ e => { this.setState({ userRating: e.target.value }) } }
                          value={ this.state.userRating }
                          className="form-control"
                          rows="3"
                          placeholder="Change the rating..." />
                      </div>

                      <div className="row">
                        <input
                          type="checkbox"
                          value={ this.state.isPublic }
                          /> {' '} Public?
                        </div>

                      <div className="row">
                        <button className="btn btn-primary">Update</button>
                      </div>
                    </form>
                  </div>


              </div>
            
            </div>
          </div>
    )
  }
}

export default EditLifeEventForm
