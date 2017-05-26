import { CrmProp, EntityReference, Money } from './Base'

export enum stq_chdivision {
 DigitalMetalAB = 10,
 HgansBrasilLtda = 1,
 HgansChinaCoLtd = 2,
 HgansGreatBritainLtd = 3,
 HgansBelgiumSA = 4,
 HgansKoreaLtd = 100000000,
 HgansIndiaPvtLtd = 5,
 HgansJapanKK = 6,
 HgansSwedenAB = 7,
 NorthAmericanHgansHighAlloys = 8,
 NorthAmericanHgansInc = 9,
}

export enum stq_type {
 Environment = 1,
 Quality = 2,
 Safety = 3,
}

export enum stq_qcstatus {
 Issued = 1,
 Implementation = 2,
 FollowUp = 3,
 Closed = 4,
}

export enum stq_committeecategory {
 CSRRelated = 1,
 InternalAudits = 2,
 ExternalAudits = 3,
 Improvements = 4,
}

export enum stq_committeedecision {
 Accepted = 100000000,
 RejectedLegally = 100000001,
 Rejected = 100000002,
}

export enum stq_category {
 ApprovalofXproducts = 13,
 Complaint = 3,
 ContaminatedLand = 35,
 DeactivateItems = 5,
 Deviationincominginspection = 4,
 EmergencyPreparednessFirstAid = 23,
 Emissions = 32,
 EnergyCO2 = 33,
 Enquiry = 2,
 EnquiryRelated = 18,
 EnvironmentalAssessment = 30,
 ExternalAudits = 16,
 FireProtectionEvacuation = 21,
 Improvements = 17,
 Noise = 31,
 OccupationalHealth = 22,
 OccupationalHealthandSafety = 20,
 OperationalPermissionsandConditions = 34,
 Other = 1,
 OtherEnvironmentalAspects = 37,
 OtherSafety = 38,
 Processchange = 7,
 Qualification = 10,
 QualityMeeting = 40,
 QualityPlanning = 11,
 QualityPlanningExistingproductprocess = 100000002,
 QualityPlanningNewproductprocess = 100000001,
 Residuals = 36,
 Returnofmaterial = 6,
 SpecificationchangeFinalProducts = 9,
 SpecificationchangeRawmaterial = 8,
 SupplierComplaint = 100000000,
 Updatedocuments = 12,
}

export enum stq_complainttosupplier_optionset {
 Yes = 1,
 No = 0,
}

export enum stq_choiceofreviewteam {
 Environmental = 2,
 Finance = 100000000,
 Quality = 1,
 Safety = 3,
}

export class Committee Handling {
  stq_systemconstruction: boolean;
  stq_decreasedpossibility: boolean;
  stq_qualitycommitteesignature: string;
  stq_chdivision: stq_chdivision;
  stq_title: string;
  stq_remarks: string;
  stq_instructionstraining: boolean;
  timezoneruleversionnumber: number;
  stq_other: boolean;
  stq_qcaimplementationcompleted: boolean;
  stq_qcdallaccepted: boolean;
  stq_qcdcompleted: boolean;
  stq_qualitycommitteeid: EntityReference;
  stq_type: stq_type;
  stq_name: string;
  stq_instructionsroutines: boolean;
  traversedpath: string;
  stq_qcstatus: stq_qcstatus;
  stq_fmeacontrolplan: boolean;
  utcconversiontimezonecode: number;
  stq_committeecategory: stq_committeecategory;
  stq_committeedecision: stq_committeedecision;
  stq_yeslegally: boolean;
  stq_category: stq_category;
  processid: EntityReference;
  stq_complainttosupplier: boolean;
  stq_rejectedbyqualitycommittee: boolean;
  stageid: EntityReference;
  stq_complainttosupplier_optionset: stq_complainttosupplier_optionset;
  stq_choiceofreviewteam: stq_choiceofreviewteam;
  stq_qcafollowupcompleted: boolean;
  stq_background: string;
  stq_eliminatedpossibilityerrorproofing: boolean;
  stq_desciption: string;
  stq_lessonslearnedcommunicated: boolean;
  importsequencenumber: number;
}

export class Committee HandlingForm {
  stq_systemconstruction: CrmProp<boolean> = new CrmProp<boolean>("stq_systemconstruction")
  stq_decreasedpossibility: CrmProp<boolean> = new CrmProp<boolean>("stq_decreasedpossibility")
  stq_qualitycommitteesignature: CrmProp<string> = new CrmProp<string>("stq_qualitycommitteesignature")
  stq_chdivision: CrmProp<stq_chdivision> = new CrmProp<stq_chdivision>("stq_chdivision")
  stq_title: CrmProp<string> = new CrmProp<string>("stq_title")
  stq_remarks: CrmProp<string> = new CrmProp<string>("stq_remarks")
  stq_instructionstraining: CrmProp<boolean> = new CrmProp<boolean>("stq_instructionstraining")
  timezoneruleversionnumber: CrmProp<number> = new CrmProp<number>("timezoneruleversionnumber")
  stq_other: CrmProp<boolean> = new CrmProp<boolean>("stq_other")
  stq_qcaimplementationcompleted: CrmProp<boolean> = new CrmProp<boolean>("stq_qcaimplementationcompleted")
  stq_qcdallaccepted: CrmProp<boolean> = new CrmProp<boolean>("stq_qcdallaccepted")
  stq_qcdcompleted: CrmProp<boolean> = new CrmProp<boolean>("stq_qcdcompleted")
  stq_qualitycommitteeid: CrmProp<EntityReference> = new CrmProp<EntityReference>("stq_qualitycommitteeid")
  stq_type: CrmProp<stq_type> = new CrmProp<stq_type>("stq_type")
  stq_name: CrmProp<string> = new CrmProp<string>("stq_name")
  stq_instructionsroutines: CrmProp<boolean> = new CrmProp<boolean>("stq_instructionsroutines")
  traversedpath: CrmProp<string> = new CrmProp<string>("traversedpath")
  stq_qcstatus: CrmProp<stq_qcstatus> = new CrmProp<stq_qcstatus>("stq_qcstatus")
  stq_fmeacontrolplan: CrmProp<boolean> = new CrmProp<boolean>("stq_fmeacontrolplan")
  utcconversiontimezonecode: CrmProp<number> = new CrmProp<number>("utcconversiontimezonecode")
  stq_committeecategory: CrmProp<stq_committeecategory> = new CrmProp<stq_committeecategory>("stq_committeecategory")
  stq_committeedecision: CrmProp<stq_committeedecision> = new CrmProp<stq_committeedecision>("stq_committeedecision")
  stq_yeslegally: CrmProp<boolean> = new CrmProp<boolean>("stq_yeslegally")
  stq_category: CrmProp<stq_category> = new CrmProp<stq_category>("stq_category")
  processid: CrmProp<EntityReference> = new CrmProp<EntityReference>("processid")
  stq_complainttosupplier: CrmProp<boolean> = new CrmProp<boolean>("stq_complainttosupplier")
  stq_rejectedbyqualitycommittee: CrmProp<boolean> = new CrmProp<boolean>("stq_rejectedbyqualitycommittee")
  stageid: CrmProp<EntityReference> = new CrmProp<EntityReference>("stageid")
  stq_complainttosupplier_optionset: CrmProp<stq_complainttosupplier_optionset> = new CrmProp<stq_complainttosupplier_optionset>("stq_complainttosupplier_optionset")
  stq_choiceofreviewteam: CrmProp<stq_choiceofreviewteam> = new CrmProp<stq_choiceofreviewteam>("stq_choiceofreviewteam")
  stq_qcafollowupcompleted: CrmProp<boolean> = new CrmProp<boolean>("stq_qcafollowupcompleted")
  stq_background: CrmProp<string> = new CrmProp<string>("stq_background")
  stq_eliminatedpossibilityerrorproofing: CrmProp<boolean> = new CrmProp<boolean>("stq_eliminatedpossibilityerrorproofing")
  stq_desciption: CrmProp<string> = new CrmProp<string>("stq_desciption")
  stq_lessonslearnedcommunicated: CrmProp<boolean> = new CrmProp<boolean>("stq_lessonslearnedcommunicated")
  importsequencenumber: CrmProp<number> = new CrmProp<number>("importsequencenumber")
}
