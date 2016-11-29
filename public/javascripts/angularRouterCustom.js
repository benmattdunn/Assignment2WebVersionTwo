/**
 * Created by User on 11/27/2016.
 */


/**
 * Created by User on 11/27/2016.
 provides inline page loading through angular.

 */
// declare inline router.
angular.module('homePageAPP', [])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {templateUrl:'views/partials/index/view.ejs'})
            .when('/index', {templateUrl:'views/partials/index/view.ejs'})
            .when('/about', {templateUrl:'partials/index/about.ejs'})
            .when('/index/view/:id',{templateUrl:'partials/index/view.ejs',controller:'viewBusinessController'})
    })
    .controller('homePageDirectoryController',['$scope', '$http',function($scope,$http){
        $http.get('../data.js').success(function(data) {

            $scope.people = data

        })
    }])


