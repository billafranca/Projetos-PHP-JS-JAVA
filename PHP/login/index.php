<?php

session_start();
$_SESSION['user'] = "pedro";
header('Location: welcome.php');

exit();
?>