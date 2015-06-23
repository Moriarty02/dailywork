<<<<<<< HEAD
//时间2015年6月18日18:22:30 
/*
奇舞团作业-第6期-最大奇数和最小偶数
题目： 实现一个函数，找出一个整数数组中最大的奇数和最小的偶数，返回它们的和，如果最大奇数和最小偶数其中一个数不存在，返回null。-登陆：http://code.w3ctech.com/
-在此页面中点击新建提交作业
-注意**作业标题为“奇舞团作业-第5期-最大奇数和最小偶数 ”

 */
function  oddAndEevn(arr){
var max,min;
for(var i=0,var length=arr.length;i<length;i++){

	
}

}
=======
//2015年6月18日21:47:17
/*
奇舞团作业-第6期-最大奇数和最小偶数
题目： 实现一个函数，找出一个整数数组中最大的奇数和最小的偶数，
返回它们的和，如果最大奇数和最小偶数其中一个数不存在，返回null。
-登陆：http://code.w3ctech.com/
-在此页面中点击新建提交作业
-注意**作业标题为“奇舞团作业-第5期-最大奇数和最小偶数 ”
出题人：月影大大
 */
//下面这个是错的，提题意理解错了 ，最大奇数不是说最大的是奇数，53 52 1 23 2。。。
//而是52 51 。。。。 51也是满足条件的
//
/*var a = [1, 23, 43, 4, 5, 4, 65, 46, 54, 6]; //65 1 null
var a1 = [2, 343, , 34, 54, 5, 34, 5, 34]; //2 343 345
var a2 = [3, 43, 2, 4, 54, 654, 6, 54]; //654 2 null
var a3 = [211, 312, 32, 14, 145, 5]; //312 5 null

function oddAndEven(arr) {
        var max, min;
        max = min = arr[0];
        for (var i = 0; i < arr.length; i++) {

            if (max < arr[i]) {
                max = arr[i];
            }
            if (min > arr[i]) {
                min = arr[i];
            }

        }
        if (max % 2 == 0 || min % 2 == 1) {
            return null;
        } else {
            return max + min;
        }

    }*/
//作为参考
//从大到小排列

var a = [1, 23, 43, 4, 5, 4, 65, 46, 54, 6];
var a1 = [2, 343, , 34, 54, 5, 34, 5, 34];
var a2 = [3, 43, 2, 4, 54, 654, 6, 54];
var a3 = [211, 312, 32, 14, 145, 5];
var a4 = [2, 4, 10, 6, 8];


function oddAndEven(arr) {
    var oddArr = arr.filter(function(element, index, arr) {
            return (element % 2);
        }).sort(function(a, b) {
            return b - a;
        }),
        evenArr = arr.filter(function(element, index, arr) {
            return (element % 2 == 0);
        }).sort(function(a, b) {
            return a - b;
        });

    if (oddArr.length == 0 || evenArr.length == 0) {
        return null;
    } else {
        return oddArr[0] + evenArr[0];
    }
}

function oddAndEven2(arr) {
    var odd, even;
    arr.forEach(function(item) {
        if (item % 2 == 0) {
            if (even == undefined) even = item;
            even = even <= item ? even : item;
        } else {
            if (odd == undefined) odd = item;
            odd = odd < item ? item : odd;
        }
    });
    if (even == undefined || odd == undefined)
        return null;
    else
        return even + odd;
}


>>>>>>> 81038aa51761498990a0f69e4d86e4a408832ecc
