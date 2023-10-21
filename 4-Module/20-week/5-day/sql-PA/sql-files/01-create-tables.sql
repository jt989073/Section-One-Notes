-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS tool_purchase;
DROP TABLE IF EXISTS purchases;
DROP TABLE IF EXISTS tools;
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS customers;


-- Your code here 
CREATE TABLE customers(
id INTEGER PRIMARY KEY AUTOINCREMENT,
first_name VARCHAR(100),
last_name VARCHAR(100),
phone_number NUMERIC(10, 0)
);

CREATE TABLE departments(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR(100) NOT NULL
);

CREATE TABLE tools(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR(100) NOT NULL,
price NUMERIC(4, 2),
department_id INTEGER,
FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE purchases(
id INTEGER PRIMARY KEY AUTOINCREMENT,
customer_id INTEGER,
FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);

CREATE TABLE tool_purchase(
id INTEGER PRIMARY KEY AUTOINCREMENT,
purchase_id INTEGER NOT NULL,
tool_id INTEGER NOT NULL,
quantity INTEGER DEFAULT 1,
FOREIGN KEY (purchase_id) REFERENCES purchases(id) ON DELETE CASCADE,
FOREIGN KEY (tool_id) REFERENCES tools(id)
);