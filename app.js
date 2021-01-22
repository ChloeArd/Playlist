let containerMusics = $("#musics");
let index = 0;

$("#createPlaylist").click(function () {
    let namePlaylist = prompt("Nom de t'as playlist ?");
    let urlImage = prompt("Insère un lien d'une image");
    index++;
    containerMusics.append(
        "<div class='playlists'>" +
    "<img class='imageProj' src='"+ urlImage +"'>" +
        "<button class='playPlaylist' id='playlist" + index + "'>" + namePlaylist + "</button></div>"
    );
})