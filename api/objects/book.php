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
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // read products
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

}
?>