SET NAMES 'utf8mb4';
SET CHARACTER SET 'utf8mb4';
SET COLLATION_CONNECTION = 'utf8mb4_unicode_ci';

DROP DATABASE IF EXISTS royal_buns;

CREATE DATABASE royal_buns CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE royal_buns;


CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    diets VARCHAR(255),
    price VARCHAR(50),
    name VARCHAR(255),
    description JSON CHECK (JSON_VALID(description)),
    photo VARCHAR(255),
    day VARCHAR(50)
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    passwrd VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phonenumber VARCHAR(255),
    user_type VARCHAR(50) NOT NULL,
    -- token TEXT, -- Tämä on turha, koska sitä ei käytetä (säilytetään varmuudeksi)
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
    coordinates JSON CHECK (JSON_VALID(coordinates))
);

CREATE TABLE res_table (
    table_id INT AUTO_INCREMENT PRIMARY KEY,
    restaurant_id INT,
    seats INT,  -- Pilkku lisätty tähän
    -- reserved BOOLEAN DEFAULT false, -- Tämä on turha, koska sitä ei käytetä (säilytetään varmuudeksi)
    FOREIGN KEY (restaurant_id) REFERENCES restaurant(id)
);

CREATE TABLE reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    reservation_date DATE,
    start_time TIME,
    end_time TIME,
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
    description JSON CHECK (JSON_VALID(description)),
    photo VARCHAR(255)
);

CREATE TABLE sides (
    id INT AUTO_INCREMENT PRIMARY KEY,
    diets VARCHAR(255),
    price VARCHAR(50),
    name VARCHAR(255),
    description JSON CHECK (JSON_VALID(description)),
    photo VARCHAR(255)
);

CREATE TABLE sliders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    diets VARCHAR(255),
    price VARCHAR(50),
    name VARCHAR(255),
    description JSON CHECK (JSON_VALID(description)),
    photo VARCHAR(255)
);

CREATE TABLE contact_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    message VARCHAR(255)
);


INSERT INTO restaurant (id, res_name, city, location, address, coordinates)
    VALUES (1, "Royal Buns Helsinki", "Helsinki", "Sisäänkäynti sisäpihan puolella", "Annankatu 8",'{"longitude": 24.94079, "latitude": 60.16407}'),
           (2, "Royal Buns Espoo", "Espoo", "Kauppakeskus Sello 3. Kerros", "Leppävaarankatu 3",'{"longitude": 24.81083, "latitude": 60.21834}'),
           (3, "Royal Buns Tampere", "Tampere", "Kauppakeskus Ratina", "Vuolteenkatu 1",'{"longitude": 23.76799, "latitude": 61.49311}'),
           (4, "Royal Buns Rovaniemi", "Rovaniemi", "Sisäänkäynti lordin aukion puolella", "Koskikatu 18",'{"longitude": 25.72978, "latitude": 66.50292}');


INSERT INTO open_hours (restaurant_id, weekdays, weekends)
    VALUES (1, '10:00-22:00', '12:00-23:00'),
           (2, '10:00-21:00', '12:00-21:00'),
           (3, '12:00-20:00', '12:00-23:00'),
           (4, '12:00-20:00', '12:00-23:00');

INSERT INTO res_table (table_id, restaurant_id, seats)
    VALUES
    -- Ravintola 1
          (1, 1, 2), (2, 1, 2), (3, 1, 2), (4, 1, 2), (5, 1, 2),
          (6, 1, 2), (7, 1, 2), (8, 1, 2), (9, 1, 2), (10, 1, 2),
          (11, 1, 6), (12, 1, 6), (13, 1, 6), (14, 1, 6), (15, 1, 6), (16, 1, 6),
          (17, 1, 8), (18, 1, 8), (19, 1, 8), (20, 1, 8), (21, 1, 8),

    -- Ravintola 2
          (22, 2, 2), (23, 2, 2), (24, 2, 2), (25, 2, 2), (26, 2, 2),
          (27, 2, 2), (28, 2, 2), (29, 2, 2), (30, 2, 2), (31, 2, 2),
          (32, 2, 6), (33, 2, 6), (34, 2, 6), (35, 2, 6), (36, 2, 6), (37, 2, 6),
          (38, 2, 8), (39, 2, 8), (40, 2, 8), (41, 2, 8), (42, 2, 8),

    -- Ravintola 3
          (43, 3, 2), (44, 3, 2), (45, 3, 2), (46, 3, 2), (47, 3, 2),
          (48, 3, 2), (49, 3, 2), (50, 3, 2), (51, 3, 2), (52, 3, 2),
          (53, 3, 6), (54, 3, 6), (55, 3, 6), (56, 3, 6), (57, 3, 6), (58, 3, 6),
          (59, 3, 8), (60, 3, 8), (61, 3, 8), (62, 3, 8), (63, 3, 8),

    -- Ravintola 4
          (64, 4, 2), (65, 4, 2), (66, 4, 2), (67, 4, 2), (68, 4, 2),
          (69, 4, 2), (70, 4, 2), (71, 4, 2), (72, 4, 2), (73, 4, 2),
          (74, 4, 6), (75, 4, 6), (76, 4, 6), (77, 4, 6), (78, 4, 6), (79, 4, 6),
          (80, 4, 8), (81, 4, 8), (82, 4, 8), (83, 4, 8), (84, 4, 8);



-- All burgers are inserted into the database
-- Need still to add the photos to the database
-- old one without photos just in case

-- INSERT INTO burgers (id, diets, price, name, description, photo, day)
-- VALUES
--   (1, 'G,L', '14.50', 'Royal Smash', '{"FI": "Smash-tyylinen hampurilainen rapeilla reunoilla, kaksoispihvit, sulatettu cheddar ja kotitekoinen kirpeä kastike.", "EN": "Smash-style burger with crispy edges, double beef patties, melted cheddar, and house-made tangy sauce."}', 'royalSmash.jpeg', 'everyday'),
--   (2, 'G', '13.90', 'Bacon BBQ Delight', '{"FI": "Mehevä naudanlihapihvi, savustettu BBQ-kastike, rapea pekoni ja rouskuvat sipulirenkaat.", "EN": "Juicy beef patty, smoky BBQ sauce, crispy bacon, and crunchy onion rings."}', 'BBQ.jpeg', 'everyday'),
--   (3, 'L', '12.90', 'Crispy Chicken Classic', '{"FI": "Rapea kanafilee, salaatti, tomaatti ja kermaista valkosipulimajoneesia.", "EN": "Crispy chicken fillet, lettuce, tomato, and a creamy garlic mayo."}', 'crispyChicken.jpeg', 'everyday'),
--   (4, 'G', '14.90', 'Blue BBQ Chicken', '{"FI": "Grillattu kanafilee, joka on päällystetty vahvalla sinihomejuustolla, BBQ-kastikkeella ja tuoreella rucolalla.", "EN": "Grilled chicken fillet topped with tangy blue cheese, BBQ sauce, and fresh arugula."}', 'blueCheese.jpeg', 'everyday'),
--   (5, 'V', '12.50', 'Veggie Garden Delight', '{"FI": "Mehevä kasvisburgeri grillatulla kasvispihvillä, tuoreilla vihanneksilla ja basilika-aiolilla.", "EN": "A hearty vegetarian burger with a grilled veggie patty, fresh greens, and basil aioli."}', 'vege.jpeg', 'everyday'),
--   (6, 'V,G', '13.90', 'Grilled Halloumi Burger', '{"FI": "Grillattua halloumi-juustoa, aurinkokuivattuja tomaatteja, avokadoa ja balsamico-glaseerausta.", "EN": "Grilled halloumi cheese, sun-dried tomatoes, avocado, and a balsamic glaze."}', 'halloumi.jpeg', 'everyday'),
--   (7, 'G,L', '13.50', 'Rustic Rye Burger', '{"FI": "Mehevä ruisburgeri naudanlihapihvillä, karamellisoiduilla sipuleilla, säilötyllä kurkulla ja sinappimajoneesilla.", "EN": "A hearty rye burger with a beef patty, caramelized onions, pickled cucumber, and mustard mayo."}', '', 'monday'),
--   (8, 'G,L', '14.90', 'Crispy Fish Delight', '{"FI": "Kultaisella paneroinnilla paistettua kalafileetä, salaattia, tartaarkastiketta ja tuoretta tilliä briossileivällä.", "EN": "Golden-battered fish fillet with lettuce, tartar sauce, and fresh dill on a brioche bun."}', '', 'tuesday'),
--   (9, 'G,L', '15.90', 'Double Bacon Smash', '{"FI": "Kaksi rapeapintaista smash-pihviä, tupla cheddar-juustoa, rapeaa pekonia ja savustettua BBQ-majoneesia.", "EN": "Two crispy-edged smash patties, double cheddar, crispy bacon, and smoky BBQ mayo."}', '', 'wednesday'),
--   (10, 'G,L', '13.90', 'Chicken Avocado Bliss', '{"FI": "Grillattu kanafilee, kermaista avokadoa, salaattia, tomaattia ja valkosipulimajoneesia.", "EN": "Grilled chicken breast, creamy avocado slices, lettuce, tomato, and garlic aioli."}', '', 'thursday'),
--   (11, 'L', '14.50', 'Japanese Panko Chicken', '{"FI": "Rapea panko-muroilla kuorrutettu kana, kiinalaista kaalia, makeaa chili-kastiketta ja seesamimajoneesia.", "EN": "Crispy panko-breaded chicken, Chinese cabbage, sweet chili sauce, and sesame mayo."}', '', 'friday'),
--   (12, 'G', '14.90', 'Smokey BBQ Burger', '{"FI": "Naudanlihapihvi, marinoitu punasipuli, savustettu BBQ-kastike ja sulatettua gouda-juustoa.", "EN": "Beef patty with marinated red onions, smoky BBQ sauce, and melted gouda cheese."}', '', 'saturday'),
--   (13, 'G,L', '13.90', 'Sunday Roast Burger', '{"FI": "Hitaasti paistettua naudanrintaa, piparjuurimajoneesia, karamellisoituja sipuleita ja rucolaa paahdetulla briossileivällä.", "EN": "Slow-roasted beef brisket, horseradish mayo, caramelized onions, and arugula on a toasted brioche bun."}', '', 'sunday');

INSERT INTO burgers (id, diets, price, name, description, photo, day) VALUES
(1, 'G,L', '14.50', 'Royal Smash', '{"FI": "Smash-tyylinen hampurilainen rapeilla reunoilla, kaksi naudanpihviä, sulatettua cheddaria ja talon valmistama kastike.", "EN": "Smash-style burger with crispy edges, double beef patties, melted cheddar, and house-made tangy sauce."}', 'img/royalSmash.jpeg', 'everyday'),
(2, 'G', '13.90', 'Bacon BBQ Delight', '{"FI": "Mehevä naudanpihvi, savunmakuinen BBQ-kastike, rapea pekoni ja rapeat sipulirenkaat.", "EN": "Juicy beef patty, smoky BBQ sauce, crispy bacon, and crunchy onion rings."}', 'img/BBQ.jpeg', 'everyday'),
(3, 'L', '12.90', 'Crispy Chicken Classic', '{"FI": "Rapea kananfilee, salaattia, tomaattia ja kermainen valkosipulimajoneesi.", "EN": "Crispy chicken fillet, lettuce, tomato, and a creamy garlic mayo."}', 'img/crispyChicken.jpeg', 'everyday'),
(4, 'G', '14.90', 'Blue Cheese BBQ Chicken', '{"FI": "Grillattu kananfilee sinihomejuustolla, BBQ-kastikkeella ja tuoreella rucolalla.", "EN": "Grilled chicken fillet topped with tangy blue cheese, BBQ sauce, and fresh arugula."}', 'img/blueCheese.jpeg', 'everyday'),
(5, 'V', '12.50', 'Veggie Garden Delight', '{"FI": "Täyttävä kasvishampurilainen grillatulla kasvispihvillä, tuoreilla vihanneksilla ja basilika-aiolilla.", "EN": "A hearty vegetarian burger with a grilled veggie patty, fresh greens, and basil aioli."}', 'img/vege.jpeg', 'everyday'),
(6, 'V,G', '13.90', 'Grilled Halloumi Burger', '{"FI": "Grillattu halloumijuusto, aurinkokuivattuja tomaatteja, avokadoa ja balsamico-glaseeraus.", "EN": "Grilled halloumi cheese, sun-dried tomatoes, avocado, and a balsamic glaze."}', 'img/halloumi.jpeg', 'everyday'),
(7, 'G,L', '13.50', 'Rustic Rye Burger', '{"FI": "Ruisleipäinen hampurilainen naudanpihvillä, karamellisoiduilla sipuleilla, säilötyllä kurkulla ja sinappimajoneesilla.", "EN": "A hearty rye burger with a beef patty, caramelized onions, pickled cucumber, and mustard mayo."}', 'img/rustic.jpeg', 'monday'),
(8, 'G,L', '14.90', 'Crispy Fish Delight', '{"FI": "Kultaisessa taikinassa paistettu kalafile, salaattia, tartarkastiketta ja tuoretta tilliä briossisämpylällä.", "EN": "Golden-battered fish fillet with lettuce, tartar sauce, and fresh dill on a brioche bun."}', 'img/fish.jpeg', 'tuesday'),
(9, 'G,L', '15.90', 'Double Bacon Smash', '{"FI": "Kaksi smash-pihviä, tuplacheddaria, rapeaa pekonia ja savunmakuista BBQ-majoneesia.", "EN": "Two crispy-edged smash patties, double cheddar, crispy bacon, and smoky BBQ mayo."}', 'img/bacon.jpeg', 'wednesday'),
(10, 'G,L', '13.90', 'Chicken Avocado Bliss', '{"FI": "Grillattu kananrinta, kermainen avokado, salaattia, tomaattia ja valkosipuli-aiolia.", "EN": "Grilled chicken breast, creamy avocado slices, lettuce, tomato, and garlic aioli."}', 'img/chickenAvocado.jpeg', 'thursday'),
(11, 'L', '14.50', 'Japanese Panko Chicken', '{"FI": "Rapea panko-leivitetty kana, kiinankaali, makea chilikastike ja seesamimajoneesi.", "EN": "Crispy panko-breaded chicken, Chinese cabbage, sweet chili sauce, and sesame mayo."}', 'img/panko.jpeg', 'friday'),
(12, 'G', '14.90', 'Smokey BBQ Burger', '{"FI": "Naudanpihvi marinoiduilla punasipuleilla, savunmakuista BBQ-kastiketta ja sulatettua goudaa.", "EN": "Beef patty with marinated red onions, smoky BBQ sauce, and melted gouda cheese."}', 'img/BBQ.jpeg', 'saturday'),
(13, 'G,L', '13.90', 'Sunday Roast Burger', '{"FI": "Hitaasti paistettua naudanrintaa, piparjuurimajoneesia, karamellisoituja sipuleita ja rucolaa paahdetulla briossileivällä.", "EN": "Slow-roasted beef brisket, horseradish mayo, caramelized onions, and arugula on a toasted brioche bun."}', 'img/sunday.jpeg', 'sunday');


INSERT INTO drinks (id, diets, price, name, description, photo) VALUES
(1, 'basic', '3.99', 'Classic Coke', '{"FI": "Coca-Colan ajaton maku, tarjoiltuna täydellisen viileänä.", "EN": "The timeless taste of Coca-Cola, served chilled to perfection."}', 'img/cola.jpeg'),
(2, 'basic', '4.49', 'Golden Citrus Elixir', '{"FI": "Tuorepuristettu appelsiinimehu, täynnä eloisia sitrusmakuja.", "EN": "Freshly squeezed orange juice, bursting with vibrant citrus flavors."}', 'img/orangeJuice.jpeg'),
(3, 'basic', '4.99', 'Royal Lemonade', '{"FI": "Raikas sitruunasekoitus, jossa on ripaus minttua, kuninkaallisille sopivaa.", "EN": "A refreshing blend of lemons and a hint of mint, fit for royalty."}', 'img/lemonade.jpeg'),
(4, 'basic', '3.99', 'Imperial Iced Tea', '{"FI": "Viilennetty jäätee, jossa on ripaus sitruunaa, keisareiden juoma.", "EN": "Chilled iced tea with a touch of lemon, a drink of emperors."}', 'img/iceTea.jpeg'),
(5, 'basic', '2.99', 'Sparkling Crystal Water', '{"FI": "Puhdas hiilihapotettu vesi, yhtä kirkasta ja virkistävää kuin vuoristolähde.", "EN": "Pure carbonated water, as clear and refreshing as a mountain spring."}', 'img/sparklingWater.jpeg'),
(6, 'basic', '5.99', 'Velvet Milkshake', '{"FI": "Kermainen pirtelö, jossa on valintasi mukaan herkullisia makuja, todellinen nautinto.", "EN": "A creamy milkshake with your choice of gourmet flavors, a true indulgence."}', 'img/milkShake.jpeg'),
(7, 'alcoholic', '19.99', 'Royal Red Wine', '{"FI": "Lasillinen hienostunutta punaviiniä, kypsytetty täydellisyyteen.", "EN": "A glass of exquisite red wine, aged to perfection."}', 'img/redWine.jpeg'),
(8, 'alcoholic', '8.99', 'Golden Ale', '{"FI": "Laadukas kultainen ale, jossa on täyteläinen ja pehmeä maku.", "EN": "A premium golden ale with a rich, smooth taste."}', 'img/ale.jpeg'),
(9, 'alcoholic', '29.99', 'Dom Pérignon Vintage', '{"FI": "Ylellisyyden huipentuma, tämä vintage-samppanja tarjoaa vertaansa vailla olevan makuelämyksen.", "EN": "The epitome of luxury, this vintage champagne offers an unparalleled taste experience."}', 'img/champagne.jpeg');

INSERT INTO sliders (id, name, diets, description, photo, price) VALUES
(1, 'Mini Classic Slider', 'G,L', '{"FI": "Mehevä naudanpihvi cheddarjuustolla, salaatilla ja tomaatilla.", "EN": "Juicy beef patty with cheddar cheese, lettuce, and tomato."}', 'img/classicSlider.jpeg', '5.99'),
(2, 'Spicy Mini Fiesta', 'G,L', '{"FI": "Maukas slider jalapeñoilla, tulisella kastikkeella ja pepper jack -juustolla.", "EN": "A zesty slider with jalapeños, spicy sauce, and pepper jack cheese."}', 'img/spicySlider.jpeg', '6.49'),
(3, 'BBQ Mini Bliss', 'G,L', '{"FI": "BBQ-naudanpihvi savujuustolla ja karamellisoiduilla sipuleilla.", "EN": "BBQ beef patty with smoked cheese and caramelized onions."}', 'img/bbqSlider.jpeg', '6.99'),
(4, 'Veggie Delight Slider', 'V,L', '{"FI": "Terveellinen kasvispihvi tuoreella salaatilla ja tomaatilla.", "EN": "A healthy veggie patty with fresh lettuce and tomato."}', 'img/veggieSlider.jpeg', '5.49'),
(5, 'Chicken Little Slider', 'G,L', '{"FI": "Rapea kanapihvi majoneesilla ja maustekurkuilla.", "EN": "Crispy chicken patty with mayo and pickles."}', 'img/chickenSlider.jpeg', '6.49'),
(6, 'Cheese Lover Slider', 'G,L', '{"FI": "Slider, jossa tuplajuustoa ja mehevä naudanpihvi.", "EN": "A slider with double cheese and a juicy beef patty."}', 'img/cheeseSlider.jpeg', '6.99');

INSERT INTO sides (id, name, diets, description, photo, price) VALUES
(1, 'Classic Fries', 'basic', '{"FI": "Rapeat kultaiset ranskalaiset ripauksella suolaa.", "EN": "Crispy golden fries with a touch of salt."}', 'img/classicFries.jpeg', '3.99'),
(2, 'Spicy Fries', 'spicy', '{"FI": "Ranskalaiset, joissa on mausteinen potku ja maustettu chilijauheella.", "EN": "Fries with a spicy kick, seasoned with chili powder."}', 'img/spicyFries.jpeg', '4.49'),
(3, 'Onion Rings', 'vegetarian', '{"FI": "Rapeat sipulirenkaat kultaisessa taikinassa.", "EN": "Crispy onion rings with a golden batter."}', 'img/onionRings.jpeg', '4.99'),
(4, 'Cheese Fries', 'lactose-free', '{"FI": "Ranskalaiset, joiden päällä on sulatettua juustoa ja pekonimuruja.", "EN": "Fries topped with melted cheese and bacon bits."}', 'img/cheeseFries.jpeg', '5.49'),
(5, 'Sweet Potato Fries', 'gluten-free', '{"FI": "Bataattiranskalaiset, joissa on ripaus kanelia.", "EN": "Sweet potato fries with a hint of cinnamon."}', 'img/sweetPotatoFries.jpeg', '4.99'),
(6, 'Garlic Parmesan Fries', 'vegetarian', '{"FI": "Ranskalaiset, jotka on maustettu valkosipulilla ja Parmesan-juustolla.", "EN": "Fries tossed in garlic and Parmesan cheese."}', 'img/garlicParmesanFries.jpeg', '5.99');
