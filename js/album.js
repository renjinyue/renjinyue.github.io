window.onload = function() {
    var album = document.getElementsByClassName('album');
    for (var i = 0; i < album.length; i++) {
        album[i].onclick = function() {
            window.location.href = "../html/album" + this.id + ".html";
        }
    }
}