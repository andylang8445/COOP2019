function reload_page(){
    document.location.reload();
}

function return_val() {
    // var hw.addEventListener('hw',function(){
    //document.writeln('hello world');

    var text_val = document.getElementById('text').value;

    //var link = document.getElementById('bg_address').value;
    //document.getElementById('bg').$xlink=link;
    //})
    //document.location.reload();
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
    if (user != "") {//cookie exist
        alert("Cookie loaded!");
        toggle_hide_input();
        var text_val = user;
        document.getElementById("content").innerHTML = text_val;
        var myButton = document.getElementById("text"); //searches for and detects the input element from the 'myButton' id
        make_counter_work()
        myButton.value = user; //changes the value
    } else {//no cookie found
        toggle_hide_counter();
        var text_val = document.getElementById('text').value;
        user = text_val;
        if (user != "" && user != null) {
            setCookie("userinput", user, 10);
        }
    }
}



function toggle_hide_input() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggle_hide_counter() {
    var x = document.getElementById("clock");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function make_counter_work() {
    var timeleft = 10;
    var downloadTimer = setInterval(function(){
      document.getElementById("countdown").innerHTML = "Cookie will expire in "+timeleft + " seconds";
      timeleft -= 1;
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Cookie Expired"
      }
    }, 1000);
}
