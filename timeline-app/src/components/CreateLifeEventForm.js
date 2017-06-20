// src/components/CreateTodoForm.js
import React, {Component} from 'react';
import { database } from '../utils/firebase';

// inside src/components/CreateLifeEventForm.js
class CreateLifeEventForm extends Component {
  constructor(){
    // use Component's constructor
    super()
    // set initial state
    this.state = {
        title: '',
        content: ''
    }
  }

    onFormSubmit(e){
    e.preventDefault()
    let newLifeEvent = {
      title: this.state.title,
      content: this.state.content
    }
    this.props.createLifeEvent(newLifeEvent)
    console.log(newLifeEvent)
    this.setState({
        title: '',
        content: ''
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
              <textarea
                onChange={ e => { this.setState({ content: e.target.value }) } }
                value={ this.state.content }
                className="form-control"
                type="text"
                placeholder="Description of life event"></textarea>
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
