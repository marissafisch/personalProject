INSERT INTO party
(party_name, party_date, party_location, party_address, party_description, host)
VALUES
( $1, $2, $3, $4, $5, $6)
RETURNING *;

SELECT *
FROM party
WHERE host = $6
ORDER BY party_date;
