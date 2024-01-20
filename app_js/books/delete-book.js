$(document).ready(function(){
 
	var nBook
 
    $(document).on('click', '.delete-book-button', function(){
		
		nBook = $(this).attr('data-id');
		showDeletePrompt(nBook)
	
	});
	
	$(document).on('click', '.yes-delete', function(){
		
		nBook = $(this).attr('data-id');
		deleteBookAjax(nBook)
	
	});
	
	$(document).on('click', '.no-delete', function(){
		
		showBookAjax()
	
	});
	
});

function showDeletePrompt(nBook){
	
	var delete_html="";
	
	delete_html+="<div class='justify-content-center' id='delete-prompt'>";
	
		delete_html+="<p class='text-center'>Êtes-vous sûre de vouloir effacer ce livre?</p>";
		
		delete_html+="<div class='container justify-content-center'>";
	
			delete_html+="<button class='btn btn-danger yes-delete' data-id='" + nBook + "'>Oui</button>";
			
			delete_html+="<button class='btn btn-success no-delete'>Non</button>";
	
		delete_html+="</div>";
	
	delete_html+="</div>";
	
	$("#page-content").html(delete_html);
	
}

function deleteBookAjax(book_id){
	
	$.ajax({
			url: "/Base_de_donnees_Bibliotheque/api/book/delete.php",
			type : "POST",
			dataType : 'json',
			data : JSON.stringify({ nBook: book_id }),
			success : function(data) {
			    showBookAjax()
			},
			error: function(data, textStatus, error) {
			    console.error("getJSON failed, status: " + textStatus + ", error: "+error)
			}
		});
	
}