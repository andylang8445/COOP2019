function return_val() {
    // var hw.addEventListener('hw',function(){
    //document.writeln('hello world');

    var text_val = document.getElementById('text').value;

    var link = document.getElementById('bg_address').value;
    //document.getElementById('bg').$xlink=link;
    //})
    myFunction();
    //document.location.reload();
    checkCookie();
}

function get_val() {
    document.getElementById("content").innerHTML = text_val;
}


function setCookie(cname, cvalue, exsecs) {
    var d = new Date();
    d.setTime(d.getTime() + (exsecs * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("userinput");
    if (user != "") {
        alert("Cookie loaded!");
        var text_val = document.getElementById('text').value;
        document.getElementById("content").innerHTML = text_val;
    } else {
        var text_val = document.getElementById('text').value;
        user = text_val;
        if (user != "" && user != null) {
            setCookie("userinput", user, 10);
        }
    }
}



function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}