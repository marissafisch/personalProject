SELECT *
FROM party
WHERE id = $1
ORDER BY party_date ASC;