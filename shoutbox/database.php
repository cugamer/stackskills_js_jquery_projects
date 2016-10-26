<?php
// Connect to MySQL

$con = mysqli_connect('localhost',
					"root",
					"", // DB password goes here
					"jsshoutbox");

if(mysqli_connect_errno()) {
	echo 'failed to connect: ' . mysqli_connect_error();
}

?>