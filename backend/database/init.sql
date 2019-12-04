DROP DATABASE IF EXISTS adult_profiles;
CREATE DATABASE IF NOT EXISTS adult_profiles;

USE adult_profiles;

CREATE TABLE profiles (
	Age INT,
	Workclass VARCHAR(25),
	Income INT,
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
LOAD DATA LOCAL INFILE './Beneficiarydata.csv' INTO TABLE profiles
COLUMNS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
ESCAPED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

ALTER TABLE `profiles` ADD `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY;
DELETE FROM profiles WHERE id > 100;
