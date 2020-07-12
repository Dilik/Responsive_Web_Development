/**
 * Created by league on 2/23/15.
 */
var countChars = function() {
    var t = document.getElementById("tweet");
    var mesg = t.value;
    var k = mesg.length;
    var remaining = 140 - k;
    console.log("Remaining: " + remaining);
    var ch = document.getElementById("chars");
    ch.innerHTML = remaining;
    if(remaining < 0) {
        ch.setAttribute("class", "exceeded");
    } else {
        ch.setAttribute("class", "");
    }
}

var clickHandler = function() {
    var p = document.getElementById("greeting");
    var input = document.getElementsByName("username");
    var name = input[0].value;
    //var name = prompt("What is your name?");
    p.innerHTML = "Hello, " + name;
}


