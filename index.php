<?php

include "templates/header.php";

$views = scandir('views');


?>
<!--<div class="card-body"></div>-->
<!---->
<!--    <!--suppress ALL -->-->
<!---->
<!--    <a href="/login" class="btn btn-primary">-->
<!--        Login-->
<!--    </a>-->
<!---->
<!--    <a href="/make_order" class="btn btn-primary">-->
<!--        Make Order-->
<!--    </a>-->
<!---->
<!--    <a href="/register-meal" class="btn btn-primary">-->
<!--        Register Meal-->
<!--    </a>-->
<!---->
<!--    <a href="/register_customer" class="btn btn-primary">-->
<!--        Register Customer-->
<!--    </a>-->
<!---->
<!--    <a href="/register_user" class="btn btn-primary">-->
<!--        New User-->
<!--    </a>-->
<!---->
<!--    <a href="/show-menu" class="btn btn-primary">-->
<!--        Menu-->
<!--    </a>-->
<!---->
<!--    <a href="/view_customer" class="btn btn-primary">-->
<!--        Customers One-->
<!--    </a>-->
<!---->
<!--    <a href="/view_customers" class="btn btn-primary">-->
<!--        Customers List-->
<!--    </a>-->
<!---->
<!--    <a href="/view_orders" class="btn btn-primary">-->
<!--        Orders List-->
<!--    </a>-->
<!---->
<!--    <a href="/view_user" class="btn btn-primary">-->
<!--        View User-->
<!--    </a>-->
<!---->
<!--    <a href="/view_users" class="btn btn-primary">-->
<!--        User List-->
<!--    </a>-->

    <div class="main-container-fuck"></div>

    <main class="container">
        <div class="main-container mt-4"></div>
    </main>

    <script id="show-message" type="text/j-query-template">
        <?php include "views/short-message.html";?>
    </script>

<?php

//
//unset($views[0]);
//unset($views[1]);
//foreach ($views as $view) {
//    $vname = str_replace(".html", '', $view);
//    echo "<div class='hide'>";
//        echo "<script id='$vname' type='text/x-jquery-tmpl'>";
//        include 'views/'.$view;
//        echo "</script>";
//    echo "</div>";
//}

include "templates/footer.php";

