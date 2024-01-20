$(document).ready(function(){
 
	$(document).on('click', '.add-book-button', function(){
		
		showBookForm()
		
    });
	
	$(document).on('submit', '#create-book-form', function(){
		
		var form_data=JSON.stringify($(this).serializeObject());
		createBookAjax(form_data);
		
	});
    
});

function showBookForm() {
	
	var create_book_html="<div class='d-flex justify-content-center'>";;
	
	create_book_html+="<form id='create-book-form' method='post' >";
	create_book_html+="<table id='content-form' class='table-bordered'>";
	
		create_book_html+="<tr>";
		create_book_html+="<td>Titre</td>";
		create_book_html+="<td><input type='text' name='titre' size='100' class='form-control' required /></td>";
		create_book_html+="</tr>";
		
		create_book_html+="<tr>";
		create_book_html+="<td>Auteur</td>";
		create_book_html+="<td><input type='text' name='auteur' size='100' class='form-control' required /></td>";
		create_book_html+="</tr>";
		
		create_book_html+="<tr>";
		create_book_html+="<td>Année</td>";
		create_book_html+="<td><input type='number' min='0' max='2030' name='année' size='100' class='form-control' required /></td>";
		create_book_html+="</tr>";
		
		create_book_html+="<tr>";
		create_book_html+="<td>Soumettre</td>";
		create_book_html+="<td class='d-flex justify-content-center'><button type='submit' class='btn bg-primary text-white'>+</button></td>";
		create_book_html+="</tr>";
	
	create_book_html+="</table>";
	create_book_html+="</form>";
	
	create_book_html+="</div>";

	$("#page-content").html(create_book_html);
	
}

function createBookAjax(form_data) {

	$.ajax({
			dataType: "json",
			url: "/Base_de_donnees_Bibliotheque/api/book/create.php",
			type: "POST",
			contentType : "application/json",
			data: form_data,
			success: function(data) {
				showBookList(data)
			},
			error: function(data, textStatus, error) {
				console.error("getJSON failed, status: " + textStatus + ", error: "+error)
				$("#page-content").html(JSON.stringify(data))
			}
		});
	
}