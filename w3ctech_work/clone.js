//2015年6月20日16:24:52
function clone(arr) {
    var temp = [];
    for (var i = 0,
             len = arr.length; i < len; i++) {
        temp[i] = arr[i];
    }
    console.log(temp)

}
var a=[9,12,2,[2,1], , ,null ,undefined, 3,21,432];
clone(a);
