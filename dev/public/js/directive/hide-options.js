"use strict";

function hideOptions($timeout) {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $timeout(function() {
                $scope.$apply(function() {
                    $element
                    .on("click", (event) => {
                        const selectedOption = event.target.src;
                        const allOptions = event.target.parentElement.children;
                        let i;
                        for (i = 0; i < allOptions.length; i++) {
                            if (allOptions[i].src === selectedOption) {
                                allOptions[i].hidden = false;
                            } else {
                            allOptions[i].hidden = true;
                            }
                        }
                        
                })
            
            })}, 1600);
        }
    };
}

angular
.module("App")
.directive("hideOptions", hideOptions);
