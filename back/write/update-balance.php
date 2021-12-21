<?php
/**
 * Created by PhpStorm.
 * User: KASSAHUN
 * Date: 6/24/2018
 * Time: 8:48 PM
 */

include '../core/core.php';
$db = DB();
$db->from('customers');
$db->where([
    'customer_id'=>post('customer_id')
]);
$se=$db->one();
$id = $se['customer_id'];
unset($se['customer_id']);
$se['ballance'] += post('ballance');
$db->from("customers");
$db->where([
   'customer_id'=>post('customer_id')
]);
$db->update([
   'ballance'=>$se['ballance'],
    'last_ballance_update_time'=>now()
]);
$db->execute();

$db->from('ballance_updates');
$db->insert([
    'amount' => post('ballance'),
    'customer_id_rel' => post('customer_id'),
    'update_datetime' => now()
]);
$db->execute();
//echo json_encode(['customer_id'=>])
echo"[]";