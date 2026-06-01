<?php
try{
    $dsn = "pgsql:host=localhost;port=5432;dbname=user_info;user=postgress;passwordas6f3wVGS6cGGn6";
    $pdo = new PDO($dsn);
    echo "yes";
} catch(PDOException $e){
    die("no: " . $e->getMessage());
}
?>