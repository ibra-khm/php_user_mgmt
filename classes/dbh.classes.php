<?php

class Dbh {
    
    protected function connect() {
        try {
            $host = "localhost";
            $username = "root";
            $password = "root";
            $dbname = "register";
            $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
            return $conn;
        } catch (PDOException) {
            echo"error";
            die();
        }
    }
}