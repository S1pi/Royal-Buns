-- THIS IS OLD VERSION DO NOT USE THIS


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
