// src/components/CreateTodoForm.js
import React, {Component} from 'react';
import { database } from '../utils/firebase';

// inside src/components/CreateLifeEventForm.js
class CreateLifeEventForm extends Component {
  constructor(props){
    // use Component's constructor
    super(props)
    // set initial state
    this.state = {
        title: ''
    }
  }

    onFormSubmit(e){
    e.preventDefault()
    let newLifeEvent = this.state
    this.props.createLifeEvent(newLifeEvent)
    console.log('new life event', newLifeEvent)
    this.setState({
        title: ''
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
              <button className="btn btn-primary">Add Life Event</button>
            </div>
          </form>
        </section>
      );
    }
  }

export default CreateLifeEventForm
