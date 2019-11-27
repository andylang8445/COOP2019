<?php
    $sql_addr = "localhost";
    $sql_user_name="root";
    $sql_pwd="0000";
    $sql_db_name="test";

	$conn = mysqli_connect($sql_addr,$sql_user_name,$sql_pwd,$sql_db_name) or die("Connection Failed");
	print "Connection Successful!"."<p>";
	
	print "html_sql_table.php loaded<br><br>";

    print '<table border="2"><tr><th>id</th><th>name</th><th>birthday</th><th>age</th></tr>';
	
	$tot=0;

    $tot_result=array(
        array();
        array();
        array();
        array();
        array();
        array();
        array();
        array();
        array();
        array();
        array();
        array();
        array();
        array();
        array();
        array();
        array();
        array();
        array();
        array();
    );
	
	$re=mysqli_query($conn,"SELECT * FROM index1 order by id;");
	while($result=mysqli_fetch_array($re)){
        print "<tr>";
		print "<td>".$result[3]."</td>";
        $tot_result[$tot]["id"]=$result[3];
		print "<td>".$result[0]."</td>";
        $tot_result[$tot]["name"]=$result[0];
		print "<td>".$result[1]."</td>";
        $tot_result[$tot]["birthday"]=$result[1];
		print "<td>".$result[2]."</td>";
        $tot_result[$tot]["age"]=$result[2];
        print "</tr>";
		$tot++;
	}
	print $tot." rows<br>";

    print"<br>sorted data by name";
    foreach ((array) $tot_result as $key => $value) {
        $sort[$key] = $value['name'];
    }

    array_multisort($sort, SORT_ASC, $tot_result);
    print_r($tot_result);


	mysqli_close($conn);
	print "<br><a href='table.html'>Main screen</a>";
?>
