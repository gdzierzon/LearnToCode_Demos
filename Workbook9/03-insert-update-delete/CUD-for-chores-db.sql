use chores;


-- INSERT a new person
INSERT INTO person (person_name)
VALUES ('Kylee');

-- INSERT a new task
INSERT INTO task 
(
	person_id -- person_id is a foreign key
    , task_name
)
VALUES
(
	11 -- 11 MUST exist in the person table
	, 'Mow the Lawn'
)
;

-- insert a task without assigning a person
INSERT INTO task (task_name)
VALUES ('Clean Room')
	 , ('Cook Breakfast')
	 , ('Cook Lunch')
	 , ('Cook Dinner')
	;
    
-- update a task - assign task to Kylee
SELECT *
FROM task
WHERE task_id = 1007
;

UPDATE task
SET person_id = 12
	, task_name = CONCAT(task_name, ' - white glove')
WHERE task_id = 1007
;


-- delete duplicate tasks
SELECT *
FROM task
WHERE task_id > 1010
;

DELETE FROM task
WHERE task_id > 1010
;

-- kylee moved out
SELECT *
FROM person
WHERE person_id = 12
;

-- can't delete Kylee as long as he has a task assigned
DELETE FROM person
WHERE person_id = 12
;


SELECT *
FROM task
WHERE person_id = 12
;

-- remove Kylees id from the task
UPDATE task
SET person_id = NULL
WHERE person_id = 12
;

-- now I can delete Kylee from the database
DELETE FROM person
WHERE person_id = 12
;














