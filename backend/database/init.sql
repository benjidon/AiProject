DROP DATABASE IF EXISTS adult_profiles;
CREATE DATABASE IF NOT EXISTS adult_profiles;

USE adult_profiles;

CREATE TABLE profiles (
	Age INT,
	Workclass VARCHAR(25),
	Fnlwgt INT,
	Education VARCHAR(25),
	EducationNum INT,
	MaritalStatus VARCHAR(25),
	Occupation VARCHAR(35),
	Relationship VARCHAR(25),
	Race VARCHAR(15),
	Sex VARCHAR(15),
	CapitalGain INT,
	CapitalLoss INT,
	HoursPerWeek INT,
	NativeCountry VARCHAR(50)
);

SET GLOBAL read_only = OFF;

ALTER TABLE profiles ADD id INT NOT NULL AUTO_INCREMENT PRIMARY KEY;
DELETE FROM profiles WHERE id > 100;
