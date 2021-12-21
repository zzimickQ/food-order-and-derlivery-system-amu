<?php
/**
 * Created by PhpStorm.
 * User: KASSAHUN
 * Date: 6/24/2018
 * Time: 8:53 AM
 */


include '../core/core.php';


$db = DB();

$db->from("users");
$db->where('username', post('username'));
if ($db->one()) {
    // meal already registered by this name
    die(json_encode(['error'=>'name already registered']));
}

$p_d = [
    "username"=>post('username'),
    "password"=>post('password'),
    "account_type"=>'customer',
    "full_name"=>post('full_name'),
    "sex"=>post('sex'),
    "dob"=>post('dob'),
    "address"=>post('address'),
    "registered_time"=>now(),
    "phone_number"=>post('phone_number'),
    "profile_pic"=>upload('profile_pic','default_pic.png')
];

$db->from('users');
$db->insert($p_d);
$db->execute();
$data = [
    'user_id_rel' => $db->insert_id,
    'ballance' => post('ballance'),
    "last_ballance_update_time"=>now(),
    'special_id' => post('special_id')
];
$db->from('customers');
$db->insert($data);
$db->execute();

echo json_encode(['success'=>$db->insert_id]);