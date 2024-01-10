<?php
    class Database {
        
        private $host = "";
        private $db_name = "bibliotheque_pph_projet";
        private $username = "";
        private $password = "";

        public $connection;

        public function getConnection(){
            $this->connection = null;

            try {
                $this->connection = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
                $this->connection->exec("set names utf8");
            } 
            catch(PDOException $exception) {
                echo json_encode(["message" => $exception->getMessage()]);
            }
            
            return $this->connection;
        }
    }
    
?>