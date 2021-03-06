// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers']).config(function ($ionicConfigProvider) {
    if (!ionic.Platform.isAndroid()) {
    $ionicConfigProvider.scrolling.jsScrolling(false);
  }
})


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

  .directive('enhancedInput', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attr, ngModelCtrl) {
              ngModelCtrl.$parsers.unshift(scope.$eval(attr.toKilo));
              ngModelCtrl.$formatters.unshift(scope.$eval(attr.fromKilo));
      }
    }
  })

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.records', {
    url: '/records',
    views: {
      'menuContent': {
        templateUrl: 'templates/records.html',
        //controller: 'recordsCtrl'
      }
    }
  })

  .state('app.recordsDetails', {
    url: '/recordsDetails',
    templateUrl: 'templates/recordsDetails.html',
    controller: 'recordedsDetailsCtrl'
  })

    .state('app.workingPercents', {
      url: '/workingPercents',
      views: {
        'menuContent': {
          templateUrl: 'templates/workingPercents.html',
          controller: 'workingPercents'
        }
      }
    })

    .state('app.weightConverter' , {
      url: '/weightConverter',
      views: {
        'menuContent' : {
          templateUrl: 'templates/weightConverter.html',
          controller: 'converterCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/workingPercents');
  });
