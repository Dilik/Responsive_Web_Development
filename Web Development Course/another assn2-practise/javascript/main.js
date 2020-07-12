/**
 * Created by Dilmurod on 2/25/2015.
 */
/**console.log("welcome to my web site")
console.log("Area of Circle")
var pi=3.14159;
var r=5;
var Area=pi*r*r;
console.log(Area);
*/
var countChar = function () {
    var t = document.getElementById("tweet");
    var message = t.value;
    var l = message.length;
    var remaining = 140 - l;
    console.log("remaining : " + remaining);
    var ch = document.getElementById("chars");
    ch.innerHTML = remaining;
    if(remaining < 0){
        ch.setAttribute("class","exceeded");
    } else{
        ch.setAttribute("class","");
    }


} 
var clickHandler = function() {
    console.log('External File')
    var p = document.getElementById("welcome")
    var input = document.getElementsByName("username");
    var name = input[0].value;
    p.innerHTML = "Welcome to my page " + name;

}

// JQuery


//var date = new Date();
//var currDate = null;
//do{currDate = new Date()}
//while(currDate-date < 2000)

