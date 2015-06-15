var str = "我是一个好孩子";
//第一种方法，调用Array的逆序方法
function reverseString(str) {
        // return str.split("").reverse().join(""); 这样更好
        return Array.prototype.reverse.call(str.split("")).join("");
    }
    //第二种，算法来
function reverseString2(str) {
        //字符串不能赋值
        var arr = str.split("");

        for (var i = 0; i <= arr.length / 2; i++) {
            temp = arr[i];
            arr[i] = arr[arr.length - i - 1];
            arr[arr.length - i - 1] = temp;

        }
        arr = arr.join("");
        return arr;
    }
    //第三种正则玩
function reverseString3(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "").split("").reverse().join("");
}
//第四种 来自月影大大的分享
var stringReverse = function(str){
  return [str, 'split', 'reverse', 'join'].reduce(function(p, c){return p[c]('')});
}
