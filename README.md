# INGSW

#Intall dependencies
 * `npm install`

#Run sql code
 * `USE mysql;`
 * `CREATE USER 'eventuser'@'localhost' IDENTIFIED BY '12345678';`
 * `GRANT ALL PRIVILEGES ON * . * TO 'eventuser'@'localhost';`
 * `FLUSH PRIVILEGES;`

 * `CREATE DATABASE eventdb;
 * `USE eventdb;`

 * `CREATE TABLE users( id int PRIMARY KEY, username varchar(50) NOT NULL, password varchar(225) NOT NULL);`

 * `CREATE TABLE events(id int PRIMARY KEY NOT NULL, title varchar(50) NOT NULL, description int, location int, date time,image varchar(225), featured boolean );`
 * `ALTER TABLE users MODIFY id int(11) NOT NULL auto_increment;`

#Then run
 * `npm run dev`
