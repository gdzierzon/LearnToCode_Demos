USE sys;

DROP DATABASE IF EXISTS chores;

CREATE DATABASE chores;

USE chores;


/***********************************
Create Tables
************************************/
CREATE TABLE person
(
	person_id INT NOT NULL AUTO_INCREMENT,
    person_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (person_id)
);

CREATE TABLE task
(
	task_id INT NOT NULL AUTO_INCREMENT,
    person_id INT NULL,
    task_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (task_id),
    FOREIGN KEY (person_id) REFERENCES person (person_id)
) AUTO_INCREMENT = 1001;


/***********************************
Insert Data
************************************/
INSERT INTO person (person_name)
VALUES ('Marte''')
	 , ('David')
	 , ('Katrina');
     
INSERT INTO task (person_id, task_name)
VALUES (NULL, 'mop the kitchen floor')
	 , (2, 'do the dishes')
     , (1, 'mow the lawn')
     , (NULL, 'change oil');
