<?php
/**
 * Created by PhpStorm.
 * User: KASSAHUN
 * Date: 6/24/2018
 * Time: 8:46 AM
 */

header("Access-Control-Allow-Origin: *");
$files = scandir(__DIR__.'/libs/');


unset($files[0]);
unset($files[1]);

foreach ($files as $file) {
    include_once __DIR__.'/libs/'.$file;
}