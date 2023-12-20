use chores;

-- Error Code: 1052. Column 'person_id' in field list is ambiguous

-- 1. inner join includes ONLY rows that are related (FROM BOTH tables)
SELECT p.person_id
	, p.person_name
    , t.task_name
FROM person AS p
INNER JOIN task AS t 
	ON p.person_id = t.person_id
;


-- 2. LEFT OUTER JOIN includes ALL rows from the left table
-- but only related rows from the right table
SELECT *
FROM person AS p
LEFT OUTER JOIN task AS t
	ON p.person_id = t.person_id
;


-- 3. RIGTH OUTER JOIN includes ALL rows from the right table
-- but only related rows from the left table
SELECT *
FROM person AS p
RIGHT OUTER JOIN task AS t
	ON p.person_id = t.person_id
;
    
    
-- 4. FULL OUTER JOIN includes ALL rows from both tables
SELECT *
FROM person AS p
LEFT OUTER JOIN task AS t
	ON p.person_id = t.person_id

UNION -- this merges and removes duplicates
-- UNION ALL -- this just combines and does not remove duplicates

SELECT *
FROM person AS p
RIGHT OUTER JOIN task AS t
	ON p.person_id = t.person_id
;


