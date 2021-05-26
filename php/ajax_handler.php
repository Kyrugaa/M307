<?php

$user_mail_list = array("me@me.com", "alf@ggg.in");
if (isset($_GET["email"])){
    $email = $_GET["email"];
    //check if user already exists in array
    if(in_array($email, $user_mail_list)==1){
        echo trim("false"); //return false if user in array already exists
    }
    else
        echo trim("true");
}
else{
    die;
}

  sleep(1);
  $liste =['me@me','mu@mu'];
  $name = $_GET['email'];
  if (in_array($name, $liste)){
    echo "false";
  }else {
    echo "true";
  }

?>
