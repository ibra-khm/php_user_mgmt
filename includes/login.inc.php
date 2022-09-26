<?php
$email = $_POST["email"];
$password = $_POST["password"];


if ($phone == "00962772150202"){
    echo "https://www.youtube.com";
} else {
    echo  "https://www.google.com";
}

include "../classes/dbh.classes.php";
include "../classes/login.classes.php";
include "../classes/login-contr.classes.php";
$login = new LoginContr($email, $password);
//(fullname, email, phone, user_pwd,dob)

// Running error handlers and user signup
$login->loginUser();


