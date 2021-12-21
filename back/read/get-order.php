<?php
/**
 * Created by PhpStorm.
 * User: KASSAHUN
 * Date: 6/24/2018
 * Time: 9:57 AM
*/
include "../core/core.php";


$db = DB();

$db->from('order_detail');

if(post('stat')) {
    $db->where('delivered_by_id',post('stat'));
}
if (post('cust_id')) {
    $db->where('ordered_by_id',post('cust_id'));
}
if (post('to_diliv')) {
    $db->where('delievered_by_id', 0);
}
$db->orderBy("order_time","DESC");
$returned = $db->many();
echo json_encode(['orders'=>$returned]);




