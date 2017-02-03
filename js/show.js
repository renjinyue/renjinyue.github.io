window.onload = function() {
    var src = window.location.search;
    var oSrc = src.split("?");
    var oImg = document.getElementById('img');
    oImg.src = oSrc[1];
    var download = document.getElementById('download');
    download.download = oSrc[1];
}