<?php
/**
 * Created by PhpStorm.
 * User: KASSAHUN
 * Date: 6/24/2018
 * Time: 9:55 AM
 */

include "../core/core.php";


$db = DB();

$db->from('users');
if (post('user_id')) {
    $db->where([
        'user_id' => post('user_id')
    ]);

    echo json_encode($db->one());
}

else
    die(json_encode(['error'=>'User does not exists!' ]));