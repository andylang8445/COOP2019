<?php
	$conn = mysqli_connect("localhost","root","0000","test") or die("Connection Failed");
	print "Connection Successful!"."<p>";
	$a1_d=$_POST["a1"];
	$a2_d=$_POST["a2"];
	$a3_d=$_POST["a3"];
	
	$re=mysqli_query($conn,"INSERT INTO index1 VALUES('$a1_d','$a2_d','a3_d')");
	$re=mysqli_query($conn,"SELECT * FROM index1 ORDER by id");
	
	while($result=mysqli_fetch_array($re)){
		print $result[3].": ";
		print $result[0]." ";
		print $result[1]." ";
		print $result[2]."<br>";
	}
	mysqli_close($conn);
	print "<br><a href='simple.html'>Main screen</a>";
?>