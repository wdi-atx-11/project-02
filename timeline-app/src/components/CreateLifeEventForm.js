// src/components/CreateTodoForm.js
import React, {Component} from 'react';

// inside src/components/CreateLifeEventForm.js
class CreateLifeEventForm extends Component {
  constructor(props){
    // use Component's constructor
    super(props)
    // set initial state
    var d = new Date().toISOString().slice(0,10);
    this.state = {
        eventDate: '',
        postDate: d,
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
    let newLifeEvent = {
      eventDate: this.state.eventDate,
      postDate: this.state.postDate,
      title: this.state.title,
      isPublic: this.state.isPublic,
      content: this.state.content,
      tags: this.state.tags,
      photo: this.state.photo,
      userRating: this.state.userRating,
      uid: this.props.currentUser.uid
    }
    this.props.onCreateLifeEvent(newLifeEvent)

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

    render() {
      return (
        <section className="col-md-4 col-sm-12 add-quote">
          <form onSubmit={ e => this.onFormSubmit(e) } className="form-add-lifeEvent">
            <div className="row">
              <input
                onChange={ e => { this.setState({ eventDate: e.target.value }) } }
                value={ this.state.eventDate }
                className="form-control"
                rows="3"
                placeholder="When did this happen?" />
            </div>

            <div className="row">
              <input
                onChange={ e => { this.setState({ title: e.target.value }) } }
                value={ this.state.title }
                className="form-control"
                rows="3"
                placeholder="Title" />
            </div>

            <div className="row">
              <input
                onChange={ e => { this.setState({ content: e.target.value }) } }
                value={ this.state.content }
                className="form-control"
                rows="3"
                placeholder="What happened..." />
            </div>

            <div className="row">
              <input
                onChange={ e => { this.setState({ tags: e.target.value }) } }
                value={ this.state.tags }
                className="form-control"
                rows="3"
                placeholder="Add some tags..." />
            </div>

            <div className="row">
              <input
                onChange={ e => { this.setState({ photo: e.target.value }) } }
                value={ this.state.photo }
                className="form-control"
                rows="3"
                placeholder="Upload a photo" />
            </div>

            <div className="row">
              <input
                onChange={ e => { this.setState({ userRating: e.target.value }) } }
                value={ this.state.userRating }
                className="form-control"
                rows="3"
                placeholder="Rate this event from your life on a scale from 1-10" />
            </div>

            <div className="row">
              <input
                type="checkbox"
                value={ this.state.isPublic }
                /> {' '} PUBLIC?
              </div>

            <div className="row">
              <button className="btn btn-primary">Add Life Event</button>
            </div>
          </form>
        </section>
      );
    }
  }

export default CreateLifeEventForm
