-- Your code here 
SELECT tools.name, tool_purchase.quantity
FROM tools
JOIN tool_purchase
ON tool_purchase.tool_id = tools.id
ORDER BY tools.name, tool_purchase.quantity;