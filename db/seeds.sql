-- In this file, write insert queries to populate the burgers 
-- table with at least three entries.
USE burgers_db;
INSERT INTO burgers(burger_name, devoured)
VALUES ("hamburger", false), ("cheeseburger", false), ("veggieburger", false);