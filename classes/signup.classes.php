<?php
class signup extends Dbh {
    //properties
    
    
    //methods
    protected function setUser($name,$email,$phone,$password,$dob){
        $stmt = $this->connect()->prepare('INSERT INTO users (fullname, email, phone, user_pwd,
         dob) VALUES (?, ?, ?, ?, ?)');
         $hashedPwd = password_hash($password, PASSWORD_DEFAULT);

         if(!$stmt->execute(array($name,$email,$phone,$hashedPwd, $dob))) {
 
             $stmt = null;
            //  header("location: ../index.html?error=stmtfailed");
             exit();
         }

         $stmt = null;

    }


    protected function checkEmail($email) {
        $stmt = $this->connect()->prepare('SELECT email FROM users WHERE email = ?');

        if(!$stmt->execute(array($email))) {

            $stmt = null;
            // header("location: ../index.html?error=stmtfailed");
            exit();
        }
        if ($stmt->rowCount() > 0) {
            $result = false;
        } else {
            $result = true;
        }
        return $result;
    }


}