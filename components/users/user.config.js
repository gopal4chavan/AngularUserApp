angular.module('userApp').config(function($stateProvider){
  let states = [
    {
      name: 'main',
      url: '/',
      component: 'userComp'
    },
    {
      name: 'user-details',
      url: '/details/{userId}',
      component: 'userDetails',
      resolve: {
        userId: $stateParams => $stateParams.userId
      }
    },
    {
      name: 'test',
      url: '/test',
      component: 'userComp'
    }
  ]
  states.forEach((state) => $stateProvider.state(state))
})