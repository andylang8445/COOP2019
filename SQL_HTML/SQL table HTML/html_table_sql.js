function myFunction() {
    alert("I am an alert box!");
}

// Function to create the cookie 
function setCookie_1() {
    var d = new Date();
    d.setTime(d.getTime() + (10 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "cookie=1;" + expires + ";path=/";
    alert("setCookie_1 activated!");
    location.reload();
}

// Function to create the cookie 
function setCookie_2() {
    var d = new Date();
    d.setTime(d.getTime() + (10 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "cookie=2;" + expires + ";path=/";
}

// Function to create the cookie 
function setCookie_3() {
    var d = new Date();
    d.setTime(d.getTime() + (10 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "cookie=3;" + expires + ";path=/";
}

// Function to create the cookie 
function setCookie_4() {
    var d = new Date();
    d.setTime(d.getTime() + (10 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "cookie=4;" + expires + ";path=/";
}
