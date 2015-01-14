
 /*!
* NAME OF THE FILE (e.g. filter.client.js)
* This file contains the code for the Filter controls.
* 
* @project   PROJECT NAME
* @date      1/8/15
* @author    Rajesh Kumar Jha, SapientNitro <rjha9@sapient.com>
* @licensor  ....
* @site      ....
*
*/

 blogPost.controller('categoryCtrl', ['$scope','post','$routeParams', function($scope, post, $routeParams){
     $scope.title = ($routeParams.id) ? $routeParams.id.toUpperCase() : "Unknown";
     post.getPost($scope, $routeParams.id);

 }]);

 blogPost.controller('postCtrl', ['$scope','post','$routeParams', function($scope, post, $routeParams){
     post.getPostDetail($scope, $routeParams.id);


 }]);

 var module = angular.module('myapp', []);

 blogPost.controller("TreeCtrl", function($scope) {
     $scope.treeFamily = {
         name : "Parent",
         children: [{
             name : "Child1",
             children: [{
                 name : "Grandchild1",
                 children: []
             },{
                 name : "Grandchild2",
                 children: []
             },{
                 name : "Grandchild3",
                 children: [{
                     name : "Grandchild4",
                     children: []
                 },{
                     name : "Grandchild5",
                     children: []
                 },{
                     name : "Grandchild6",
                     children: []
                 }]
             }]
         }, {
             name: "Child2",
             children: []
         }]
     };
 });


