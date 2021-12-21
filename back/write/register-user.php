<?php
/**
 * Created by PhpStorm.
 * User: KASSAHUN
 * Date: 6/24/2018
 * Time: 11:30 AM
 */
include '../core/core.php';


$db = DB();

$db->from("users");
$db->where('username', post('username'));
if ($db->one()) {
    // meal already registered by this name
    die(json_encode(['error'=>'name already registered']));
    exit(0);
}

$p_d = [
    "username"=>post('username'),
    "password"=>post('password'),
    "account_type"=>post('account_type'),
    "full_name"=>post('full_name'),
    "sex"=>post('sex'),
    "dob"=>post('dob'),
    "address"=>post('address'),
    "registered_time"=>now(),
    "phone_number"=>post('phone_number')
];

$db->from('users');
$db->insert($p_d);
$db->execute();