/**
 * Created by league on 3/16/15.
 */

$(function(){
   // All this is delayed until DOM is ready.
    console.log("DOM is ready.");

    var vowels = ["a", "e", "i", "o", "u"];
    $(vowels).each(function(i,v) {
        $(vowels).each(function(j,w) {
//            console.log(v,w);
            $("#commonNames").append("<option value='" + v + w + "'>");
        });
    });

    $("#fetchButton").click(function(){
        $.getJSON("http://cs120.liucs.net/assn4/messages.json", "", function(data, status, xhr) {
            console.log("SUCCESS!", data);
            $("#messageStatus").html("You have " + data.length + " messages");
            $("#messageList").empty();
            $(data).each(function(i,message) {
               $("#messageList").append("<li>" + message.text + "(" +
                          message.sender + ")</li>");
            });
        })
    });

});

console.log("Is DOM ready?");
