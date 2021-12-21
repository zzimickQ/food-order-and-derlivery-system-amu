<?php

include 'common.php';
if (isset($_POST['meal'])&&isset($_POST['price'])){
    $meal = strtoupper($_POST['meal']);
    $price = $_POST['price'];
    $breakfast = ($_POST['breakfast'])?1:0;
    $lunch = ($_POST['lunch'])?1:0;
    $dinner = ($_POST['diner'])?1:0;

    $db->query("INSERT INTO meal_table (meal,breakfast,lunch,dinner,price) VALUES ('$meal','$breakfast','$lunch','$dinner','$price')");
    echo $db->error;

}
