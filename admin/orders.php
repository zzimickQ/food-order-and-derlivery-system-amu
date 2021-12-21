<?php

include 'common.php';
$ord = date('Y-m-d h:m:s',(time()-(60*60*2)));
$data = $db->query("SELECT * FROM contract_foods.orders  WHERE time>='$ord'");
$arr = [];
while ($d = $data->fetch_assoc()) {
    $arr[] = $d;
}
echo json_encode($arr);