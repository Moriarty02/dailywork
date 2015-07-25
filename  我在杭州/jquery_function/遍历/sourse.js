//怎样才叫熟悉jquery
//这部分为熟悉遍历的各个方法
(function testeq() {
    //寻找index,可以为负数（即倒数）
    $('body').find('.container div').eq(2).css('background', 'red');
})();
//filter方法，从以后的数组中拿出过滤之后的数组
(function testfilter() {
    //$('body').find('.section1 div').css('background','blue').filter('.demo').css('background','yellow');
    //写成回调
    $(".section1 div").css("background", "#b4b0da")
        .filter(function(index) {
            return index == 1 || $(this).attr("class") == "demo";
        })
        .css("border", "3px double red");
})();
//first返回dom的第一个元素
//$('li').first().css('background-color', 'red');
//.has(selector) .has(contained) 筛选匹配元素集合中的那些有相匹配的选择器或DOM元素的后代元素。
(function testhas() {
    $('.section2 li').has('ul').css('background', 'red');

})();
//.map(callback(index,domElement))通过callback匹配当前的数组或者对象，
//由于返回值是一个jQuery包裹的数组，所以通常会使用get()方法将其转换成普通的数组
(function testmap() {
    $(".section3 p").append($("input").map(function() {
        return $(this).val();
    }).get().join(", "));

})();
