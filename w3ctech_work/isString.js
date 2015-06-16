function isString(arg) {
	 //return Object.prototype.toString.call(arg)==="[object String]";按到这样更好
    return Object.prototype.toString.call(arg).indexOf("String") !== -1;
    
}
// 附加的，之前的阿里面试题
// 判断函数的参数的类型
function typeofArg(arg){
	return Object.prototype.toString.call(arg).slice(8,-1).toLowerCase();
}
//现在不用输入密码了