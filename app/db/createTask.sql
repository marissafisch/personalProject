INSERT INTO tasks
(decorations, supplies, food)
VALUES
( $1, $2, $3)
RETURNING *;