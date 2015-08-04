//奇舞团作业-第1期-找出数组中第二大的数
//
//
var arr = [4, 1, 43, 5, 45, 765, 7, 687, 98, 5];
//第一种方式（不排序）
function findSecondMax(arr) {
    var max = arr[0];
    var secondMax;
    for (var i = 0; i < arr.length; i++) {

        if (max < arr[i]) {
            secondMax = max;
            max = arr[i];
        } else {
            if (secondMax < arr[i]) {
                secondMax = arr[i];
            }

        }
    }
    return secondMax;
}
findSecondMax2(arr);

//第二种方式
function findSecondMax2(arr) {
    var test = [];
    if (!Array.isArray(arr) || arr.length == 0)
        return false;
    if (arr.length == 1) {
        return arr[0];
    }
    //先查重
    for (var i = 0; i < arr.length; i++) {
        if (test.indexOf(arr[i]) == -1) {
            test.push(arr[i]);
        }

    }
    return test.sort(function(x, y) {
        return y - x;
    })[1];

}
