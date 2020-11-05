// // Angular Routing

var app = angular.module("bingeApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html"
        })
        .when("/library", {
            templateUrl: "library.html"
        })
});


