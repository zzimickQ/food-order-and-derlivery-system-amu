<?php

include 'common.php';
if (isset($_GET['id'])) {
     $id = $_GET['id'];
    $db->query("UPDATE orders SET 'out'=1 WHERE 'id'=$id");
}
$ord = date('Y-m-d h:m:s',(time()));
$res=$db->query("SELECT * FROM orders ORDER BY 'out' ASC WHERE (time>='$ord')");
$arr=[];
while ($r=$res->fetch_assoc()) {
$arr[]=$r;
}
echo json_encode($arr);