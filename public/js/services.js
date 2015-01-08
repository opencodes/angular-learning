
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

blogPost.factory('category', ['$http', function($http){

     var fn = {
         "getCat" : function($scope){
             $http.get('/getCategory').
                 success(function(data, status, headers, config) {
                     $scope.navigation =  data;
                 }).
                 error(function(data, status, headers, config) {
                     return data
                 });
         }
     }
    return fn;
}]);

 blogPost.factory('post', ['$http', function($http){

     var fn = {
         "getPost" : function($scope, id){
             if(!id){
                 return null;
             }
             $http.get('/getPostByCat/'+id).
                 success(function(data, status, headers, config) {
                     $scope.posts =  data;
                 }).
                 error(function(data, status, headers, config) {
                     return null
                 });
         }
     }
     return fn;
 }]);

 blogPost.factory('page', ['$http', function($http){

     var fn = {
         "getPage" : function($scope, id){
             if(!id){
                 return null;
             }
             $http.get('/getPageInfo/'+id).
                 success(function(data, status, headers, config) {
                     $scope.title =  data.title;
                     $scope.body = data.body;
                 }).
                 error(function(data, status, headers, config) {
                     return null
                 });
         }
     }
     return fn;
 }]);
