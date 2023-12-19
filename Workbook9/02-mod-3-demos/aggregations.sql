SELECT title
	, rating
FROM film
ORDER BY rating;

-- how many movies do I own?
SELECT COUNT(*) AS "Movie Count"
FROM film;

-- how many movies are PG?
SELECT COUNT(1) AS "Movie Count"
	, rating
FROM film
WHERE rating  = 'PG'
;

-- count how many movies for each rating?
SELECT COUNT(1) AS "Movie Count"
	, rating
FROM film
GROUP BY rating
;


-- count how many movies for each rating?
-- but only for ratings with 200 or more movies
SELECT COUNT(1) AS "Movie Count"
	, rating
FROM film
GROUP BY rating
HAVING COUNT(1) >= 200
;

select * from film;



-- averages
SELECT AVG(rental_rate) AS Average_Rental
	, MAX(rental_rate) AS Most_Expensive
    , MIN(rental_rate) AS Least_Expensive
FROM film;

-- what is the total time spent if I were to watch ALL movies
SELECT SUM(length)
FROM film;

--
SELECT *
FROM film;

-- most expensive replacement cost
SELECT MAX(replacement_cost)
FROM film;

-- to get the title of the movies that have the most expensive
-- replacement cost - WE MUST use a SUB-QUERY
SELECT title
	, replacement_cost
FROM film
WHERE replacement_cost = (
	SELECT MAX(replacement_cost)
	FROM film
)
;

