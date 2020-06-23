angular.module('userApp').component('userComp', {
  templateUrl: 'components/users/user.template.html',
  controller: [ '$http', function usersController($http){
    $http.get('users.json').then(res => this.users = res.data);
    this.onSubmit = function(userData){
      this.users.push(userData);
    } 
  }]
})