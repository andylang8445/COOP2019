<?php

if(isset($_POST["Search"]))
{
    $data= file('login_info_Andy.txt');
    $accessData = array();
    foreach($data as $line){
        list($dataFile1) = explode(',', $line);

    }

    $dataInput = isset($_POST['name'])? $_POST['name']:'';

    if(array_key_exists($dataInput, $accessData)){
        echo "text exist";
    }
    else{
        echo "text doesn't exist";
    }
}
?>