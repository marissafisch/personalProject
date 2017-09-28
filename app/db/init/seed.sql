CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(180),
    email VARCHAR(180),
    auth_id TEXT
);

CREATE TABLE IF NOT EXISTS party (
    id SERIAL PRIMARY KEY,
    party_name VARCHAR(180),
    party_date TEXT,
    party_location TEXT,
    party_address TEXT,
    party_description VARCHAR(1000),
    host = INT,
    guests = INT[]
);

CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    decorations TEXT,
    supplies TEXT,
    food TEXT
);

CREATE TABLE IF NOT EXISTS invites (
    user_Id integer REFERENCES users(id),
    party_Id integer REFERENCES party(id),
    email_list TEXT
);

