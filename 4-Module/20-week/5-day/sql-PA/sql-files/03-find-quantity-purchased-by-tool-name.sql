-- Your code here 
SELECT tools.name, tools.price, tool_purchase.quantity
FROM tools
JOIN tool_purchase ON tools.id = tool_purchase.tool_id
WHERE tools.name Like 'Pipe%'
ORDER BY tools.name, tool_purchase.quantity;