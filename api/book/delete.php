<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
 
include_once '../config/database.php';
include_once '../objects/book.php';
 
$database = new Database();
$db = $database->getConnection();
 
$book = new Book($db);
 
$data = json_decode(file_get_contents("Php://input"));
 
$book->nBook = $data->nBook;
 
if($book->delete()){
    echo '{';
        echo '"message": "Le livre a été effacé."';
    echo '}';
}
 
else{
    echo '{';
        echo '"message": "Incapable d effacer le livre."';
    echo '}';
}
?>
