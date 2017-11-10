INSERT INTO party
(user_id, party_name, party_date, party_location, party_address, party_description, host)
VALUES
( $1, $2, $3, $4, $5, $6, $7)
RETURNING *;

SELECT *
FROM party
WHERE user_id = $1
ORDER BY party_date;
