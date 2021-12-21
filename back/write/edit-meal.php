<?php
/**
 * Created by PhpStorm.
 * User: KASSAHUN
 * Date: 6/24/2018
 * Time: 7:44 PM
 */

include '../core/core.php';

$new = [];
if (post('av_for_breakfast')) {
    $new['av_for_breakfast'] = post('av_for_breakfast');
}
if (post('av_for_lunch')) {
    $new['av_for_lunch'] = post('av_for_lunch');
}
if (post('av_for_dinner')) {
    $new['av_for_dinner'] = post('av_for_dinner');
}

$db = DB();
$db->from("meals");
$db->where([
    'meal_id'=>post('meal_id')
]);
$db->update($new);
$db->execute();
echo json_encode("successfully updated");
