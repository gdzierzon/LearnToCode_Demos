SELECT count(*) AS AllCountries
	, count(IndepYear) AS IndependentCountries
    , count(1) AS ALL_Countries
FROM country;

SELECT *
FROM country;

SELECT count(*) AS Cities
	, count(DISTINCT CountryCode) AS Countries
FROM city;