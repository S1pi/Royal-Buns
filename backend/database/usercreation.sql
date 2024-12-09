CREATE USER 'user'@'localhost' IDENTIFIED BY 'pw';
GRANT ALL PRIVILEGES ON `royal_buns`.* TO 'user'@'localhost';
FLUSH PRIVILEGES;

CREATE USER 'royalBunsAdminRootTesti'@'localhost' IDENTIFIED BY 'salasana';
GRANT ALL PRIVILEGES ON `royal_buns`.* TO 'royalBunsAdminRoot'@'localhost';
FLUSH PRIVILEGES;


CREATE USER 'royalBunsAdminRootTesti'@'localhost' IDENTIFIED BY 'salasana';
GRANT ALL PRIVILEGES ON `royal_buns`.* TO 'royalBunsAdminRootTesti'@'localhost';
FLUSH PRIVILEGES;
