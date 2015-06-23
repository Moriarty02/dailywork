//异步处理模式
var promise = function() {
    //code
}
promise.prototype.then = function(onResolved, onRejected) {
    //code
}
promise.prototype.resolve = function(value) {
    //code

}
promise.prototype.reject = function(error) {

    }
    //上面是promise架子，下面开始实践
function searchTwitter(term) {
    var url, xhr, promise, result;
    url = 'http://search.twitter.com/search.json?rpp=100&q=' + term;
    promise = new promise();
    xhr = new XmlHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function(e) {
        if (this.status == 200) {
            result = JSON.parse(this.responseText);
            promise.resolve(result);
        }

    }
    xhr.onerror = function(e) {
        promise.reject(e);

    }
    xhr.send();
    return promise;

}

function loadTweets() {
    var container = document.getElementById("countainer");
    searchTwitter("#IE10").then(function(data) {
        data.result.forEach(function(tweet) {
            var el = document.createElement("li");
            el.innerText = tweet.text;
            container.appendChild(el);
        })

    }, handError);


}
