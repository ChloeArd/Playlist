let songPop = [
    {"title" : "7 rings", "artist" : "Ariana Grande", "link" : "https://www.youtube.com/watch?v=QYh6mYIJG2Y"},
    {"title" : "On verra bien", "artist" : "Amir", "link" : "https://www.youtube.com/watch?v=XRi1lhm6qAQ"},
    {"title" : "Beau-papa", "artist" : "Vianney", "link" : "https://www.youtube.com/watch?v=8yOuNrT0dOw"},

]
let containerVideos = $("#video");
let containerSongs = $("#containerSongs").first();
let nbClick = 0;
for (let i = 0; i < songPop.length; i++){
    containerSongs.append(
        "<div class=\"ligne\"></div>" +
        "<div class='songs'>" +
        "<p class='title'>" + songPop[i].title + "</p>" +
        "<p class='artist'>" + songPop[i].artist + "</p>" +
        "<a class='link' id='link"+[i] + "' href=''> Clique </a>" +
        "<button id='play"+[i] + "' class='play'> Play </button>" +
        "</div>"
    );
}

video(0,"<iframe id='ariana' width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/QYh6mYIJG2Y\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n", "#ariana");
video(1,"<iframe id='amir' width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/XRi1lhm6qAQ\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>", "#amir");
video(2,"<iframe id='vianney' width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/8yOuNrT0dOw\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>", "#vianney");

function video (i, videolink, id){
    $("#link" + [i]).attr("href", songPop[i].link);
    $("#play" + [i]).click(function (){
        if(nbClick < 1){
            containerVideos.append(videolink);
            nbClick++;
        }
        else {
            $(id).css("display", "none");
            nbClick = 0;
        }
    })
}