//题目：编写一个JavaScript函数，判断一个整数是否是素数，如果是，返回true，否则，返回false。

function isPrime(num) {

    if (!(Object.prototype.toString.call(num) == "[object Number]"))
        return "非法输入";
    if (num === 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
