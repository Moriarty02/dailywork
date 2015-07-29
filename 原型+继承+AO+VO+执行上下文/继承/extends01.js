//js的继承总共有四种方式
//原型链继承 原型式继承 call apply 
//借用构造函数（类式继承）
/*function Parent(age) {
    this.name = ["alpha",'beta'];
    this.age = age;
}

function Child(age) {
    Parent.call(this, age);
}
var test=new Child(12);
test.name.push("data");
console.log(test.name+" "+test.age);*/
//组合式继承
console.log("-------------------------------------");

/*function Parent(age) {
    this.name = ["alpha"];
    this.age = age;
}
Parent.prototype.run = function() {
    return (this.name + " is runing " + this.age);

}

function Child(age) {
    Parent.call(this, age); //对象冒充，给父类穿参数
}
Child.prototype = new Parent();//原型链继承
var test = new Child(21);
console.log(test.run());*/
// console.log("-------------------------------------");
// 原型式继承 
// 这种继承借助原型并基于已有的对象创建新对象，同时还不用创建自定义类型的方式称为原型式继承 
function makeObj(o) {
    function F() {};
    F.prototype = o;
    return new F();

}

var box = {
    name: "Moriarty",
    arr: ['alpha', 'beta'],
    todo: function() {
        return this.name + " "+this.arr;
        
    }

}
var b1=makeObj(box);
b1.arr.push("dalta");
console.log(b1.todo());
var b2=makeObj(box);
console.log(b2.todo());
//没什么卵用换一个
