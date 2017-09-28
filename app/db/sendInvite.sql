INSERT INTO invites
(email_list, user_Id, party_Id )
VALUES
( $1, $2, $3)
RETURNING *;