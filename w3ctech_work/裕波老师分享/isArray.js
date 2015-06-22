/*
http://www.w3ctech.com/topic/64
 */
function isArray(value) {
    if (typeof Array.isArray === "function") {
        return Array.isArray(value);
    } else {
        return Object.prototype.toString.call(value) === "[object Arrary]";
    }
}
