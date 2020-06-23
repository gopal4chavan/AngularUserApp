angular.module('userApp').component('userForm', {
  templateUrl: 'components/form/user-form.html',
  bindings: {
    onSubmit: '&'
  },
  controller: function userFormController($scope){
    this.$scope = $scope;
    $scope.user = {}

    this.submit = (userForm) => {
      this.onSubmit({userData: this.$scope.user});
      userForm.$setPristine();
      userForm.$setUntouched();
      this.reset();
    } 
    
    this.reset = () => {
      this.$scope.user = {
        name: '',
        age: '',
        designation: ''
      }
    }
    this.reset();
  }
})