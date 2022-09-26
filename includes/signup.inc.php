<?php
$email = $_POST["email"];
$phone = $_POST["phone"];
$password = $_POST["password"];
$dob = $_POST["dob"];
$fullname = $_POST["fullname"];
// $role = $_POST["role"];



include "../classes/dbh.classes.php";
include "../classes/signup.classes.php";
include "../classes/signup-contr.classes.php";
$signup = new SignupContr($fullname, $email, $phone, $password, $dob);

// Running error handlers and user signup
$signup->signupUser();



echo $phone;
if ($phone == "00962772150202"){
    header("Location: https://www.youtube.com");
} else {
    header("https://www.google.com");
}


