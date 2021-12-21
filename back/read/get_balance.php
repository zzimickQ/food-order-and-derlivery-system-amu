<?php
/**
 * Created by PhpStorm.
 * User: KASSAHUN
 * Date: 6/24/2018
 * Time: 9:55 PM
 */

include "../core/core.php";


$db = DB();

$db->from('ballance_updates');
if (post('customer_id')) {
    $db->where([
        'customer_id_rel' => post('customer_id')
    ]);
    $db->orderBy("update_datetime","DESC");
    echo json_encode(['bal'=>$db->many()]);
}

else
    die(json_encode(['error'=>'Search does not found!' ]));