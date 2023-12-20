use northwind;

-- join all tables from customer to category - builds a giant source dataset
SELECT *
FROM customers AS c
INNER JOIN orders AS o
	ON c.CustomerID = o.CustomerId
INNER JOIN `order details` AS od
	ON o.OrderId = od.OrderId
INNER JOIN products AS p
	ON od.ProductId = p.ProductID
INNER JOIN categories AS cat
	ON p.CategoryId =cat.CategoryId
;

-- get customer name and any categories that they have purchased products from
SELECT DISTINCT c.CompanyName
	, cat.CategoryName
FROM customers AS c
INNER JOIN orders AS o
	ON c.CustomerID = o.CustomerId
INNER JOIN `order details` AS od
	ON o.OrderId = od.OrderId
INNER JOIN products AS p
	ON od.ProductId = p.ProductID
INNER JOIN categories AS cat
	ON p.CategoryId =cat.CategoryId
ORDER BY c.CompanyName
	, cat.CategoryName
;