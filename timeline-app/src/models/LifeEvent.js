import $ from 'jquery'

class LifeEventModel {
  static all(){
    let request = $.ajax({
      url: "",
      method: 'GET'
    })
    return request
  }

  static create(lifeEvent) {
    let request = $.ajax({
      url: "",
      method: 'POST',
      data: lifeEvent
    })
    return request
  }

  static delete(lifeEvent){
    let request = $.ajax({
      url: "" + lifeEvent._id,
      method: 'DELETE'
    })
    return request
  }

  static update(newLifeEventBody, id){
    let request = $.ajax({
      url: "",
      method: 'PUT',
      data: { body: newLifeEventBody }
    })
    return request
  }

}

export default LifeEventModel
