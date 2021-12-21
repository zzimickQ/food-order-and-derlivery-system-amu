<?php
/**
 * Created by PhpStorm.
 * User: KASSAHUN
 * Date: 6/24/2018
 * Time: 5:40 PM
 */

include '../core/core.php';
$db = DB();

$db->from('meals');
$db->where([
    'meal_id' => post('meal_id')
]);

$re_row = $db->one();

$m_name = $re_row["meal_name"];
$pri = $re_row['price'] * 1.15;
$db->from("orders");
$data=[
    "meal_name"=>$m_name,
    "price"=>$pri,
    "order_time"=>now(),
    "ordered_by_id"=>post("ordered_by_id")
];


$db->insert($data);
$db->execute();

$db->from('customers');
$db->where('customer_id', post("ordered_by_id"));
$val = $db->one();
$val['ballance'] -= $pri;
unset($val['customer_id']);
$db->from('customers');
$db->where('customer_id', post("ordered_by_id"));
$db->update($val);
$db->execute();
echo json_encode(['success'=>$db->insert_id, 'd'=>$data]);