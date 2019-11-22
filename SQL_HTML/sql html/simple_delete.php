<?php
	$conn = mysqli_connect("localhost","root","0000","test") or die("Connection Failed");
	print "Connection Successful!"."<p>";
    $b1_d=$_POST["b1"];
	mysqli_query($conn,"DELETE FROM index1 WHERE id=".$b1_d.";");
	
	print "simple_delete.php loaded<br><br>";
	
    $re=mysqli_query($conn,"SELECT * FROM index1 ORDER by id;");
	while($result=mysqli_fetch_array($re)){
		print $result[3].": ";
		print $result[0]." ";
		print $result[1]." ";
		print $result[2]."<br>";
	}
	mysqli_close($conn);
	print "<br><a href='simple.html'>Main screen</a>";
?>