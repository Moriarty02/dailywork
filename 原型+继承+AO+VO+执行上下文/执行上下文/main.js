//this这个值在一个继承机制中，仍然是指向它原
//本属于的对象，而不是从原型链上找到它时，它所属于的对象。
//
//每一个object都有一个prototype. 构造函数Foo也拥有自己的__proto__, 也就是Function.prototype,
// 而Function.prototype的__proto__指向了Object.prototype.
function Foo(y) {//Foo.constructor
    this.y = y;
}
Foo.prototype.x = 12;//Foo.prototype
Foo.prototype.calculate = function() {
    return this.x + this.y;
}
var a=new Foo(12);
var b=new Foo(24);
console.log(a.constructor.prototype===Foo)//true
console.log(a.constructor === Foo)//true
console.log(Foo.constructor)

