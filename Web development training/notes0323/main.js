/**
 * Created by league on 3/23/15.
 */

$(function(){
    var numTicks = 0;
    console.log("Document is ready to go.");
    window.setInterval(function(){
        numTicks++;
        console.log("TICK: " + numTicks);
    }, 2000);

    $("#pushme").click(function(){
        $.getJSON("http://cs120.liucs.net/assn4/messages.json", // URL
                  null,
                  function(data, status, xhr){
                      console.log(data);
                  })
        console.log("THANKS");
    });

    $("#postmesg").click(function(){
        var username = $("#username").val();
        $.post('http://cs120.liucs.net/assn4/messages.json',
                JSON.stringify({sender:username,text:"Tick is "+numTicks}),
            function() {
                console.log("SUCCESS!");
            });
    });

});

