<?php
/**
 * Created by PhpStorm.
 * User: KASSAHUN
 * Date: 6/24/2018
 * Time: 9:15 AM
 */

include "../core/core.php";


$db = DB();
$db->from('meals');
if(post('av')=="breakfast") {
    $db->where(['av_for_breakfast' => 1]);
}
if(post('av')=="lunch") {
    $db->where(['av_for_lunch' => 1]);
}
if(post('av')=="dinner") {
    $db->where(['av_for_dinner' => 1]);
}
$da = $db->many();
if($db->num_rows == 0)
    die(json_encode(['error'=>'Meal does not exists!' ]));

die(json_encode(['success'=>$da]));