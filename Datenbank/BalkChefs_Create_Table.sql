create database BalkChefs;

create table Benutzer (
BenutzerId int primary key,
Vorname varchar(50),
Nachname varchar(50),
Passwort varchar(50)
);

create table Rezept (
RezeptId int primary key,
Bez varchar(50),
Beschreibung varchar(255),
Bewertung decimal(3,1)
);

create table Zutaten (
ZutatenId int primary key,
Bez varchar(50),
Beschreibung varchar(255)
);