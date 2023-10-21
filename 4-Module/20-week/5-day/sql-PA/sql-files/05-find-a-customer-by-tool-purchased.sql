-- Your code here 
SELECT customers.first_name, customers.last_name, customers.phone_number
FROM customers
JOIN purchases ON customers.id = purchases.customer_id
JOIN tool_purchase ON purchases.id = tool_purchase.purchase_id
JOIN tools ON tool_purchase.tool_id = tools.id
WHERE tools.name = 'Pipe Cutter'
ORDER BY purchases.id DESC LIMIT 1;
