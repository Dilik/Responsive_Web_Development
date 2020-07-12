/**
 * Created by Dilmurod on 3/23/2015.
 */
$(function(){

    var numMessages = 0;
    //calling get_data to post data immediately
    get_data();
    //calling initial to update messages every 10 sek
    initial();

    //Bellow mood section will shows mood options from server
    $.getJSON("http://cs120.liucs.net/assn4/moods.json","",function(data,status,xhr) {
        $(data).each(function (i, msg) {
            $('#mood').append("<option value='" + msg + "'>");
        });
    });

    //Post button when clicked post name, message, and mood inputs to the server database
    $('#btn').click(function(){
        $('#name1,#msg,#mood1').each(function(){
            if($(this).val() === ""){
                $(this).val("null");
            }
        });
        var name = $('#name1').val();
        var msg1 = $('#msg').val();
        var mood2 = $('#mood1').val();
        $.post("http://cs120.liucs.net/assn4/messages.json",
            JSON.stringify({sender:name,text:msg1,mood:mood2}),function(){
                $('#msg').val("");
                $('#mood1').val("");
                $('#name1').click(function(){
                    $(this).val("");
                });
                get_data();
            });
    });
    function get_data(){
        data1(0);
    }
    function initial() {
        //window.setInterval(function () {
        //    data1();
        //}, 10000);
    }

    // Simulating infinite scroll down

    $(window).scroll(function(){
            if ($(window).scrollTop() == $(document).height()-$(window).height()){
                data1(numMessages);
            }
        });

    //piece of Data 1 from Data
    function data1(start){
        $.getJSON("http://cs120.liucs.net/assn4/messages.json", "", function (data, status, xhr) {
            var finish = start+10
            console.log("Loading " + start + " ... " + finish)
            for(var i=start; i<finish; i++) {
                $("#msgList").append("<ul>" + "<span class='text-primary'> <b>" + data[i].sender + " </b></span>" + "  " + "<mark>"
                + data[i].mood + "</mark>" + "  " + data[i].timestamp + "<br>" + data[i].text + "<br>" + "</ul>");
            }
            numMessages = finish;
        });
    }

});