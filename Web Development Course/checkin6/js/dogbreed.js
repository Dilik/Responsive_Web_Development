/**
 * Created by Dilmurod on 2/27/2015.
 */

var result = function() {
    var name_input = document.getElementsByName("name")[0].value;
    var result = document.getElementById("result");

    var s = document.getElementsByName('values')[0];
    var text = s.options[s.selectedIndex].text;
    result.innerHTML = "Pleased to meet you, " + name_input + ". I also like " + text;
};