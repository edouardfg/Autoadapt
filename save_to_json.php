<?php

// get data from request
$newArray = $_REQUEST;

// get json from file
$json = file_get_contents('marker.json');

// turn json into array
$masterArr = json_decode($json, true);

// get current time in milliseconds
$milliseconds = round(microtime(true) * 1000);

// use milliseconds as array key and use the new array as its value
$masterArr["$milliseconds"] = $newArray;

// turn array back to json
$json = json_encode($masterArr, JSON_PRETTY_PRINT);

// save json to file
file_put_contents('marker.json', $json);

// echo the json so that you can use it in the AJAX call
echo $json;


?>