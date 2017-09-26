INSERT INTO users
(user_name, email, auth_id)
VALUES
( $1, $2, $3)
RETURNING *;

('Michael Scott', 'thatswhatshesaid@dundermifflin.com', 3),
('Dwight Schrute', 'beets@dundermifflin.com', 4),
('Jim Halpert', 'bookface@dundermifflin.com', 5),
('Pam Beasley', 'thatswhatshesaid@dundermifflin.com', 6),
('Jerry Seinfeld', 'funnyman@filthyrich.com', 7),
('Elaine Benis', 'nosoupforyou@jpeterman.com', 8),
('Cosmo Kramer', 'neighbor@moocher.com', 9),
('George Costanza', 'summerofgeorge@yankees.com', 10),
('Leslie Knope', 'ilovewaffles@pawnee.org', 11),
('Ron Swanson', 'governmentistrash@pawnee.org', 12),
('Tom Haverford', 'treatyourself@pawnee.org', 13),
('Andy Dwyer', 'bertmacklin@pawnee.org', 14);