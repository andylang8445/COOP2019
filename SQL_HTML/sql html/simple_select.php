<?php
	$sql_addr = "localhost";
    $sql_user_name="root";
    $sql_pwd="0000";
    $sql_db_name="test";

	$conn = mysqli_connect($sql_addr,$sql_user_name,$sql_pwd,$sql_db_name) or die("Connection Failed");
	print "Connection Successful!"."<p>";
	
	print "simple_select.php loaded<br><br>";
	
	$re=mysqli_query($conn,"SELECT * FROM index1 order by id;");
	while($result=mysqli_fetch_array($re)){
		print $result[3].": ";
		print $result[0]." ";
		print $result[1]." ";
		print $result[2]."<br>";
	}
	mysqli_close($conn);
	print "<br><a href='simple.html'>Main screen</a>";
?>
