//JavaScript的四种继承方式
//对象冒充，并没有什么卵用的一种方式
function ClassA(color) {
    this.color = color;
    this.run = function() {
        console.log(this.color);
    }

}

function ClassB(color) {
    this.newMethod = ClassA; //  这里进行对象冒充
    this.newMethod(color); //调用冒充的对象方法
    delete this.newMethod; //删除方法，可以多个调用，但是如果存在ClassXX中有同名的方法，因为后者的优先级比较高，所以会使得前者的方法被覆盖

}
//call
function sayColor(str1, str2) {
    console.log(str1 + this.color + str2);

}
function ClassC(sColor,sName){
	sayColor.call(this,"demo1","demo2");//call
	sayColor.apply(this,["demo1","demo2"]);//apply

}
