CREATE DATABASE IF NOT EXISTS medicare_claims;

CREATE TABLE providers (
	provider VARCHAR(9)
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

INSERT INTO claims VALUES
('BENE11001','CLM46614','2009-04-12','2009-04-18','PRV55912',26000,'PHY390922','NA',
	'NA','2009-04-12','7866',1068,'2009-04-18',201,'1970','4019','5853','7843',
	'2768','71590','2724','19889','5849','NA','NA','NA','NA','NA','NA','NA');
