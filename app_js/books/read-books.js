$(document).ready(function(){
 
    data = initBookList();
	showBookList(data)
    
    $(document).on('click', '.book-list-button', function(){
	showBookList(data)
    });

    
});

function initBookList(){
 
    const book_list = []
	book_list.push({"nameBook":"Maria Chapdelaine", "nameAuthor":"Louis Hémon", "year":1916})
	book_list.push({"nameBook":"Un homme et son péché", "nameAuthor":"Claude-Henri Grignon", "year":1933})
	book_list.push({"nameBook":"Kamouraska", "nameAuthor":"Anne Hébert", "year":1970})
	book_list.push({"nameBook":"Kukum", "nameAuthor":"Michel Jean", "year":2019})
	book_list.push({"nameBook":"Le Survenant", "nameAuthor":"Germaine Guèvremont", "year":1945})
	
	return book_list
};

function showBookList(data){
 
   var book_list_html="";
   
   book_list_html+="<table>";
   
   book_list_html+="<tr>";
   book_list_html+="<th>Titre</th>";
   book_list_html+="<th>Auteur</th>";
   book_list_html+="<th>Année</th>";
   book_list_html+="</tr>";
   
   $.each(data, function(index, book) {
	   
		book_list_html+="<tr>";
	
		book_list_html+="<td>" + book.nameBook + " </td>";
        book_list_html+="<td>" + book.nameAuthor + " </td>";
        book_list_html+="<td>" + book.year + "</td>";
		
		book_list_html+="</tr>";
	   
   });
   
   book_list_html+="</table>";
   
   $("#page-content").html(book_list_html);
   
};