// src/components/CreateTodoForm.js
import React, {Component} from 'react';
import { database } from '../utils/firebase';

// inside src/components/CreateLifeEventForm.js
class CreateLifeEventForm extends Component {
  constructor(props) {
      super(props);

      this.state = {
        title: '',
        content: ''
      }

      this.ref = database.ref('/timeline');
    }

    componentWillUnmount() {
      this.ref.off();
    }

    handleSubmit(e) {
      e.preventDefault();
      console.log('title: ', this.state.title, 'content: ', this.state.content);

      if (!this.props.currentUser) {
        // @todo Return error message
        console.log('User not logged in');
        return;
      }
      if (!this.state.title || !this.state.content) {
        // @todo Return error message
        console.log('Missing data');
        return;
      }

      this.ref.push({
        user: {
          uid: this.props.currentUser.uid,
          photoURL: this.props.currentUser.photoURL,
          displayName: this.props.currentUser.displayName
        },
        text: this.state.title,
        author: this.state.content,
        // This allows us to return data in desc order in Firebase
        '.priority':  0 - Date.now()
      });

      this.setState({
        title: '',
        content: ''
      })
    }

    render() {
      return (
        <section className="col-md-4 col-sm-12 add-quote">
          <form onSubmit={ this.handleSubmit.bind(this) } className="form-add-lifeEvent">
            <div className="row">
              <textarea
                onChange={ e => { this.setState({ title: e.target.value }) } }
                value={ this.state.title }
                className="form-control"
                rows="3"
                placeholder="Meaningful life event"></textarea>
            </div>
            <div className="row">
              <input
                onChange={ e => { this.setState({ content: e.target.value }) } }
                value={ this.state.title }
                className="form-control"
                type="text"
                placeholder="Description of life event" />
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
