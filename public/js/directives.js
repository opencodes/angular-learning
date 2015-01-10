"use strict"
 /*!
* NAME OF THE FILE (e.g. filter.client.js)
* This file contains the code for the Filter controls.
* 
* @project   PROJECT NAME
* @date      1/10/15
* @author    Rajesh Kumar Jha, SapientNitro <rjha9@sapient.com>
* @licensor  ....
* @site      ....
*
*/

//Directive as attribute
blogPost.directive('ngPostheader', function(){
    return {
        restrict : "A",
        templateUrl : '../views/partials/post/header.html'
    }
})
 
 
