INSERT INTO party
(party_name, party_description, party_date, party_location, party_address)
VALUES
( $1, $2, $3, $4, $5)
RETURNING *;