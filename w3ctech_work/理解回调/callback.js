//如理js异步编程的四种方法
//回调函数  事件监听  观察者模式（订阅发布模式） promise
//begin 
// 回调函数
// 采用这种方式，我们把同步操作变成了异步操作，f1不会堵塞程序运行，
// 相当于先执行程序的主要逻辑，将耗时的操作推迟执行。
//　回调函数的优点是简单、容易理解和部署，缺点是不利于代码的阅读和维护，
//　程序的流程会很混乱，而且每个任务只能指定一个回调函数
function f1(callback) {
    setTimeout(function() {
        callback();
    }, 0)
}

function f2() {
        //code
    }
    //事件监听
    //f1.trigger('done')表示，执行完成后，立即触发done事件，从而开始执行f2。
    　　 //这种方法的优点是比较容易理解，可以绑定多个事件，每个事件可以指定多个回调函数。
    //缺点是整个程序都要变成事件驱动型，运行流程会变得很不清晰。
function f3() {
    setTimeout(function() {
        f3.trigger("done");
    }, 0)
}
f3.on("done", f2);
// 订阅发布模式
// 这种方法的性质与"事件监听"类似，但是明显优于后者。因为我们可以通过查看"消息中心"，了解存在多少信号、每个信号有多少订阅者，从而监控程序的运行
jQuery.subscribe("done", f2);

function f1() {　　
    setTimeout(function() {　　　　 // f1的任务代码
        　　　　
        jQuery.publish("done");　　
    }, 1000);
}
jQuery.unsubscribe("done", f2); 
//Promise对象
//这样写的优点在于，回调函数变成了链式写法，程序的流程可以看得
//很清楚，而且有一整套的配套方法，可以实现许多强大的功能
//而且，它还有一个前面三种方法都没有的好处：如果一个任务已经完成，再添加回调函数，该回调函数会立即执行。所以，
//你不用担心是否错过了某个事件或信号。这种方法的缺点就是编写和理解，都相对比较难。
f1().then(f2); 
function f1(){
　　var dfd = $.Deferred();
　　setTimeout(function () {
　　　　// f1的任务代码
　　　　dfd.resolve();
　　}, 500);
　　return dfd.promise;
} 
