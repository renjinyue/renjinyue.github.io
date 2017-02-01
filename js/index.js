window.onload = function() {
	var password = document.getElementById('password');
    var login = document.getElementById('login');
    
    login.onclick = function() {
        if (hash(password.value) == "6gKPw") {
            window.location.href = "html/album.html";
        } else {
        	password.value="";
        }
    }

    login.onmouseover = function(){
        this.style.margin = "30px auto";
    }

    login.onmouseout = function(){
        this.style.margin = "35px auto";
    }
}

function hash(input) {
	var I64BIT_TABLE =
 'DEFShABCvwxyz01VWXYZJijkT345rstuKLMNOUabcGHIPQRdefglmnopq26789_-'.split('');
    var hash = 5381;
    var i = input.length - 1;
    if (typeof input == 'string') {
        for (; i > -1; i--) hash += (hash << 5) + input.charCodeAt(i);
    } else {
        for (; i > -1; i--) hash += (hash << 5) + input[i];
    }
    var value = hash & 0x7FFFFFFF;
    var retValue = '';
    do {
        retValue += I64BIT_TABLE[value & 0x3F];
    }
    while (value >>= 6);
    return retValue;
}