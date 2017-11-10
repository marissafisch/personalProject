SELECT *
FROM party
WHERE host = $1
ORDER BY party_date ASC;