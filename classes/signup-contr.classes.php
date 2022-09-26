<?php
class SignupContr extends Signup{
    
    // properties
    private $name;
    private $password;
    private $email;
    private $dob;
    private $phone;
    public $taken;

    // methods
    public function __construct($name,$email, $phone, $password, $dob) {
        //(fullname, email, phone, user_pwd, dob)
        
        $this->name = $name;
        $this->password = $password;
        $this->email = $email;
        $this->dob = $dob;
        $this->phone = $phone;
    }
    public function signupUser(){
        if ($this->checkEmailTaken() == false) {
            $this->taken = "user Email already exists";
            exit();
        }
        
        $this->setUser($this->name, $this->email, $this->phone, $this->password, $this->dob);
    }
     private function checkEmailTaken() {
         if (!$this->checkEmail($this->email)) {
            $this->taken= "email";
            $result = false;
         } else {
            $result = true;
         }
         return $result;
     }
}