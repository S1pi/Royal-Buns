CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    passwrd VARCHAR(255),
    user_type VARCHAR(50),
    token VARCHAR(255),
    create_day TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    favourite_brgr_id INT,
    FOREIGN KEY (favourite_brgr_id) REFERENCES burgers(id)
);

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    diets VARCHAR(255),
    price VARCHAR(50),
    name VARCHAR(255),
    description VARCHAR(255),
    photo VARCHAR(255),
    day VARCHAR(50)
);

CREATE TABLE reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    reservation_time TIMESTAMP,
    table_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (table_id) REFERENCES res_table(table_id)
);

CREATE TABLE res_table (
    table_id INT AUTO_INCREMENT PRIMARY KEY,
    seats INT,
    reserved BOOLEAN
);

CREATE TABLE carousel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    heading VARCHAR(255),
    description VARCHAR(255),
    link VARCHAR(255)
);

CREATE TABLE drinks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    diets VARCHAR(255),
    price VARCHAR(50),
    name VARCHAR(255),
    description VARCHAR(255),
    photo VARCHAR(255)
);

CREATE TABLE sides (
    id INT AUTO_INCREMENT PRIMARY KEY,
    diets VARCHAR(255),
    price VARCHAR(50),
    name VARCHAR(255),
    description VARCHAR(255),
    photo VARCHAR(255)
);


INSERT INTO users (username, passwrd, user_type, token) VALUES
('john_doe', 'password123', 'customer', 'tokenABC'),
('jane_smith', 'securepass456', 'admin', 'tokenDEF'),
('mark_brown', 'mypassword789', 'customer', 'tokenGHI'),
('Sipi', 'Sipillaontosivahvasalasana', 'superadmin', 'dnwaindwabdnoi2ew28dmawjndiuwa283weu9813ljdcniajwbndin1!!3m2j38123020mcoiawn9dopidca');

INSERT INTO burgers (diets, price, name, description, photo, day) VALUES
('vegetarian', 8.99, 'Veggie Delight', 'A delicious vegetarian burger', 'veggie_delight.jpg', 'Monday'),
('gluten-free', 10.99, 'Gluten-Free Special', 'A burger without gluten', 'gf_special.jpg', 'Wednesday'),
('none', 11.99, 'Classic Beef', 'A classic beef burger', 'classic_beef.jpg', 'Friday'),
('none', 12.45, 'Extra Beef', 'A EXTRA classic beef burger', 'e_classic_beef.jpg', 'everyday');

INSERT INTO res_table (table_id, seats, reserved) VALUES
(1, 4, TRUE),
(2, 2, TRUE),
(3, 6, FALSE);

INSERT INTO reservation (user_id, reservation_time, table_id) VALUES
(1, '2024-11-15 18:00:00', 1),
(2, '2024-11-16 19:30:00', 2),
(3, '2024-11-17 20:00:00', 3);


INSERT INTO carousel (id, heading, description, link) VALUES
(1, 'Welcome to Royal Buns', 'The best burgers in town!', '/menu'),
(2, 'Try Our New Drinks', 'Refreshing beverages for every taste', '/drinks'),
(3, 'Reserve Your Table', 'Book a table in advance', '/reserve');

INSERT INTO drinks (diets, price, name, description, photo) VALUES
('non-alcoholic', 2.99, 'Lemonade', 'Freshly squeezed lemonade', 'lemonade.jpg'),
('non-alcoholic', 3.99, 'Iced Tea', 'Cool and refreshing iced tea', 'iced_tea.jpg'),
('alcoholic', 5.99, 'Craft Beer', 'Locally brewed craft beer', 'craft_beer.jpg');

INSERT INTO sides (diets, price, name, description, photo) VALUES
('vegan', 3.50, 'French Fries', 'Crispy golden fries', 'fries.jpg'),
('none', 4.00, 'Onion Rings', 'Crispy onion rings', 'onion_rings.jpg'),
('vegetarian', 3.75, 'Mozzarella Sticks', 'Cheesy mozzarella sticks', 'mozzarella_sticks.jpg');



-- Päivitetään käyttäjän suosikki burgeri

UPDATE users SET favourite_brgr_id = 1 WHERE username = 'Sipi';

-- Muokataan burgerin hintaa

UPDATE burgers SET price = '69.69' WHERE name = 'Veggie Delight';

-- Poistetaan käyttäjä (Käytetään id että username varmuudenvuoksi)
-- Samalla täytyy poistaa kaikki käyttäjän pöytävaraukset jotta käyttäjä voidaan poistaa
DELETE FROM reservation WHERE user_id = 3;
-- TÄRKEÄ MUISTAA JÄRJESTYS
DELETE FROM users WHERE id = 3 AND username = "mark_brown";

-- Haetaan kaikki käyttäjät ja heidän suosikki burgerinsa
SELECT u.username, b.name AS favourite_burger FROM users u JOIN burgers b ON u.favourite_brgr_id = b.id;

-- Haetaan kaikki varaukset ja niiden käyttäjätiedot
SELECT r.id AS Reservation_ID, u.username, r.reservation_time, t.seats
FROM reservation r
JOIN users u ON r.user_id = u.id
JOIN res_table t ON r.table_id = t.table_id;

-- Kaikki varaukset tietylle päivälle
SELECT * FROM reservation WHERE DATE(reservation_time) = '2024-11-15';

