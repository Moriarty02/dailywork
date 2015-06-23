//汤姆大叔博客
//2015年6月21日22:00:40
var a = {
    x: 10,
    calculate: function(z) {
        return this.x + this.y + z
    }

}
var b = {
    y: 20,
    __proto__: a
}
var c = {
    y: 30,
    __proto__: a
}
b.calculate(0);
c.calculate(0);
//step2
//构造函数
function foo(y) {
    this.y = y;
}
foo.prototype.x = 111;
foo.prototype.calculate = function(z) {
    return this.x + this.y + z;
}
var b1 = new foo(222);
var c2 = new foo(333);
