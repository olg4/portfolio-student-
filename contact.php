<?php

    if(isset($_POST['email']) && $_POST['email'] != '') {

        if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $name = $_POST['name'];
            $email = $_POST['email'];
            $company = $_POST['company'];
            $message = $_POST['message'];


            $subject = "Contact from a visiter!";
            $to = "olg4mirova@gmail.com";
            $body = "";

            $body .= "From: ".$name. "\r\n";
            $body .= "Email: ".$email. "\r\n";
            $body .= "Company: ".$company. "\r\n";
            $body .= "Message: ".$message. "\r\n";

            
            //mail($to, $subject, $body);
            $message_sent = true;
            debug_to_console("SEND OK");

        } else {
            $message_sent = false;
            debug_to_console("SEND KO");
        }
    }

    function debug_to_console($data) {
        $output = $data;
        if (is_array($output)) {
            $output = implode( ',', $output);
        }
    
        echo "<script>console.log( 'Debug Objects: " . $output . "' );</script>";
    }

?>