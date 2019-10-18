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
        //alert("Cookie loaded!");
        toggle_hide_input();
        var text_val = user;
        document.getElementById("content").innerHTML = text_val;
        var myButton = document.getElementById("text"); //searches for and detects the input element from the 'myButton' id
        toggle_toggle_button();
        make_counter_work();
        myButton.value = user; //changes the value
        getActive.then(removeCookie);
    } else {//no cookie found
        //alert("Cookie not loaded!");
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
    var x = document.getElementById("countdown");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggle_toggle_button() {
    var x = document.getElementById("toggle_button");
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
        document.getElementById("countdown").innerHTML = "Cookie Expired";
        toggle_toggle_button();
          
      }
    }, 1000);
}


htmlToImage.toJpeg(document.getElementById('my-node'), { quality: 0.95 })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'my-image-name.jpeg';
    link.href = dataUrl;
    link.click();
  });



function onRemoved(cookie) {
  console.log(`Removed: ${cookie}`);
}

function onError(error) {
  console.log(`Error removing cookie: ${error}`);
}

function removeCookie(tabs) {
  var removing = browser.cookies.remove({
    url: tabs[0].url,
    name: "userinput"
  });
  removing.then(onRemoved, onError);
}
var getActive = browser.tabs.query({active: true, currentWindow: true});