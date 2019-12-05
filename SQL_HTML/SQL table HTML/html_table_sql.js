function myFunction() {
    alert("I am an alert box!");
}
   
// Function to create the cookie 
function createCookie(name, value, seconds) { 
    var expires; 
      
    if (seconds) { 
        var date = new Date(); 
        date.setTime(date.getTime() + (seconds * 1000)); 
        expires = "; expires=" + date.toGMTString(); 
    } 
    else { 
        expires = ""; 
    } 
      
    document.cookie = escape(name) + "=" +  
        escape(value) + expires + "; path=/"; 
} 