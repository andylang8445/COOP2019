<?php
	$conn = mysqli_connect("localhost","root","0000","test") or die("Connection Failed");
	print "Connection Successful!"."<p>";
	
	print "html_sql_table.php loaded<br><br>";

    print '<table style="width:100%""><tr><th>id</th><th>name</th><th>birthday</th><th>age</th></tr>';
	
	$re=mysqli_query($conn,"SELECT * FROM index1 order by id;");
	while($result=mysqli_fetch_array($re)){
        print "<tr>";
		print "<th>".$result[3]."</th>";
		print "<th>".$result[0]."</th>";
		print "<th>".$result[1]."</th>";
		print "<th>".$result[2]."</th>";
        print "</tr>";
	}
	mysqli_close($conn);
	print "<br><a href='simple.html'>Main screen</a>";
?>