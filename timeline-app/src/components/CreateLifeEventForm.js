// src/components/CreateTodoForm.js
import React, {Component} from 'react'
import Checkbox from './Checkbox'

// const items = [
//   'One',
//   'Two',
//   'Three',
// ];

// inside src/components/CreateLifeEventForm.js
class CreateLifeEventForm extends Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }
  constructor(props){
    // use Component's constructor
    super(props)
    var d = new Date().toISOString().slice(0,10);
    // set initial state
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

  toggleCheckbox = (label) => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  createCheckbox = isPublic => (
    <Checkbox
      label={'Public? '}
      handleCheckboxChange={this.toggleCheckbox}
      key={'Public? '}
      required
    />
  )

  onFormSubmit(e){
  e.preventDefault()
  for (const checkbox of this.selectedCheckboxes) {
    (checkbox) ? this.state.isPublic = true : this.state.isPublic = false
    console.log(checkbox, 'is selected.');
  }

  let date = new Date(this.state.eventDate)
  console.log(date);
  let eventDateToNumber = Date.parse(date);
  console.log(eventDateToNumber);

  let newLifeEvent = {
    eventDate: eventDateToNumber,
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
              <div className="col-sm-12">
              </div>
            </div>
            <div className="row">
              <input
                onChange={ e => { this.setState({ eventDate: e.target.value }) } }
                value={ this.state.eventDate }
                className="form-control"
                rows="3"
                placeholder="When did this happen?"
                required
                type="date"
               required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" />
            </div>

            <div className="row">
              <input
                onChange={ e => { this.setState({ title: e.target.value }) } }
                value={ this.state.title }
                className="form-control"
                rows="3"
                placeholder="Title"
                required
                maxLength="40" />
            </div>

            <div className="row">
              <input
                onChange={ e => { this.setState({ content: e.target.value }) } }
                value={ this.state.content }
                className="form-control"
                rows="3"
                placeholder="What happened..."
                required
                maxLength="1000" />
            </div>

            <div className="row">
              <input
                onChange={ e => { this.setState({ tags: e.target.value }) } }
                value={ this.state.tags }
                className="form-control"
                rows="3"
                placeholder="Add some tags..."
                maxLength="50" />
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
                placeholder="Rate this event from your life on a scale from 1-10"
                type="number"
                min="1"
                max="10"
                required />
            </div>

            <div className="row">
              {this.createCheckbox()}
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
