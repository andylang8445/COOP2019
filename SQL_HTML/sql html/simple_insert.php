<?php
	$sql_addr = "localhost";
    $sql_user_name="root";
    $sql_pwd="0000";
    $sql_db_name="test";

	$conn = mysqli_connect($sql_addr,$sql_user_name,$sql_pwd,$sql_db_name) or die("Connection Failed");
	print "Connection Successful!"."<p>";
	$a1_d=$_POST["a1"];
	$a2_d=$_POST["a2"];
	$a3_d=$_POST["a3"];
	$a4_d=$_POST["a4"];
	
	print "simple_insert.php loaded<br><br>";
	
	if($a4_d=="")
		mysqli_query($conn,"INSERT INTO index1(name,birthday,age) VALUES('".$a1_d."','".$a2_d."','".$a3_d."');");
	else
		mysqli_query($conn,"INSERT INTO index1(name,birthday,age,id) VALUES('".$a1_d."','".$a2_d."','".$a3_d."','".$a4_d."');'");
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