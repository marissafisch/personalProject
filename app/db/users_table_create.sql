CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(180),
    email VARCHAR(180),
    auth_id TEXT
)