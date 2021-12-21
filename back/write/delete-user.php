<?php
/**
 * Created by PhpStorm.
 * User: KASSAHUN
 * Date: 6/24/2018
 * Time: 8:46 PM
 */
include '../core/core.php';

$db = DB();
$db->from("users");
$db->where(['user_id'=> post('user_id')]);
$cust = $db->one();
$db->from("users");
$db->delete(['user_id'=>post('user_id')]);
$db->execute();