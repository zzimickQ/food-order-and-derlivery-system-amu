<?php
/**
 * Created by PhpStorm.
 * User: KASSAHUN
 * Date: 6/24/2018
 * Time: 8:54 AM
 */

/**
 * @return Sparrow
 */
function DB()
{
    $db = new Sparrow();
    $db->setDb([
        'type' => 'mysqli',
        'hostname' => 'database',
        'database' => 'foodman_db',
        'username' => 'root',
        'password' => 'password'
    ]);
    return $db;
}

function post($name,$def=null,$alt=null)
{
    return isset($_POST[$name]) ? (empty($def) ? $_POST[$name]:$alt) : $def;
}

function now()
{
    return date('Y-m-d h-i-s');
}

function upload($data_name,$default)
{
    if(isset($_FILES[$data_name]['size'])&& $_FILES[$data_name]['size']>0) {
        $f = new \FileUpload\FileUpload();
        $f->setInput($data_name);
        $f->setDestinationDirectory('../../img/');
        $f->setAutoFilename();
        $f->save();
        return $f->getInfo()->filename;
    } else {
        return $default;
    }
}