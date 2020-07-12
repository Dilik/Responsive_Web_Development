/**
 * Created by league on 3/2/15.
 */

var showMe = function() {
    var name= document.getElementById("name").value;
    var food = document.getElementsByName("food")[0].value;
    document.getElementById("output").innerHTML =
        "Hello, " + name  + " I like " + food;
}

var goto = function(choice) {
    console.log("You chose", choice);
    var output = document.getElementById("output");
    var myNavs = document.getElementById("myNavs");
    //output.innerHTML = "You chose " + choice;
    switch(choice) {
        case 0:
            output.innerHTML = "Waffles are fun.";
            break;
        case 1:
            document.getElementById("myphoto").src = "newfile.png";
            output.innerHTML = "I like chicken.";
            myNavs.children[1].setAttribute("class", "active");
            myNavs.children[0].setAttribute("class", "");
            break;
        case 2:
            output.innerHTML = "Programming is fun.";
            break;
    }
}