START TRANSACTION;

CREATE TABLE `books` (
  `nBook` bigint(20) UNSIGNED NOT NULL,
  `nameBook` text NOT NULL,
  `nameAuthor` text NOT NULL,
  `year` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `books`
  ADD PRIMARY KEY (`nBook`),
  ADD UNIQUE KEY `nBook` (`nBook`);

ALTER TABLE `books`
  MODIFY `nBook` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

-- create table student (
--   nStudent serial primary key,
--   fnameStudent text not null,
--   lnameStudent text not null,
--   year year_stud_num
-- );

-- create table rental (
--   nRental serial primary key,
--   nBk integer,
--   nStud integer,
--   end_date text not null,
--   foreign key (nBk) references book(nBook),
--   foreign key (nStud) references student(nStudent)
-- );

COMMIT;