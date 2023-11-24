begin transaction;
DROP SCHEMA IF EXISTS library_project CASCADE;
create schema library_project;
set search_path to library_project;

create domain year_bk_num as integer
 check (value <= 2023);

create domain year_stud_num as integer
 check (value >= 1) and (value <= 6);

create table book (
  nBook serial primary key,
  nameBook text not null,
  nameAuthor text not null,
  year year_bk_num
);

create table student (
  nStudent serial primary key,
  fnameStudent text not null,
  lnameStudent text not null,
  year year_stud_num
);

create table rental (
  nRental serial primary key,
  nBk integer,
  nStud integer,
  end_date text not null,
  foreign key (nBk) references book(nBook),
  foreign key (nStud) references student(nStudent)
);

commit;