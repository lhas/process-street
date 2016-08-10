(function(){
  'use strict';

  angular
    .module('app.form', ['app.form.config'])
    .component('psForm', {
      templateUrl: 'app/form/form.html',
      controller: FormController
    });

    FormController.$inject = ['$scope'];
    function FormController($scope) {
      $scope.options = {
          maxFileSize: 5000000,
          type: "POST",
          url:'http://localhost:3010/',
          acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
      };
    }

})();