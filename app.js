let containerMusics = $("#musics");

$("#createPlaylist").click(function () {
    let namePlaylist = prompt("Nom de t'as playlist ?");
    let urlImage = prompt("Insère un lien d'une image");

    containerMusics.append(
        "<div class='playlists' href=''>" +
    "<img class='imageProj' src='"+ urlImage +"'>" +
        "<button class='playPlaylist'>" + namePlaylist + "</button></div>"
    );
})