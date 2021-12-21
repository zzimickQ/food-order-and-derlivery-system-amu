<?php
/**
 * Created by PhpStorm.
 * User: KASSAHUN
 * Date: 6/24/2018
 * Time: 3:54 PM
 */
include '../core/core.php';

$db = DB();
$db->from("customers");
$db->where(['customer_id'=> post('customer_id')]);
$cust = $db->one();
if(!$cust)
    die('[]');
$db->from("customers");
$db->delete(['customer_id'=>post('customer_id')]);
$db->execute();

$db->from("users");
$db->delete(['user_id'=>$cust['user_id_rel']]);
$db->execute();

echo json_encode(['success'=>'true']);