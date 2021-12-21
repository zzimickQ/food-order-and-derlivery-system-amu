<?php
/**
 * Created by PhpStorm.
 * User: KASSAHUN
 * Date: 6/24/2018
 * Time: 7:32 PM
 */
include '../core/core.php';

$db = DB();
$db->from("meals");
$db->delete(['meal_id'=>post('meal_id')]);
$db->execute();