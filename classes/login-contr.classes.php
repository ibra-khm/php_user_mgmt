<?php
class LoginContr extends Login{
    
    // properties
    private $email;
    private $password;


    // methods
    public function __construct($email, $password) {
        $this->email = $email;
        $this->password = $password;

    }
    public function loginUser(){
        if ($this->checkEmailTaken() == false) {
            $this->taken = "user Email already exists";
            exit();
        }
        
        $this->getUser($this->email, $this->password);
    }
}   