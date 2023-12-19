-- this is a single line comment
/*
this is
a multi-line
comment
*/

-- 3. get the id, name and price of every product
SELECT ProductId
	, ProductName
    , UnitPrice
FROM products
ORDER BY -UnitPrice
;

-- 4. what customers do we have in Germany (company name only)
SELECT CompanyName AS Customer
FROM customers
WHERE Country = 'Germany'
;


