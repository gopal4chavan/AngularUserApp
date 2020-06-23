// import controller from './user-details.controller';

angular.module('userApp').component('userDetails', {
  templateUrl: 'components/details/user-details.html',
  bindings: {
    userId: '<'
  },
  controller: ['$http', function($http){
    $http.get('users.json').then(res => {
      debugger;
      this.user = res.data.find(usr => usr.id == this.userId)
    })
    debugger;
    console.log(this.user);
  }]
})


// export default class Controller {
//   constructor($http){
//     this.$http = $http;
//   }

//   $onInit() {
//     this.$http.get('users.json').then(res => {
//       this.user = res.data.find(usr => usr.id == this.userId)
//     })
//   }
// }
// Controller.$inject = ['$http'];