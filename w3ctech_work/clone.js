//2015年6月23日09:09:43
//对象clone
function cloneObj(obj) {
    var result;
    if (!obj || typeof obj != 'object') {
        return obj;
    }

    if (Object.prototype.toString.call(obj) === "[object Array]") {
        result = []
    } else if (Object.prototype.toString.call(obj) === '[object Date]') {//针对date必须单独处理，不然会返回一个空的对象
        result = obj;
    } else {
        result = {};
    }

    for (var item in obj) {
        if (obj.hasOwnProperty(item)) {
            if (typeof obj[item] === 'object') {
                result[item] = cloneObj(obj[item])
            } else {
                result[item] = obj[item];
            }
        }
    }
    return result;
}
var a = [1, new Date(), 3, 4, [1, {
    name: 12,
    func: function() {
        return "demo";
    }
}]];
