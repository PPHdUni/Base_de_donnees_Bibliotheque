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
 
// get posted data
$data = json_decode(file_get_contents("Php://input"));
 
// set product property values
$book->nameBook = $data->titre;
$book->nameAuthor = $data->auteur;
$book->year = $data->année;
 
// create the product
if($book->create()){
    echo '{';
        echo '"message": "Le livre est créé."';
    echo '}';
}
 
// if unable to create the product, tell the user
else{
    echo '{';
        echo '"message": "Incapable de créé le livre."';
    echo '}';
}

?>