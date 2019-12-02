DROP DATABASE IF EXISTS medicare_claims;
CREATE DATABASE IF NOT EXISTS medicare_claims;

USE medicare_claims;

CREATE TABLE physicians (
	physicians VARCHAR(9) NOT NULL
);

CREATE TABLE benes (
	BeneID VARCHAR(9),
	DOB DATE,
	DOD DATE,
	Gender INT,
	Race INT,
	RenalDiseaseIndicator INT,
	State INT,
	County INT,
	NoOfMonths_PartACov INT,
	NoOfMonths_PartBCov INT,
	ChronicCond_Alzheimer INT,
	ChronicCond_Heartfailure INT,
	ChronicCond_KidneyDisease INT,
	ChronicCond_Cancer INT,
	ChronicCond_ObstrPulmonary INT,
	ChronicCond_Depression INT,
	ChronicCond_Diabetes INT,
	ChronicCond_IschemicHeart INT,
	ChronicCond_Osteoporasis INT,
	ChronicCond_rheumatoidarthritis INT,
	ChronicCond_stroke INT,
	IPAnnualReimbursementAmt INT,
	IPAnnualDeductibleAmt INT,
	OPAnnualReimbursementAmt INT,
	OPAnnualDeductibleAmt INT
);

CREATE TABLE claims (
	BeneID VARCHAR(9),
	ClaimID VARCHAR(8),
	ClaimStartDt DATE,
	ClaimEndDt DATE,
	Provider VARCHAR(8),
	InscClaimAmtReimbursed INT,
	AttendingPhysician VARCHAR(9),
	OperatingPhysician VARCHAR(9),
	OtherPhysician VARCHAR(9),
	AdmissionDt DATE,
	ClmAdmitDiagnosisCode VARCHAR(6),
	DeductibleAmtPaid INT,
	DischargeDt DATE,
	DiagnosisGroupCode INT,
	ClmDiagnosisCode_1 VARCHAR(5),
	ClmDiagnosisCode_2 VARCHAR(5),
	ClmDiagnosisCode_3 VARCHAR(5),
	ClmDiagnosisCode_4 VARCHAR(5),
	ClmDiagnosisCode_5 VARCHAR(5),
	ClmDiagnosisCode_6 VARCHAR(5),
	ClmDiagnosisCode_7 VARCHAR(5),
	ClmDiagnosisCode_8 VARCHAR(5),
	ClmDiagnosisCode_9 VARCHAR(5),
	ClmDiagnosisCode_10 VARCHAR(5),
	ClmProcedureCode_1 VARCHAR(5),
	ClmProcedureCode_2 VARCHAR(5),
	ClmProcedureCode_3 VARCHAR(5),
	ClmProcedureCode_4 VARCHAR(5),
	ClmProcedureCode_5 VARCHAR(5),
	ClmProcedureCode_6 VARCHAR(5)
);

SET GLOBAL read_only = OFF;
LOAD DATA LOCAL INFILE './Beneficiarydata.csv' INTO TABLE benes
COLUMNS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
ESCAPED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

SET GLOBAL read_only = OFF;
LOAD DATA LOCAL INFILE './Inpatientdata.csv' INTO TABLE claims
COLUMNS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
ESCAPED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

ALTER TABLE `claims` ADD `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY;
DELETE FROM claims WHERE id > 100;
