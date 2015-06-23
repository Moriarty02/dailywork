//2015年6月17日19:27:24
/*
奇舞团作业-第5期-判断是否是数组
题目： 实现一段代码，判断一个变量是否是数组？-登陆：http://code.w3ctech.com/
-在此页面中点击新建提交作业
-注意**作业标题为“奇舞团作业-第5期-判断是否是数组 ”
出题人：月影大大
 */

//波波老师分享，判断是否支持ES5的Array.isArray()
function isArray(arr) {
        if (!typeof Array.isArray === 'function') {
            return Array.isArray(arr);
        } else {
            //我就喜欢这样
            return Object.prototype.toString.call(arr).slice(8, -1) === 'Array';

        }

    }
    //今天群里另外一位同学提到的
    //如何只用两个参数实现，交换值



Array.isArray = Array.isArray || function() {
        return Object.prototype.toString.call(arr).slice(8, -1) === 'Array';
    }
    //今天群里另外一位同学提到的
    //如何只用两个参数实现，交换值
    //

