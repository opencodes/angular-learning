
 /*!
* home.js
* This file contains the code for the Filter controls.
* 
* @project   PROJECT NAME
* @date      1/8/15
* @author    Rajesh Kumar Jha, SapientNitro <rjha9@sapient.com>
* @licensor  ....
* @site      ....
*
*/
 
 blogPost.controller('staticPageCtrl', ['$scope','$routeParams', 'page', function($scope, $routeParams, page){

    page.getPage($scope, $routeParams.page);


 }])
