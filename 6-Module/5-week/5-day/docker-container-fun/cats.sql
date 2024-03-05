CREATE TABLE cats
(
  id SERIAL PRIMARY KEY,
  name VARCHAR (255) NOT NULL,
  color VARCHAR (255) NOT NULL,
  breed VARCHAR (255) NOT NULL
);

-- cat seeding 
INSERT INTO
  cats (name, color, breed)
VALUES
  ('Jet', 'black', 'Mixed Breed'),
  ('Freyja', 'Orange', 'Unknown');