<?php

include "common.php";
//if (isset($_GET)  ) {
//    $id = $_GET["id"];
//
////  $total = $_GET["price"];
////  $db->query("UPDATE customers SET credit=(credit-$total) WHERE cust_id=id");
//
//    //echo json_encode($db->query("SELECT name FROM customers WHERE cust_id = $id "));
//}

//breakfast
$arr = [];
if (date("h-i-s",time())<="04-00-00" && date("h-i-s",time())>="17-00-00") {
    $data = $db->query("SELECT * FROM meal_table WHERE breakfast=1");

    while ($d=$data->fetch_assoc()) {
        $arr[]=$d;
    }

}

//lunch

if (date("h-i-s",time())>="21-00-00" && date("h-i-s",time())<="04-00-00") {
    $data = $db->query("SELECT * FROM meal_table WHERE lunch=1");

    while ($d=$data->fetch_assoc()) {
        $arr[]=$d;
    }

}

//dinner

if (date("h-i-s",time())>="04-00-00" && date("h-i-s",time())<="14-00-00") {
    $data = $db->query("SELECT * FROM meal_table WHERE dinner=1");

    while ($d=$data->fetch_assoc()) {
        $arr[]=$d;
    }

}
echo json_encode($arr);

