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
$db->where([
    'meal_name' => post('meal_name')
]);

if ($db->one()) {
    // meal already registered by this name
    die(json_encode(['error'=>'Meal already registered']));
    exit(0);
}


$m = [
    'meal_name'=> post('meal_name'),
    'av_for_breakfast'=> post('av_for_breakfast',0,1),
    'av_for_lunch'=> post('av_for_lunch',0,1),
    'av_for_dinner'=> post('av_for_dinner',0,1),
    'price'=> post('price'),
    'reg_time'=> now(),
    'meal_pic'=>upload('meal_pic','food_icon.png')
];

$db->from('meals');
$db->insert($m);
$db->execute();

echo json_encode(['success'=>$db->insert_id,'d'=>$_POST]);