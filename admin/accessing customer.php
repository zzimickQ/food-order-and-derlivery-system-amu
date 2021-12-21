<?php

include 'common.php';
$where = "";
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $where="WHERE cust_id=$id";
}
$res=$db->query("SELECT * FROM contract_foods.customers $where ORDER BY NAME ");
$respo = [];
while ($da = $res->fetch_assoc()) {
    if(isset($_GET['id']))
    $respo[]=[
        'Customer ID' => $da['cust_id'],
        'Customer Name' => $da['name'],
        'Campus ID'=>$da['school_id'],
        'Department'=>$da['department'],
        'Phone number'=>$da['phone_num'],
        'Credit'=>$da['credit'],
        'Username'=>$da['username'],
        'Password'=>$da['password'],
        'Registered Date'=>$da['reg_date']
    ];
    else
        $respo[] = $da;
}
echo json_encode($respo);