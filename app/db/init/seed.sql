CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(180),
    email VARCHAR(180),
    auth_id TEXT
);

CREATE TABLE IF NOT EXISTS party (
    id SERIAL PRIMARY KEY,
    party_name VARCHAR(180),
    party_description VARCHAR(1000),
    party_date TEXT,
    party_location TEXT,
    party_address TEXT
);

CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    supplies TEXT,
    decorations TEXT,
    food TEXT
);

CREATE TABLE IF NOT EXISTS invites (
    user_Id REFERENCES users(id),
    party_Id REFERENCES party(id),
);

CREATE TABLE IF NOT EXISTS user_role(
    id SERIAL PRIMARY KEY INTEGER,
    user_Id REFERENCES users(id),
    party_Id REFERENCES party(id),
    admin TEXT,
    guest TEXT
);