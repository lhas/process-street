(function(){
  'use strict';

  angular
    .module('app.form', ['app.form.config'])
    .component('psForm', {
      templateUrl: 'app/form/form.html',
      controller: FormController
    });

    FormController.$inject = [];
    function FormController() {
      var vm = this;
      var options = {
          maxFileSize: 5000000,
          type: "POST",
          url:'https://upload.wistia.com/',
          done: function (e, data) {
            vm.medias.push(data.result);
          }
      };
      var medias = [];

      vm.options = options;
      vm.medias = medias;
    }

})();