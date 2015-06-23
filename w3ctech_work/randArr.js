// 2015年6月19日16:51:13
/*
奇舞团作业-第7期-随机打乱顺序（暑假之前最后一次作业）
题目： 实现一个函数，将一个有序的数组完全随机打乱顺序
-登陆：http://code.w3ctech.com/
-在此页面中点击新建提交作业
-注意**作业标题为“奇舞团作业-第7期-随机打乱顺序 ”
 */
function randomItem(arr) {
    if (Object.prototype.toString.call(arr) == '[object Array]') {
        return false;
    }
    var len = arr.length;
    var temp;
    var tempindex;
    for (var i = 0; i < arr.length; i++) {
        tempindex = Math.floor(Math.random() * i);
        temp = arr[i];
        arr[i] = arr[tempindex];
        arr[tempindex] = temp;
    }
    return arr;
}

function randomItem2(arr) {
    if (Object.prototype.toString.call(arr) == '[object Array]') {
        return false;
    }
    return arr.sort(function() {
        return 0.5 - Math.random();
    })
}

function ranomItem3(arr) {
    var temp, random;
    for (var i = 0, len = arr.length; i < len; i++) {
        random = parseInt(Math.random() * len);
        if (random != i) {
            temp = a[i];
            a[i] = a[random];
            a[random] = temp;
        }
    }
    return arr;
}

function EvalFuncTimes(add) {
    var start = console.time("timecounts");


}


function add() {
    console.time("a");
    setTimeout(function() {
        console.log("demo");
        console.timeEnd("a");
    }, 1000);

}
