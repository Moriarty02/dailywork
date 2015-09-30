"use strict";

function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        var image = new Image();

        image.onload = function() {
            resolve(image);
            console.log("加载完成图片");

        };

        image.onerror = function() {
            reject(new Error('Could not load image at ' + url));
            console.log("加载完成图片");

        };

        image.src = url;
    });
}

var url = "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2651666712,3423349209&fm=116&gp=0.jpg";
loadImageAsync(url);
