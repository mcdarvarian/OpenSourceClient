'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/view1' });
  }]);

let todoArray = {
  name: '',
  sport: '',
  team: '',
  gender: '',
  married: false
};

function page1Submit() {
  todoArray = {
    name:  document.getElementById('name').value,
    sport: '',
    team: '',
    gender: '',
    married: false
  };
  console.log(todoArray);
}
function page2Submit(values) {
  todoArray = {
    name: todoArray.name,
    sport: document.getElementById('sport').value,
    team: document.getElementById('team').value,
    gender: '',
    married: false
  };
  console.log(todoArray);
}
function page3Submit(values) {
  console.log(document.getElementById('todoForm').value)
  todoArray = {
    name: todoArray.name,
    sport: todoArray.sport,
    team: todoArray.team,
    gender: document.getElementById('gender').value,
    married: document.getElementsByName('marriage').value
  };
  console.log('todo is', todoArray);
}

function check() {
  console.log('check is', todoArray);
}
