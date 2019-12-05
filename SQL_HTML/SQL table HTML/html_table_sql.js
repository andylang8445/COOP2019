function myFunction() {
    alert("I am an alert box!");
}
   
// Function to create the cookie 
function setCookie(cname, cvalue, extime) {
  var d = new Date();
  d.setTime(d.getTime() + (extime*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}