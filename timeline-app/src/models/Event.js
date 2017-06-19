import $ from 'jquery'

class EventModel {
  static all(){
    let request = $.ajax({
      url: "",
      method: 'GET'
    })
    return request
  }

  static create(event) {
    let request = $.ajax({
      url: "",
      method: 'POST',
      data: event
    })
    return request
  }

  static delete(event){
    let request = $.ajax({
      url: "" + todo._id,
      method: 'DELETE'
    })
    return request
  }

  static update(newEventBody, id){
    let request = $.ajax({
      url: "",
      method: 'PUT',
      data: { body: newEventBody }
    })
    return request
  }

}

export default EventModel
