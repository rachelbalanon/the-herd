"use strict";

function heartColor() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $element 
            .on("click", (event) => {
                document.querySelector(".fa-heart").style.color = "red"; 
            })
        }

    }
}

    angular 
    .module("App")
    .directive("heartColor", heartColor)
