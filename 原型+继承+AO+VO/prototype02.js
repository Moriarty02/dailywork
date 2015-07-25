window.onload = function() {
    //test
}

function Foo() {
    this.value = "demo";
}
Foo.prototype = {
    method: function() {
        alert(this.value)
    }

}

function Bar() {}
Bar.prototype = new Foo();
Bar.prototype.foo = "hello  demo";
//Bar.prototype.constructor = Bar;
var test = new Bar();
test.value = "sssssssssssssssssssss";
var second = new Bar();
console.log(test.value + " " + second.value);
