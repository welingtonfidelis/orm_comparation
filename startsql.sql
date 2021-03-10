CREATE DATABASE ormcomparation;

create table users (
  id serial primary key,
  name text not null,
  email text not null,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

insert into users (name, email) values ('user 1', 'user1@email.com');
insert into users (name, email) values ('user 2', 'user2@email.com');
insert into users (name, email) values ('user 3', 'user3@email.com');
insert into users (name, email) values ('user 4', 'user4@email.com');