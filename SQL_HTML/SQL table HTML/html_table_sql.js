function myFunction() {
    alert("I am an alert box!");
    return 0;
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

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM index1 order by id;", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});