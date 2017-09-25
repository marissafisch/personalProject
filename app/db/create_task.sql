INSERT INTO tasks
(supplies, decorations, food)
VALUES
( $1, $2, $3)
RETURNING *;