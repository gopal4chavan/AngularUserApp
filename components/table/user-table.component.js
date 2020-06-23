angular.module('userApp').component('userTable', {
  templateUrl: 'components/table/user-table.html',
  bindings: {
    users: '<'
  }
})