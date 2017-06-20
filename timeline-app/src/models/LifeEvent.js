import $ from 'jquery'

class LifeEventModel {
  static all(){
    let request = $.ajax({
      url: "https://timeline--app.herokuapp.com/lifeevents",
      method: 'GET'
    })
    return request
  }

  static create(title, content) {
    let request = $.ajax({
      url: "https://timeline--app.herokuapp.com/lifeevents",
      method: 'POST',
      data: {title, content}
    })
    return request
  }

  static delete(lifeEvent){
    let request = $.ajax({
      url: "https://timeline--app.herokuapp.com/lifeevents" + lifeEvent._id,
      method: 'DELETE'
    })
    return request
  }

  static update(newLifeEvent, id){
    let request = $.ajax({
      url: `https://timeline--app.herokuapp.com/lifeevents${id}`,
      method: 'PUT',
      data: { body: newLifeEvent }
    })
    return request
  }

}

export default LifeEventModel
