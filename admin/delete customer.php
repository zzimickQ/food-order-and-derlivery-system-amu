<?php

include 'common.php';
if (isset($_GET['id'])){

    $id = $_GET['id'];

    if($db->query("DELETE FROM customers WHERE cust_id=$id")) {
        echo 'succ';
        exit();
    }

}
echo 'fail' . $db->error;
