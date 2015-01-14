
 /*!
* route.js
* This file contains the code for the Filter controls.
* 
* @project   PROJECT NAME
* @date      1/8/15
* @author    Rajesh Kumar Jha, SapientNitro <rjha9@sapient.com>
* @licensor  ....
* @site      ....
*
*/
 blogPost.config(function($routeProvider){

     $routeProvider.when('/', {
         templateUrl: '../views/partials/home.html',
         controller: 'staticPageCtrl'
     })
     .when('/:page', {
         templateUrl: '../views/partials/staticpage.html',
         controller: 'staticPageCtrl'
     })
     .when('/category/:id', {
             templateUrl: '../views/partials/category.html',
             controller: 'categoryCtrl'
     })
     .when('/post/:id', {
         templateUrl: '../views/partials/post.html',
         controller: 'postCtrl'
     }).
     otherwise({
         redirectTo: '/'
     });
 });

 
 
