// src/components/CreateTodoForm.js
import React, {Component} from 'react';

// inside src/components/CreateLifeEventForm.js
class CreateLifeEventForm extends Component {
  constructor(props){
    // use Component's constructor
    super(props)
    // set initial state
    this.state = {
        title: '',
        content: '',
        uid: ''
    }
  }

    onFormSubmit(e){
    e.preventDefault()
    let newLifeEvent = {
      title: this.state.title,
      content: this.state.content,
      uid: this.props.currentUser.uid
    }
    this.props.onCreateLifeEvent(newLifeEvent)

    this.setState({
        title: '',
        content: '',
        uid: ''
    })
}

    render() {
      return (
        <section className="col-md-4 col-sm-12 add-quote">
          <form onSubmit={ e => this.onFormSubmit(e) } className="form-add-lifeEvent">

            <div className="row">
              <input
                onChange={ e => { this.setState({ title: e.target.value }) } }
                value={ this.state.title }
                className="form-control"
                rows="3"
                placeholder="Meaningful life event" />
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
              <button className="btn btn-primary">Add Life Event</button>
            </div>
          </form>
        </section>
      );
    }
  }

export default CreateLifeEventForm
