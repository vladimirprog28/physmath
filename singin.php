<?php

//параметры поключения
$host = "localhost";
$username = "postgres";
$password = "as6f3wVGS6cGGn6";
$dbname = "user_info";
$port = "5432";

try {
    // строка поключения
    $dsn = "pgsql:host=$host;port=$port;dbname=$dbname;user=$username;password=$password";

    // создание PDO-объекта
    $pdo = new PDO($dsn);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // получение данных  из формы
    $name = $_POST['login'];
    $email = $_POST['email'];
    $password_user = $_POST['password_user'];

    // Подготовка запроса
    $sql = "INSERT INTO user_info (name, email, passeord_user) VALUES (name, email, password)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$name, $email]);

    echo "данные успешно добавлены в PostgreSQL";

} catch (PDOException $e) {
    echo "ошибка подключения или запроса: " . $e->getMessage();
}
?>