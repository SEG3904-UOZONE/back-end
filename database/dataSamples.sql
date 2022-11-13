-----------------------------------------

CREATE DATABASE "uozonedb";

-----------------------------------------

CREATE TABLE "courses" (
  "course_id" int IDENTITY(1,1) PRIMARY KEY,
  "code" text NULL,
  "number" bigint NULL,
  "term" text NULL,
  "year" bigint NULL,
  "section" text NULL,
  "units" bigint NULL,
  "isClosed" boolean NULL,
  "name.en" text NULL,
  "name.fr" text NULL,
  "startDate" text NULL,
  "endDate" text NULL,
  "classes" json NULL
);

-----------------------------------------

INSERT INTO "courses" VALUES
('CHM',1311,'fall',2022,'A',3,FALSE,'Principles of Chemistry','Principes de chimie','2022-09-07','2022-12-07','[{"type":"LEC","sectionCode":"00","instructor":"Alain St-Amant","day":{"en":"Monday","fr":"Lundi"},"startTime":"5:30PM","endTime":"6:50PM","location":{"address":"100 Louis Pasteur","department":"CRX","room":"C140"},"seats":{"capacity":300,"taken":235,"seatsSEG":90}},{"type":"LEC","sectionCode":"00","instructor":"Alain St-Amant","day":{"en":"Wednesday","fr":"Mercredi"},"startTime":"5:30PM","endTime":"6:50PM","location":{"address":"100 Louis Pasteur","department":"CRX","room":"C140"},"seats":{"capacity":300,"taken":235,"seatsSEG":90}},{"type":"DGD","sectionCode":"01","instructor":"Staff","day":{"en":"Wednesday","fr":"Mercredi"},"startTime":"4:00PM","endTime":"5:20PM","location":{"address":"65 University","department":"MRT","room":"218"},"seats":{"capacity":100,"taken":30,"seatsSEG":20}},{"type":"DGD","sectionCode":"02","instructor":"Staff","day":{"en":"Wednesday","fr":"Mercredi"},"startTime":"5:30PM","endTime":"6:50PM","location":{"address":"65 University","department":"MRT","room":"217"},"seats":{"capacity":100,"taken":30,"seatsSEG":20}},{"type":"LAB","sectionCode":"01","instructor":"Staff","day":{"en":"Friday","fr":"Vendredi"},"startTime":"4:00PM","endTime":"5:20PM","location":{"address":"65 University","department":"MRT","room":"318"},"seats":{"capacity":100,"taken":30,"seatsSEG":20}},{"type":"LAB","sectionCode":"02","instructor":"Staff","day":{"en":"Thursday","fr":"Jeudi"},"startTime":"10:00AM","endTime":"11:20AM","location":{"address":"65 University","department":"MRT","room":"318"},"seats":{"capacity":100,"taken":30,"seatsSEG":20}}]');


INSERT INTO "courses" VALUES
(2,'MAT',1720,'fall',2022,'A',3,FALSE,'Principles of Chemistry','Principes de chimie','2022-09-07','2022-12-07','[{"type":"LEC","sectionCode":"00","instructor":"Alain St-Amant","day":{"en":"Monday","fr":"Lundi"},"startTime":"5:30PM","endTime":"6:50PM","location":{"address":"100 Louis Pasteur","department":"CRX","room":"C140"},"seats":{"capacity":300,"taken":235,"seatsSEG":90}},{"type":"LEC","sectionCode":"00","instructor":"Alain St-Amant","day":{"en":"Wednesday","fr":"Mercredi"},"startTime":"5:30PM","endTime":"6:50PM","location":{"address":"100 Louis Pasteur","department":"CRX","room":"C140"},"seats":{"capacity":300,"taken":235,"seatsSEG":90}},{"type":"DGD","sectionCode":"01","instructor":"Staff","day":{"en":"Wednesday","fr":"Mercredi"},"startTime":"4:00PM","endTime":"5:20PM","location":{"address":"65 University","department":"MRT","room":"218"},"seats":{"capacity":100,"taken":30,"seatsSEG":20}},{"type":"DGD","sectionCode":"02","instructor":"Staff","day":{"en":"Wednesday","fr":"Mercredi"},"startTime":"5:30PM","endTime":"6:50PM","location":{"address":"65 University","department":"MRT","room":"217"},"seats":{"capacity":100,"taken":30,"seatsSEG":20}},{"type":"LAB","sectionCode":"01","instructor":"Staff","day":{"en":"Friday","fr":"Vendredi"},"startTime":"4:00PM","endTime":"5:20PM","location":{"address":"65 University","department":"MRT","room":"318"},"seats":{"capacity":100,"taken":30,"seatsSEG":20}},{"type":"LAB","sectionCode":"02","instructor":"Staff","day":{"en":"Thursday","fr":"Jeudi"},"startTime":"10:00AM","endTime":"11:20AM","location":{"address":"65 University","department":"MRT","room":"318"},"seats":{"capacity":100,"taken":30,"seatsSEG":20}}]');


-----------------------------------------

CREATE TABLE "cart" (
  "cart_item_id" int IDENTITY(1,1) PRIMARY KEY,
  "code" text NULL,
  "number" bigint NULL,
  "term" text NULL,
  "year" bigint NULL,
  "section" text NULL,
  "units" bigint NULL,
  "isClosed" boolean NULL,
  "name.en" text NULL,
  "name.fr" text NULL,
  "startDate" text NULL,
  "endDate" text NULL,
  "classes" json NULL
);

----------------------------------------

INSERT INTO "cart" VALUES
(100,'CSI',2120,'fall',2022,'A',3,FALSE,'Principles of Chemistry','Principes de chimie','2022-09-07','2022-12-07','[{"type":"LEC","sectionCode":"00","instructor":"Alain St-Amant","day":{"en":"Monday","fr":"Lundi"},"startTime":"5:30PM","endTime":"6:50PM","location":{"address":"100 Louis Pasteur","department":"CRX","room":"C140"},"seats":{"capacity":300,"taken":235,"seatsSEG":90}},{"type":"LEC","sectionCode":"00","instructor":"Alain St-Amant","day":{"en":"Wednesday","fr":"Mercredi"},"startTime":"5:30PM","endTime":"6:50PM","location":{"address":"100 Louis Pasteur","department":"CRX","room":"C140"},"seats":{"capacity":300,"taken":235,"seatsSEG":90}},{"type":"DGD","sectionCode":"01","instructor":"Staff","day":{"en":"Wednesday","fr":"Mercredi"},"startTime":"4:00PM","endTime":"5:20PM","location":{"address":"65 University","department":"MRT","room":"218"},"seats":{"capacity":100,"taken":30,"seatsSEG":20}},{"type":"DGD","sectionCode":"02","instructor":"Staff","day":{"en":"Wednesday","fr":"Mercredi"},"startTime":"5:30PM","endTime":"6:50PM","location":{"address":"65 University","department":"MRT","room":"217"},"seats":{"capacity":100,"taken":30,"seatsSEG":20}},{"type":"LAB","sectionCode":"01","instructor":"Staff","day":{"en":"Friday","fr":"Vendredi"},"startTime":"4:00PM","endTime":"5:20PM","location":{"address":"65 University","department":"MRT","room":"318"},"seats":{"capacity":100,"taken":30,"seatsSEG":20}},{"type":"LAB","sectionCode":"02","instructor":"Staff","day":{"en":"Thursday","fr":"Jeudi"},"startTime":"10:00AM","endTime":"11:20AM","location":{"address":"65 University","department":"MRT","room":"318"},"seats":{"capacity":100,"taken":30,"seatsSEG":20}}]');

