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

INSERT INTO res_table (table_id, restaurant_id, seats, reserved)
    VALUES
    -- Ravintola 1
          (1, 1, 2, FALSE), (2, 1, 2, FALSE), (3, 1, 2, FALSE), (4, 1, 2, FALSE), (5, 1, 2, FALSE),
          (6, 1, 2, FALSE), (7, 1, 2, FALSE), (8, 1, 2, FALSE), (9, 1, 2, FALSE), (10, 1, 2, FALSE),
          (11, 1, 6, FALSE), (12, 1, 6, FALSE), (13, 1, 6, FALSE), (14, 1, 6, FALSE), (15, 1, 6, FALSE), (16, 1, 6, FALSE),
          (17, 1, 8, FALSE), (18, 1, 8, FALSE), (19, 1, 8, FALSE), (20, 1, 8, FALSE), (21, 1, 8, FALSE),

    -- Ravintola 2
          (22, 2, 2, FALSE), (23, 2, 2, FALSE), (24, 2, 2, FALSE), (25, 2, 2, FALSE), (26, 2, 2, FALSE),
          (27, 2, 2, FALSE), (28, 2, 2, FALSE), (29, 2, 2, FALSE), (30, 2, 2, FALSE), (31, 2, 2, FALSE),
          (32, 2, 6, FALSE), (33, 2, 6, FALSE), (34, 2, 6, FALSE), (35, 2, 6, FALSE), (36, 2, 6, FALSE), (37, 2, 6, FALSE),
          (38, 2, 8, FALSE), (39, 2, 8, FALSE), (40, 2, 8, FALSE), (41, 2, 8, FALSE), (42, 2, 8, FALSE),

    -- Ravintola 3
          (43, 3, 2, FALSE), (44, 3, 2, FALSE), (45, 3, 2, FALSE), (46, 3, 2, FALSE), (47, 3, 2, FALSE),
          (48, 3, 2, FALSE), (49, 3, 2, FALSE), (50, 3, 2, FALSE), (51, 3, 2, FALSE), (52, 3, 2, FALSE),
          (53, 3, 6, FALSE), (54, 3, 6, FALSE), (55, 3, 6, FALSE), (56, 3, 6, FALSE), (57, 3, 6, FALSE), (58, 3, 6, FALSE),
          (59, 3, 8, FALSE), (60, 3, 8, FALSE), (61, 3, 8, FALSE), (62, 3, 8, FALSE), (63, 3, 8, FALSE),

    -- Ravintola 4
          (64, 4, 2, FALSE), (65, 4, 2, FALSE), (66, 4, 2, FALSE), (67, 4, 2, FALSE), (68, 4, 2, FALSE),
          (69, 4, 2, FALSE), (70, 4, 2, FALSE), (71, 4, 2, FALSE), (72, 4, 2, FALSE), (73, 4, 2, FALSE),
          (74, 4, 6, FALSE), (75, 4, 6, FALSE), (76, 4, 6, FALSE), (77, 4, 6, FALSE), (78, 4, 6, FALSE), (79, 4, 6, FALSE),
          (80, 4, 8, FALSE), (81, 4, 8, FALSE), (82, 4, 8, FALSE), (83, 4, 8, FALSE), (84, 4, 8, FALSE);

    