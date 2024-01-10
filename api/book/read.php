<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../objects/book.php';

$database = new Database();
$db = $database->getConnection();
 
$book = new Book($db);
 
$stmt = $book->read();
$num = $stmt->rowCount();

$books_array=array();
 
if($num>0){
 
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        
		extract($row);
 
        $book_item=array(
            "nBook" => $nBook,
            "nameBook" => $nameBook,
            "nameAuthor" => $nameAuthor,
            "year" => $year
        );
 
        array_push($books_array, $book_item);
    }
 
    echo json_encode($books_array);
}
 
else{
	
    echo json_encode(
       array("message" => "No products found.")
    );
}
?>