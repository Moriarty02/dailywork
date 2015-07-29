//jquery选择器复习
//子代选择器jQuery( "parent > child" )
//$('ul.nav>li').css("border","red").
//祖先ancestor  descendant后裔子代
$('form input').css('border','1px dotted red')
jQuery( "prev + next" )兄弟选择器
$('label + input').css('background','red');//选择label后面的input，只能作为兄弟元素来进行选择
sibling兄弟姐妹
$('#prev~div').css("background","red")//选择#prev后面的所有的div。
//基本筛选
//
//
//因为:animated 是一个 jQuery 延伸出来的选择器，
//并不是的CSS规范的一部分，使用:animated 查询
//不能充分利用原生DOM提供的querySelectorAll() 
//方法来提高性能。为了当使用:animated 的时候
//在现代浏览器上获得更佳的性能，首先使用纯CSS
//选择器选择元素，然后使用.filter(":animated")
//querySelector兼容为IE8+
//
//
//
//因为 :eq()  等有关index的选择器都没办法调用原生的querySelectorAll
//是一个 jQuery 延伸出来的选择器，并不是的C
//SS规范的一部分, 使用:eq()查询不能充分利用原生DOM提供
//的querySelectorAll() 方法来提高性能。为了
//在现代浏览器上获得更佳的性能，请使用$("your-pure-css-selector").eq(index)代替。
//$("td:eq(2)").css("background",'red')
//$("tr:fisrt").css()
//$('td:gt(4)')获取索引比大于4的所有td
//$('td:gt(-4)')获取索引比大于4的所有td从0开始倒数第四个
//jQuery 1.8以前的版本，:gt(index)选择器不接收一个负数的index值。
//
//$("td:lt(4)")  小于同gt
//
//$(":header")选择所有标题元素，像h1, h2, h3 等.
//选择指定语言的所有元素
//<div lang="en-us">red
 // <div>white
  // // <div>and blue</div>
//  </div>
//$( "div:lang(en-us)" ).addClass( "usa" );
//
//$(":last")
//not()过滤掉括号内的的元素 
//$("input:not(:checked) + span").css("background-color", "yellow");
//
//
//jQuery( ":odd" ) 1357
//jQuery( ":even" )0248
//$("tr:even").css("background-color", "#bbbbff");
//
//<div>John Resig</div>
 
/*<div>George Martin</div>
<div>Malcom John Sinclair</div>
<div>J. Ohn</div>*/
//$("div:contains('John')").css("text-decoration", "underline");
//
//<table border="1">
   /* <tr><td>TD #0</td><td></td></tr>
    <tr><td>TD #2</td><td></td></tr>
 
    <tr><td></td><td>TD#5</td></tr>
  </table>
<script>$("td:empty").text("Was empty!").css('background', 'rgb(255,220,200)');</script>
 
*/
//如果表达式 $('div:has(p)') 匹配一个 <div>，那么应有一个<p>存在于 
//<div> 后代元素中的任何地方，不是直接的子元素也可以
//$("div:has(p)").css("bakcground","red");
//隐藏一个元素，opacity ,visibility:hidden ,display:none, height:0,overflow:hidden
//opacity ,visibility:hidden不会影响到布局
//
//
/* <a href="example.html" hreflang="en">Some text</a> 
 
  <a href="example.html" hreflang="en-UK">Some other text</a>
 
  <a href="example.html" hreflang="english">will not be outlined</a>
 
<script>
$('a[hreflang|="en"]').css('border','3px dotted green');
</script>*/

//.removeAttr() 方法使用原生的 JavaScript removeAttribute() 函数,但是它的优点是可以直接在一个 jQuery 对象上调用该方法，并且它解决了跨浏览器的属性名不同的问题。

/*注意: Internet Explorer 6， 7 ，或8中，使用.removeAttr()
删除一个内联onclick 事件处理程序没有实现，为了避免潜在的问题，
使用 .prop()代替：
$element.prop("onclick", null);
console.log("onclick property: ", $element[0].onclick);
*/

