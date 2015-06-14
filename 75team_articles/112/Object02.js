var name = "Pomy";

function Per() {
	this.name="alpha";
    console.log("Hello " + this.name);
}
var per1 = new Per(); //"Hello undefined"
var per2 = Per(); //"Hello Pomy",不使用new 会覆盖掉全局的this指针
//**ES5提供了hasOwnProperty()和isPropertyOf()方法来反应原型对象和实例之间的关系
//
//
//constructor比较重要的概念 重置constructor的指向问题
//比如
console.log('-------------------------------------------');

function person(name) {
    this.name = name;
}
person.prototype = {
    constructor: person, //这是后面加上去的，主要就是在说在使用了prototype之后，对象构造函数会指向object
    hello: function() {
        console.log(this.name);

    }
}
var zxh = new person("zxh");
console.log(zxh instanceof person); //true
console.log(zxh.constructor === person); //false
console.log(zxh.constructor === Object); //true
///
///
///
///
///
///
console.log('-------------------------------------------');
//原型显示继承
var book1 = {
    name: '我在写代码',
    getname: function() {
        console.log(this.name)
    }

}
var book2 = Object.create(book1, {
    name: {
        configurable: true,
        value: '我再写第二个代码',
        enumrable: true,
    }

});
book1.getname();
book2.getname();
console.log(book1.hasOwnProperty('getname'));
console.log(book1.isPrototypeOf('book2'));
console.log(book2.hasOwnProperty('getname'));
