window.onload = function() {
    //测试函数
    var a = new Calculator();
    console.log(a.add(1, 4));
}

var Calculator = function(decimal, tax) {
        this.decimal = decimal;
        this.tax = tax;

    }
    //第一种方式
/*Calculator.prototype = {
        add: function(a, b) {
            return a + b
        },
        subtract: function(a, b) {
            return a - b;
        }

    }*/
    //第二种方式比较科学的一种

Calculator.prototype = function() {
    add = function(x, y) {
            return x + y;
        },
        subtract = function(x, y) {
            return x - y;
        }
    return {
        add: add,
        subtract: subtract

    }


}();
