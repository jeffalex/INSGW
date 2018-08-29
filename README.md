# INGSW

#Install dependencies
 * `npm install`

#Run sql code
### if you want to use the same user at `/config/db` run this mysql sql
 * `USE mysql;`
 * `CREATE USER 'eventuser'@'localhost' IDENTIFIED BY '12345678';`
 * `GRANT ALL PRIVILEGES ON * . * TO 'eventuser'@'localhost';`
 * `FLUSH PRIVILEGES;`

### create the database
 * `CREATE DATABASE eventdb;`
 * `USE eventdb;`

 * `CREATE TABLE users( id int PRIMARY KEY, username varchar(50) NOT NULL, password varchar(225) NOT NULL);`
 * `CREATE TABLE events(id int PRIMARY KEY NOT NULL, title varchar(50) NOT NULL, description int, location int, date time,image varchar(225), featured boolean );`
 * `ALTER TABLE users MODIFY id int(11) NOT NULL auto_increment;`

#Then run
 * `npm run dev`

#Methdos

## test
  `POST` `/test` a test method here defined to ensure the app is running correctly
  with payload
  `{
    token: tokenHashHere
    }`

##login
  `POST` `/login` if user registered then send this payload `{username, password}`

##createEvent
`POST` to create an event just this payload to `/event`
`{
  title,
  description,
  location,
  date,
  image,
  featured
  }` as a json

##updateEvent
  `PUT` `/event`, here goes the same payload defined up ^, so just send
  `{
    id,
    title,
    description,
    location,
    date,
    image,
    featured,
    token,
    }`, in this case we need to provide the token hash obtained from `/login` too

##find an event
  `GET` `/event/:id`, brings the event by id

##delete event
  `DELETE` `/event/:id`, detele the event and we need to send a payload
  `{
    id,
    token
    }`
end
