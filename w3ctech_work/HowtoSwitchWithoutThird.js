//今天群里另外一位同学提到的
    //如何只用两个参数实现，交换值
    //
var way1 = function() {
    var a = 10,
        b = 2;
    a = a + b;
    b = a - b;
    a = a - b;
    alert(a + " " + b);
};

var way2 = function() {
    var a = 10,
        b = 2;
    a = a ^ b;
    b = b ^ a;
    a = a ^ b;
    alert(a + " " + b);
}

var way3 = function() {
    var a = 10,
        b = 2;
    a = [a, b];
    b = a[0];
    a = a[1];
    alert(a + " " + b)
};
//简化一下：
var way4 = function() {
    var a = 10,
        b = 2;
    a = [b, b = a][0];
    alert(a + " " + b)
);

var way5 = function() {
    var a = 10,
        b = 2;
    a = {
        a: b,
        b: a
    };
    b = a.b;
    a = a.a;
    alert(a + " " + b);
};

var way6 = function() {
    var a = 10,
        b = 2;
    a = (function() {
        try {
            return b;
        } finally {
            b = a;
        }
    })();
    alert(a + " " + b);
};

var way7 = function() {
    var a = 10,
        b = 2;
    eval("a=" + b + ";b=" + a);
    alert(a + " " + b);
};

var way8 = function() {
    var a = 10,
        b = 2;
    a = b + (b = a) * 0;
    alert(a + " " + b)
};