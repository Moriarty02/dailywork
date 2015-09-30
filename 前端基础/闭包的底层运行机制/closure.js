"use strict";
var myclosure = (function outerFunction() {
    var hidden = 0;
    return {
        innerFunction: function() {
            return hidden++;
        }
    }
})();

myclosure.innerFunction();
