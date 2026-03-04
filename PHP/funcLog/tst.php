<?php

session_start();
$name = $POST['name'] = "???";
$email = $POST['email'] = "???";
$senha = $POST['senha'] = "???";
$cpf = $POST['cpf'] = "???";


$nome = $_SESSION;
if (!$nome){
    echo "nome inválido";
}

$sql = (`CREATE TABLE IF NOT EXISTS users(
id INT PRIMARY KEY AUTO_INCREMENT;
nome TEXT NOT NULL,
email TEXT NOT NULL,
senha INT
);`)

$sql.push("SELECT FROM users ADD COLUMN cpf VARCHAR(255)");

$db = {
$url = "localhost/login.php";
$name = root;
$password = "";

}