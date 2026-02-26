<?php
session_start();
if (isset($_SESSION['user'])){
    echo "bem vindo, " . $_SESSION['user'] . "!";
}else{
    echo "usuario nao encontrado";
}

?>