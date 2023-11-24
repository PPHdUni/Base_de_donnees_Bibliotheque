begin transaction;
set search_path to company_sem2;

insert into book(nameBook,nameAuthor,year) values 
 ('Maria Chapdelaine','Louis Hémon',1916),
 ('Un homme et son péché','Claude-Henri Grignon',1933),
 ('Kamouraska','Anne Hébert',1970),
 ('Kukum','Michel Jean',2019),
 ('Le Survenant','Germaine Guèvremont',1945),
 ('Prochain épisode','Hubert Aquin',1965),
 ('Agakuk','Yves Thériault',1958),
 ('Maryse','Francine Noël',1983),
 ('Nikolski','Nicolas Dickner',2005),
 ('Passages','Émile Ollivier',1991);

insert into student(fnameStudent,lnameStudent,year) values
 ('Clara','Houde',7),
 ('Samuel','Gagnant',9),
 ('Charles','Guy',10),
 ('Anne','Fortin',8),
 ('Félix','Duval',9),
 ('Louis','Gagnant',12),
 ('Samuel','Thériault',11),
 ('Gabriel','Tremblay',11),
 ('Nicole','Lionel',7),
 ('Jean-Ollivier','Rodrigue',12);

insert into rental(nBk,nStud,end_date) values
 (1,4,'2023-11-30'),
 (3,3,'2023-12-04'),
 (5,8,'2023-11-22'),
 (7,9,'2023-12-13'),
 (9,3,'2023-11-28');

commit;