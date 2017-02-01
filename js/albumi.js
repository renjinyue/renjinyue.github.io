window.onload = function() {
    waterfall('main', 'box');
    var allBox = document.getElementsByTagName('img');
    for (var i = 0; i < allBox.length; i++) {
        setImg(allBox[i]);
    }
    window.onscroll = function() {
        if (checkScroolSlide()) {
            if (checkImg) {
                addPic();
                waterfall('main', 'box');
            }
        }
    }
}

function setImg(obj) {
    obj.onclick = function() {
        // window.open("../html/show.html",'','',"aaa");
    }
}

function waterfall(parent, box) {
    var boxArr = document.getElementsByClassName(box);
    var boxWidth = boxArr[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / boxWidth);
    var oParent = document.getElementById(parent);
    oParent.style.cssText = 'width:' + boxWidth * cols + 'px;';
    var heightArr = [];
    for (var i = 0; i < boxArr.length; i++) {
        if (i < cols) {
            heightArr.push(boxArr[i].offsetHeight);
        } else {
            var minHeight = Math.min.apply(null, heightArr);
            var index = getMinHeightIndex(heightArr, minHeight);
            boxArr[i].style.position = 'absolute';
            boxArr[i].style.top = minHeight + 'px';
            boxArr[i].style.left = boxWidth * index + 'px';
            heightArr[index] += boxArr[i].offsetHeight;
        }
    }
}

function getMinHeightIndex(arr, val) {
    for (var i in arr) {
        if (arr[i] == val) {
            return i;
        }
    }
}

function checkScroolSlide() {
    var oBoxs = document.getElementsByClassName('box');
    var lastBoxH = oBoxs[oBoxs.length - 1].offsetTop + Math.floor(oBoxs[oBoxs.length - 1].offsetHeight / 2);
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.body.clientHeight || document.documentElement.clientHeight;
    return (lastBoxH < scrollTop + height) ? true : false;
}
var checkImg = true;

function addPic() {
    if (checkImg) {
        var oParent = document.getElementById('main');
        var oBox = document.createElement('div');
        oBox.className = 'box';
        oParent.appendChild(oBox);
        var oPic = document.createElement('div');
        oPic.className = 'pic';
        oBox.appendChild(oPic);
        var oBoxs = document.getElementsByClassName('box');
        var imgNum = oBoxs.length + 1;
        var oImg = document.createElement('img');
        oImg.src = "../image/album" + document.body.id + "/album" + document.body.id + "_" + imgNum + ".jpg";
        oPic.appendChild(oImg);
        setImg(oImg);
        oImg.onerror = function() {
            checkImg = false;
            oImg.src = "../image/album" + document.body.id + "/album" + document.body.id + "_1.jpg";
        }
    }
}