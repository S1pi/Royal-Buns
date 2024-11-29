CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    diets VARCHAR(255),
    price VARCHAR(50),
    name VARCHAR(255),
    description VARCHAR(255),
    photo VARCHAR(255),
    day VARCHAR(50)
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    passwrd VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phonenumber VARCHAR(255),
    user_type VARCHAR(50) NOT NULL,
    token VARCHAR(255),
    create_day TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    favourite_brgr_id INT,
    FOREIGN KEY (favourite_brgr_id) REFERENCES burgers(id)
);

CREATE TABLE restaurant (
    id INT AUTO_INCREMENT PRIMARY KEY,
    res_name VARCHAR(255),
    city VARCHAR(255),
    location VARCHAR(255),
    address VARCHAR(255),
    coordinates VARCHAR(255)  -- Oletuksena VARCHAR koordinaateille
);

CREATE TABLE res_table (
    table_id INT AUTO_INCREMENT PRIMARY KEY,
    restaurant_id INT,
    seats INT,  -- Pilkku lisätty tähän
    reserved BOOLEAN,
    FOREIGN KEY (restaurant_id) REFERENCES restaurant(id)
);

CREATE TABLE reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    reservation_time TIMESTAMP,
    table_id INT,
    restaurant_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (table_id) REFERENCES res_table(table_id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurant(id)
);

CREATE TABLE open_hours (
    restaurant_id INT,
    weekdays VARCHAR(255),
    weekends VARCHAR(255),
    FOREIGN KEY (restaurant_id) REFERENCES restaurant(id)
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
