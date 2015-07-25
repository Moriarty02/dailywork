window.onload = function() {
    //测试代码
    var a = new Calculator();
    console.log(a.add(1, 2));
    console.log(a.decimal)
}

var baseCalculator = function() {
    this.decimal = 2
};
baseCalculator.prototype.add = function(x, y) {
    return x + y;
}
baseCalculator.prototype.subtract = function(x, y) {
    return x - y;
}
var Calculator = function() {
    this.tax = 333;
}
Calculator.prototype = new baseCalculator();
Calculator.prototype=baseCalculator.prototype;//这样就访问不到baseCalculator的属性得此decimal

