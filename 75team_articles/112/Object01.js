/*
 JavaScript面向对象精要(一)
 http://www.ido321.com/1585.html
 */
//原始类型：保存一些简单数据，如true，5等。JavaScript共有5中原始类型： 
// boolean：布尔，值为true或false
// number：数字，值为任何整型会浮点数值
// string：字符串，值为由单引号或双引号括出的单个字符或连续字符（JavaScript不区分字符类型）
// null：空类型，其仅有一个值：nulll
// undefined：未定义，其仅有一个值：undefined
// 
// 
// 引用类型：保存为对象，实质是指向内存位置的引用，所以不在变量中保存对象。除了自定义的对象，JavaScript提供了6中内建类型：
/*Array：数组类型，以数字为索引的一组值的有序列表
Date：日期和时间类型
Error：运行期错误类型
Function：函数类型
Object：通用对象类型
RegExp：正则表达式类型 */
/*
console.log("21" === 21);  //false
console.log("21" == 21);  //true
console.log(undefined == null);  //true
console.log(undefined === null);  //false
 */
//////////////////////////////////
/*

字符串对象的引用在用完之后立即被销毁，所以不能给字符串添加属性，并且instanceof检测对应类型时均返回false：

var name = "Pomy";
name.age = 21;
console.log(name.age);   //undefined
console.log(name instanceof String);  //false
 */
//arguments.length返回实参列表的长度，arguments.callee.length返回形参列表的长度。
////检测属性是否存在时，有另外的两种方式：in和hasOwnProperty()，前者会检测原型属性和自有(实例)属性，后者只检测自有(实例)属性
