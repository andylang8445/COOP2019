<?php
    $sql_addr = "localhost";
    $sql_user_name="root";
    $sql_pwd="0000";
    $sql_db_name="test";

	$conn = mysqli_connect($sql_addr,$sql_user_name,$sql_pwd,$sql_db_name) or die("Connection Failed");
	print "Connection Successful!"."<p>";
	
	print "html_sql_table.php loaded<br><br>";

    
	
	$tot=0;

    $tot_result=array(
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array(),
        array()
    );
	
	$re=mysqli_query($conn,"SELECT * FROM index1 order by id;");
	print '<table border="2"><tr><th>id</th><th>name</th><th>birthday</th><th>age</th></tr>';
	while($result=mysqli_fetch_array($re)){
        print "<tr>";
		print "<td>".$result[3]."</td>";
        $tot_result[$tot][0]=$result[3];
		print "<td>".$result[0]."</td>";
        $tot_result[$tot][1]=$result[0];
		print "<td>".$result[1]."</td>";
        $tot_result[$tot][2]=$result[1];
		print "<td>".$result[2]."</td>";
        $tot_result[$tot][3]=$result[2];
        print "</tr>";
		$tot++;
	}
	print $tot." rows<br>";
	$sort=array();
    print"<br>sorted data by name";
    for($i=0;$i<$tot;$i++){
        $sort[$i] = $tot_result[$i][1];
    }

    //array_multisort($sort, SORT_ASC, SORT_STRING,$tot_result);
    print '<table border="2"><tr><th>id</th><th>name</th><th>birthday</th><th>age</th></tr>';
	for($i=0;$i<tot;i++){
        print "<tr>";
		print "<td>".$tot_result[i][0]."</td>";
		print "<td>".$tot_result[i][1]."</td>";
		print "<td>".$tot_result[i][2]."</td>";
		print "<td>".$tot_result[i][3]."</td>";
        print "</tr>";
	}


	mysqli_close($conn);
	print "<br><a href='table.html'>Main screen</a>";
?>
