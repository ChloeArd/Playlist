let songPop = [
    {"title" : "7 rings", "artist" : "Ariana Grande", "link" : "https://www.youtube.com/watch?v=QYh6mYIJG2Y"},
    {"title" : "On verra bien", "artist" : "Amir", "link" : "https://www.youtube.com/watch?v=XRi1lhm6qAQ"},
]
let containerVideos = $("#video");
let containerSongs = $("#containerSongs").first();
let nbClick = 0;
containerSongs.append(
    "<div class=\"ligne\"></div>" +
    "<div class='songs'>" +
    "<p class='title'>" + songPop[0].title + "</p>" +
    "<p class='artist'>" + songPop[0].artist + "</p>" +
    "<a class='link' id='link1' href=''> Clique </a>" +
    "<button id='play1' class='play'> Play </button>" +
    "</div>"
);

$("#link1").attr("href", songPop[0].link);
$("#play1").click(function (){
    if(nbClick < 1){
        containerVideos.append("<iframe id='ariana' width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/QYh6mYIJG2Y\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n");
        nbClick++;
    }
    else {
        $("#ariana").css("display", "none");
        nbClick = 0;
    }
})
