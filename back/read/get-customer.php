<?php
/**
 * Created by PhpStorm.
 * User: KASSAHUN
 * Date: 6/24/2018
 * Time: 9:06 AM
 */


include "../core/core.php";


$db = DB();
$db->from('customers_detail');
if(post('customer_id')) {
    $db->where(['customer_id' => post('customer_id')]);
}
$da = $db->many();
if($db->num_rows == 0)
    die(json_encode(['error'=>'Customer does not exists!' ]));

die(json_encode(['success'=>$da]));
