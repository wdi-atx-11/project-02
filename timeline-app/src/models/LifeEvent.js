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

  static delete(data, id){
    let request = $.ajax({
      url: `https://project-02-8b8aa.firebaseio.com/timeline/${data.id}/.json/`,
      method: 'DELETE'
    })
    return request
  }

  static update(newLifeEventTitle, newLifeEventContent, id){
    let request = $.ajax({
      url: `https://project-02-8b8aa.firebaseio.com/timeline/${id}/.json/`,
      method: 'PUT',
      data: {
        'title': 'newLifeEventTitle',
        'content': 'newLifeEventContent'
      }
    })
    return request
  }

}

export default LifeEventModel
