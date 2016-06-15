angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('workingPercents', function($scope) {
  $scope.work = 0;
  $scope.percents = [{name: "50",
                      value: 0.5},
                      {name: "55", 
                      value: 0.55},
                      {name: "60" ,
                       value: 0.6},
                       {name: "65",
                       value: 0.65},
                       {name: "70",
                       value: 0.7} ,
                       {name: "75",
                       value: 0.75},
                       {name: "80",
                        value: 0.8},
                        {name: "85",
                        value: 0.85,},
                        {name: "90",
                        value: 0.9},
                        {name: "95",
                        value : 0.95} 
                    ];
})


.controller('converterCtrl', function($scope, $filter) {
$scope.kilo = 0;

$scope.kiloToKilo = function(val){return val;};

$scope.lbsToKilo = function(val){
  return (val/2.20462262);
};

$scope.kiloToLbs = function(val){
  return (val * 2.20462262);
};

});


//check scrolling? scroll lock?

//rethink home page?

/// remove excess? 

