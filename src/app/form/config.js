(function(){
  'use strict';

  angular
    .module('app.form.config', ['blueimp.fileupload'])
    .config(formConfig);

    formConfig.$inject = ['$httpProvider', 'fileUploadProvider'];
    
    function formConfig($httpProvider, fileUploadProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        fileUploadProvider.defaults.redirect = window.location.href.replace(
            /\/[^\/]*$/
        );
    }

})();