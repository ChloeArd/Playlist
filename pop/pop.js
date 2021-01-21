let songPop = [
    {"title" : "7 rings", "artist" : "Ariana Grande", "link" : "https://www.youtube.com/watch?v=QYh6mYIJG2Y"}
]

let containerSongs = $("#containerSongs").first();
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
