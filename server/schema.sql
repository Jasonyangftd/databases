CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int(11) not null auto_increment,
  /*userId int(3),*/
  text varchar(1000),
  username varchar(100),
  PRIMARY KEY(id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
   /*Describe your table here.*/
  id int(3) not null auto_increment,
  username varchar(15),
  PRIMARY KEY(id)

);

/*
-- CREATE TABLE joiner select users.id as userID, messages.id as messageID, username, message from users, text where users.id = messages.id;


  Execute this file from the command line by typing:
 *    mysql -u root < ../server/schema.sql
 *  to create the database and the tables.

--insert into TABLE (col1, col2) values ('value1', 'value2');
*/
