<?php

/*
  Credits: Bit Repository
  URL: http://www.bitrepository.com/
 */

include 'config.php';

error_reporting(E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if ($post) {

    $name = stripslashes($_POST['name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $subject = "Заказ теплицы с сайта";
    $message = "Заказ с сайта:<br/>Телефон: " . $phone . "<br/>";
    $m = strip_tags($_POST['message']);
    $m = htmlspecialchars($m);
//$m =  mysql_real_escape_string($m);
    $message = $message . $m;

    //$error = Null;



    $mail = mail(WEBMASTER_EMAIL, $subject, $message, "From: " . $name . " <" . $email . ">\r\n"
            . "Reply-To: " . $email . "\r\n"
            . "X-Mailer: PHP/" . phpversion());


    if ($mail) {
        echo 'OK';
    } else {
        echo "FAIL";
    }
}
?>