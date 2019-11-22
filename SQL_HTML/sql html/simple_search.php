<?php
	$conn = mysqli_connect("localhost","root","0000","test") or die("Connection Failed");
	print "Connection Successful!"."<p>";
    $c1_d = $_POST["c1"];
	
	print "simple_search.php loaded<br><br>";
	
    $re = mysql_query("SELECT * FROM index1 WHERE name LIKE %".$c1_d."%");
	while($result=mysqli_fetch_array($re)){
		print $result[3].": ";
		print $result[0]." ";
		print $result[1]." ";
		print $result[2]."<br>";
	}
	mysqli_close($conn);
	print "<br><a href='simple.html'>Main screen</a>";
?>