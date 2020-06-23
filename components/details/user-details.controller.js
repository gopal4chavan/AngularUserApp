
export default class Controller {
  constructor($http){
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('users.json').then(res => {
      this.user = res.data.find(usr => usr.id == this.userId)
    })
  }
}
Controller.$inject = ['$http'];