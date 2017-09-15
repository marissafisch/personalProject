INSERT INTO users
(user_name, email, auth_id)
VALUES
( $1, $2, $3)
RETURNING *;