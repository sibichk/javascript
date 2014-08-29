<?php
	
	$name = $_POST['name'];
	$password = $_POST['password'];
if(!isset($name) || !isset($password))
{
   echo "You did not fill out the required fields.";
}
else{
	echo "filled";
}
?>