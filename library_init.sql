begin transaction;
DROP SCHEMA IF EXISTS library_project CASCADE;
create schema library_project;
set search_path to library_project;

create domain year_num as integer
 check (value >= 1) and (value <= 6);

create table book (
  nBook serial primary key,
  nameBook text not null,
  nAut integer,
  foreign key (nAut) references author(nAuthor)
);

create table author (
  nAuthor serial primary key,
  nameAuthor text not null
);

create table student (
  nStudent serial primary key,
  nameStudent text not null,
  year year_num
);

create table rental (
  nRental serial primary key,
  nBk integer,
  nStud integer,
  foreign key (nBk) references book(nBook)
  foreign key (nStud) references student(nStudent)
);

commit;