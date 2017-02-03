window.onload = function() {
    var src = window.location.search;
    var oSrc = src.split("?");
    var oImg = document.getElementById('img');
    oImg.src = oSrc[1];
    var download = document.getElementById('download');
    var filePath = oSrc[1].split("/");
    var fileName = filePath[filePath.length - 1];
    download.href = oSrc[1];
    download.download = fileName;
}