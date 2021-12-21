W<?php
/**
 * Created by PhpStorm.
 * User: KASSAHUN
 * Date: 5/25/2018
 * Time: 2:18 AM
 */

$dirs = scandir('./');
foreach ($dirs as $dir) :
    ?>

    <a href="<?= $dir ?>"> <?= $dir ?></a><br>

    <?php

    endforeach;
echo date("h-i-s",time());