SELECT *
FROM party
WHERE user_id = $1
ORDER BY party_date ASC;