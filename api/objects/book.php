<?php
class Book{

// database connection and table name
    private $conn;
    private $table_name = "books";
 
    // object properties
    public $nBook;
    public $nameBook;
    public $nameAuthor;
    public $year;
 
    public function __construct($db){
        $this->conn = $db;
    }

    function read(){
 
      // select all query
      $query = "SELECT
                nBook, nameBook, nameAuthor, year
            FROM
                " . $this->table_name;
      
      // prepare query statement
      $stmt = $this->conn->prepare($query);
      
      // execute query
      $stmt->execute();
      
      return $stmt;
    }
	
	function create(){
 
      // query to insert record
      $query = "INSERT INTO
                " . $this->table_name . "
            SET
                nameBook=:nameBook, nameAuthor=:nameAuthor, year=:year";
      
      // prepare query
      $stmt = $this->conn->prepare($query);
      
      // sanitize
      $this->nameBook=htmlspecialchars(strip_tags($this->nameBook));
      $this->nameAuthor=htmlspecialchars(strip_tags($this->nameAuthor));
      $this->year=htmlspecialchars(strip_tags($this->year));
      
      // bind values
      $stmt->bindParam(":nameBook", $this->nameBook);
      $stmt->bindParam(":nameAuthor", $this->nameAuthor);
      $stmt->bindParam(":year", $this->year);
      
      // execute query
      if($stmt->execute()){
        return true;
      }
      
      return false;
      
    }
	
	// delete the book
    function delete(){
 
      // delete query
      $query = "DELETE FROM " . $this->table_name . " WHERE nBook = ?";
      
      // prepare query
      $stmt = $this->conn->prepare($query);
      
      // sanitize
      $this->nBook=htmlspecialchars(strip_tags($this->nBook));
      
      // bind nBook of book to delete
      $stmt->bindParam(1, $this->nBook);
      
      // execute query
      if($stmt->execute()){
        return true;
      }
      
      return false;
      
    }

}
?>