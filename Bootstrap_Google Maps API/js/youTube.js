var player;
function onYouTubePlayerAPIReady() {
    player = new YT.player('video', {
        events: {
            'onReady': onPlayerReady
        }
    });
}
function onPlayerReady(event){
    document.id("stop").addEvent('click', function() {
        player.stopVideo();
    });
}
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
