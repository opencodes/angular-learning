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
blogPost.directive('ngStaticheader', function(){
    return {
        restrict : "A",
        templateUrl : '../views/partials/post/header.html'
    }
})

//Directive as element
blogPost.directive('ngPostheader', function(){
    return {
        restrict : "E",
        scope: {
            ngModel: '=',     // Bind the ngModel to the object given
            onSend: '&',      // Pass a reference to the method
            postId: '@'     // Store the string associated by fromName
        },
        templateUrl : '../views/partials/post/header.html'
    }
})

blogPost.directive("tree", function($compile) {
    return {
        restrict: "E",
        transclude: true,
        scope: {family: '='},
        template:
            '<ng-transclude></ng-transclude>' +
            '<div ng-repeat="child in family.children" class="child">' +
            '<tree family="child"><p class="glyphicon glyphicon-minus">{{ family.name }}</p> </tree>' +
            '</div>'
        ,
        compile: function(tElement, tAttr, transclude) {
            var contents = tElement.contents().remove();
            var compiledContents;
            return function(scope, iElement, iAttr) {
                if(!compiledContents) {
                    compiledContents = $compile(contents, transclude);
                }
                compiledContents(scope, function(clone, scope) {
                    iElement.append(clone);
                });
            };
        }
    };
});

 
 
