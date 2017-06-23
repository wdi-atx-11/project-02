import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import {Button, Modal, Body, OverlayTrigger, Popover, Tooltip, mountNode} from 'react-bootstrap';
import CreateLifeEventForm from '../components/CreateLifeEventForm'
import LifeEventModel from '../models/LifeEvent'



const CreateModal = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },


  createLifeEvent(newLifeEvent) {
    LifeEventModel.create(newLifeEvent).then( (res) => {
      console.log('created life event', res)
      let lifeEvents = this.state.lifeEvents
      let newTimeline = lifeEvents.push(res)
      this.setState({newTimeline})
    })
  },

  render() {

    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div className="modalarea">
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Create Event
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Create Life Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <CreateLifeEventForm
              currentUser= {this.state.currentUser}
              onCreateLifeEvent={this.createLifeEvent.bind(this)}
              close = {this.close}

            />

          </Modal.Body>

          <Modal.Footer className="modalfooter">
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});


export default CreateModal;
