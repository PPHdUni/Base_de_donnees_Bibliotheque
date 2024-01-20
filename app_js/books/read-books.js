$(document).ready(function(){
 
	showBookAjax()
 
    $(document).on('click', '.book-list-button', function(){
		showBookAjax()
    });

    
});

function showBookAjax() {

	$.ajax({
			dataType: "json",
			url: "/Base_de_donnees_Bibliotheque/api/book/read.php",
			type: "GET",
			data: null,
			success: function(data) {
				showBookList(data)
			},
			error: function(data, textStatus, error) {
				console.error("getJSON failed, status: " + textStatus + ", error: "+error)
				$("#page-content").html(JSON.stringify(data))
			}
		});
	
}

function showBookList(data){
 
   var book_list_html="";
   
   book_list_html+="<table id='content-table' class='table-bordered'>";
   
   book_list_html+="<thead>";
   book_list_html+="<tr>";
   book_list_html+="<th>Titre</th>";
   book_list_html+="<th>Auteur</th>";
   book_list_html+="<th>Année</th>";
   book_list_html+="<th>Enlever</th>";
   book_list_html+="</tr>";
   book_list_html+="</thead>";
   
   book_list_html+="<tbody>";
   $.each(data, function(index, book) {
	   
		book_list_html+="<tr>";
	
		book_list_html+="<td>" + book.nameBook + " </td>";
        book_list_html+="<td>" + book.nameAuthor + " </td>";
        book_list_html+="<td>" + book.year + "</td>";
		book_list_html+="<td><button class='btn btn-danger delete-book-button' data-id='" + book.nBook + "'>-</button></td>";
		
		book_list_html+="</tr>";
	   
   });
   book_list_html+="</tbody>";
   
   book_list_html+="</table>";
   
   $("#page-content").html(book_list_html);
   
   let data_table = new DataTable('#content-table');
   
   var add_button_html="<div class='d-flex justify-content-center'>";
   add_button_html+="<button class='btn bg-primary text-white add-book-button' >Ajouter</button>";
   add_button_html+="</div>";
   
   $("#page-content").append(add_button_html);
   
};