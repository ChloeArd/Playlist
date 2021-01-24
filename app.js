let containerMusics = $("#musics");
let containerSongs = $("#containerSongs").first()
let containerVideos = $("#video");
let index = 0;
let nbClick = 0;

$("#createPlaylist").click(function () {
    $("#containerCreatePlaylist").css("display", "flex");
})

$("#enter1").click(function () {
    let namePlaylist = $("#name").val();
    let urlImage = $("#urlImage").val();
    index++;
    containerMusics.append(
        "<div class='playlists'>" +
            "<img class='imageProj' src='"+ urlImage +"'>" +
            "<button class='playPlaylist' id='playlist" + index + "'>" + namePlaylist + "</button></div>"
    );
    setTimeout(function () {
        $("#containerCreatePlaylist").css("display", "none");
    }, 1000)

    $("#playlist" + index).click(function () {
        let title = prompt("Titre de t'as musique ?");
        let artist = prompt("Nom de ton artiste ?");
        let urlLink = prompt("Lien YouTube de t'as musique");

        containerSongs.append(
            "<div class=\"ligne\"></div>" +
            "<div class='songs'>" +
            "<p class='title'>" + title + "</p>" +
            "<p class='artist'>" + artist + "</p>" +
            "<a class='link' id='link" + index +"' href=''> Clique </a>" +
            "<button class='play' id='play" + index + "'> Play </button>" +
            "</div>"
        );
        $("#link" + index).attr("href", urlLink);

        $("#play" + index).click(function (){
            let videoLink = prompt("Copie le code d'intégration de la video (clique droit sur la video) sur YouTube '<iframe></iframe>'  ?");
            containerVideos.append(videoLink);
        })
    });
});

