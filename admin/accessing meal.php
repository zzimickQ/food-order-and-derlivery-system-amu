<?php

include 'common.php';

if(isset($_GET['do'])){
    $do = $_GET['do'];

    if($do == 'toggle-state') {
        // do toggle
        if (isset($_GET['id']) && isset($_GET['time'])) {
            $id = $_GET['id'];
            $time = $_GET['time'];
            $rowRes = $db->query("SELECT * FROM meal_table WHERE meal_id=$id");
            $row = $rowRes->fetch_assoc();
            $new_val = ($row[$time] == 0) ? 1 : 0;
            $db->query("UPDATE meal_table SET $time=$new_val WHERE meal_id=$id");
            exit();
        }
    }
}

$data = $db->query("SELECT * FROM meal_table WHERE (breakfast=1 OR lunch=1 OR dinner=1)");
$arr = [];
while ($d=$data->fetch_assoc()) {
    $arr[]=$d;
}
echo json_encode($arr);