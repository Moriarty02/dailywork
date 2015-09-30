//非常慢的耗时操作
var x = 0
self.onmessage = function(e) {
    for (i = 0; i < 1000000000; i++) {
        x = i + x;
    }
    self.postMessage(x);
};
