/**
 * Created by User on 11/27/2016.
 */


/**
 * Created by User on 11/27/2016.
 provides inline page loading through angular.

 */

var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/index');

    $stateProvider

        //provides main landing state for control
        .state('/index', {
            url: '/index',
            templateUrl: '.partials.partial-about.html'
        })



});