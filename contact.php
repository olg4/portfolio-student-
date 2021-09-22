<?php

    $name = trim(strip_tags($_POST['name']));
    $email = trim(strip_tags($_POST['email']));
    $company = trim(strip_tags($_POST['company']));
    $message = htmlentities($_POST['message']);


    $subject = "Contact from a visiter!";
    $to = "olg4mirova@gmail.com";

    $body = <<<HTML
    $message
    HTML;

    $headers = "From: $email\r\n";
    $headers .= "Content-type: text/html\r\n";

    mail($to, $subject, $body, $headers);

    header('Location: thanks.html');

?>