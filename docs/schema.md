# Schema Information

## notebooks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
title       | string    | not null

## notes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
notebook_id | integer   | not null, foreign key (references notebooks)
body        | text      | not null, foreign key (references tags)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
name            | string    | not null
password_digest | string    | not null
session_token   | string    | not null, unique
