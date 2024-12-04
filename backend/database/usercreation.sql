CREATE USER 'user'@'localhost' IDENTIFIED BY 'pw';
GRANT ALL PRIVILEGES ON `royal_buns`.* TO 'user'@'localhost';
FLUSH PRIVILEGES;
