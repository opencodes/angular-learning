
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

 blogPost.controller('postsCtrl', ['$scope','post','$routeParams', function($scope, post, $routeParams){
     $scope.title = ($routeParams.id) ? $routeParams.id.toUpperCase() : "Unknown";
     post.getPost($scope, $routeParams.id);

 }]);

