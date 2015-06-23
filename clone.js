//2015年6月20日13:46:34
//实现⼀一个函数，针对给定的数组，返回它的拷⻉贝
function toclone(arr) {
    var a = [];
    for (var i = 0, len = arr.length; i++) {
        a[i] = arr[i];
    }
    console.log(a)
}
var demo = [1, 2, 3, 4, 5, 6, 7];
toclone(demo);

function a(val, fn) {
    setTimeout(function() {
        console.log("finish!");
        fn();
    }, 1000)
}

function test(fn, val) {
	var stTime = Date.now();
    fn.call(this, val, function() {
    	console.log(Date.now() - stTime);
    });
}
for (var i = 10000 - 1; i >= 0; i--) {
	var s = i;
}