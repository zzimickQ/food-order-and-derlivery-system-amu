<?php
/**
 * Created by PhpStorm.
 * User: KASSAHUN
 * Date: 6/24/2018
 * Time: 7:11 PM
 */
$d=['order_id'=>3];
$_POST=$d;
include '../core/core.php';

$db = DB();
$db->from("orders");
$db->where(['order_id'=> post('order_id')]);
$cust = $db->one();
$db->from("orders");
$db->delete(['order_id'=>post('order_id')]);
$db->execute();