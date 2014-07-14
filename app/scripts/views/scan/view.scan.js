'use strict';

(function (app) {

  app.config(['$stateProvider', function ($stateProvider) {

    $stateProvider.state('scan', {
      url        : '/scan',
      controller : 'ScanCtrl',
      templateUrl: '/scripts/views/scan/scan.tpl.html'
    });

  }]);

  app.controller('ScanCtrl', ['$scope', function ($scope) {

    var init = function () {

      // A definitive place to put everything that needs to run when the controller starts.
      // Avoid writing any code outside of this function that executes immediately.



    };

    init();

  }]);

}(angular.module('Tectonic.view.scan', [

// List Dependencies to inject here

  'ui.router'

])));