<?php

include 'common.php';
if (isset($_POST['id'])&&isset($_POST['name'])&&isset($_POST['school_id'])&&isset($_POST['department'])&&isset($_POST['phone_number'])&&isset($_POST['credit'])&&isset($_POST['username'])&&isset($_POST['password'])){
    $id = $_POST['id'];
    $name = strtoupper($_POST['name']);
    $school_id = strtoupper($_POST['school_id']);
    $department = strtoupper($_POST['department']);
    $phone_num = $_POST['phone_number'];
    $credit = $_POST['credit'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $date = date('Y-m-d',time());

    $db->query("UPDATE customers SET (name,school_id,department,phone_num,credit,username,password,reg_date) VALUES ('$name','$school_id','$department','$phone_num','$credit','$username','$password','$date') WHERE cust_id=$id");
    echo $db->error;


}
