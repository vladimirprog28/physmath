<?php
$mysqli = new mysqli("localhost", "user", "password", "test_db");
if ($mysqli->connect_error) {
    die("Ошибка подключения: " . $mysqli->connect_error);
}
?>