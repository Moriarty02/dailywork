原帖地址http://www.html-js.com/article/Front-end-sharing%202983
META相关：
1. 添加到主屏后的标题（IOS）
<meta name="apple-mobile-web-app-title" content="标题">
2.启用 WebApp 全屏模式（IOS）
<meta name="apple-mobile-web-app-capable" content="yes" /> 
<meta name="apple-touch-fullscreen" content="yes" /> 
3. 百度禁止转码
<meta http-equiv="Cache-Control" content="no-siteapp" />
4. 设置状态栏的背景颜色（IOS）


开启电话功能
<a href="tel:123456">123456</a>
开启短信功能
<a href="sms:123456">123456</a>







一个比较完整viewport模板
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport">
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<meta content="telephone=no" name="format-detection">
<meta content="email=no" name="format-detection">
<title>标题</title>
<link rel="stylesheet" href="index.css">
</head>
<body>
这里开始内容
</body>
</html>