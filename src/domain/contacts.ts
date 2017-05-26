import { CrmProp, EntityReference, Money } from './Base'

export enum haschildrencode {
 DefaultValue = 1,
}

export enum customertypecode {
 DefaultValue = 1,
 Account = 200000,
 EndUserOEM = 200001,
 EndUserSystemSupplier = 200002,
 EndUserEngineeringHouse = 200003,
 EndUserAcademics = 200004,
 Prospect = 200005,
 CooperationPartner = 200006,
 Other = 200007,
 Supplier = 200008,
}

export enum address1_freighttermscode {
 FOB = 1,
 NoCharge = 2,
}

export enum gendercode {
 Male = 1,
 Female = 2,
}

export enum address1_addresstypecode {
 BillTo = 1,
 ShipTo = 2,
 Primary = 3,
 Other = 4,
}

export enum preferredappointmenttimecode {
 Morning = 1,
 Afternoon = 2,
 Evening = 3,
}

export enum stq_responsibility {
 Administration = 100000010,
 CEO = 1,
 CFO = 2,
 COO = 100000000,
 ExecutiveAssistant = 100000011,
 FinanceStaff = 100000009,
 HRManager = 100000012,
 HRStaff = 100000013,
 TechnicalManager = 3,
 TechnicalStaff = 100000001,
 ProductionManager = 4,
 ProductionStaff = 100000002,
 ProjectManager = 100000008,
 PurchasingManager = 5,
 PurchasingStaff = 100000003,
 REACHcontact = 9,
 LogisticManager = 6,
 LogisticStaff = 100000004,
 QAEnvironmentManager = 100000006,
 QAEnvironmentStaff = 100000007,
 SalesManager = 7,
 SalesStaff = 100000005,
 QAEnvironmentManager = 8,
}

export enum address2_freighttermscode {
 DefaultValue = 1,
}

export enum paymenttermscode {
 Net30 = 1,
 enum210Net30 = 2,
 Net45 = 3,
 Net60 = 4,
}

export enum accountrolecode {
 DecisionMaker = 1,
 Employee = 2,
 Influencer = 3,
}

export enum address3_freighttermscode {
 DefaultValue = 1,
}

export enum address1_shippingmethodcode {
 Airborne = 1,
 DHL = 2,
 FedEx = 3,
 UPS = 4,
 PostalMail = 5,
 FullLoad = 6,
 WillCall = 7,
}

export enum preferredappointmentdaycode {
 Sunday = 0,
 Monday = 1,
 Tuesday = 2,
 Wednesday = 3,
 Thursday = 4,
 Friday = 5,
 Saturday = 6,
}

export enum customersizecode {
 DefaultValue = 1,
}

export enum stq_externalsystem {
 DW = 1,
 SuperOffice = 2,
}

export enum preferredcontactmethodcode {
 Any = 1,
 Email = 2,
 Phone = 3,
 Fax = 4,
 Mail = 5,
}

export enum leadsourcecode {
 DefaultValue = 1,
}

export enum stq_address1_country {
 undefined = 1,
 Albania = 2,
 Algeria = 3,
 Andorra = 4,
 Angola = 5,
 Argentina = 6,
 Australia = 7,
 Austria = 8,
 Azerbaijan = 9,
 Bahrain = 10,
 Bangladesh = 11,
 Belarus = 12,
 Belgium = 13,
 Bolivia = 14,
 BosniaHerzegovina = 15,
 Brazil = 16,
 BruneiDarussalam = 114,
 Bulgaria = 17,
 Cameroon = 18,
 Canada = 19,
 Chile = 20,
 China = 21,
 Colombia = 22,
 CostaRica = 23,
 Croatia = 24,
 Cuba = 25,
 Cyprus = 26,
 CzechRepublic = 27,
 Denmark = 28,
 DominicanRepublic = 29,
 Ecuador = 30,
 Egypt = 31,
 Estonia = 32,
 Ethiopia = 33,
 Finland = 34,
 France = 35,
 Georgia = 36,
 Germany = 37,
 Greece = 38,
 Guatemala = 115,
 Guinea = 117,
 HongKong = 39,
 Hungary = 40,
 Iceland = 41,
 India = 42,
 Indonesia = 43,
 Iran = 44,
 Iraq = 45,
 Ireland = 46,
 Israel = 47,
 Italy = 48,
 IvoryCoast = 49,
 Jamaica = 50,
 Japan = 51,
 Jordan = 52,
 Kazakhstan = 53,
 Kenya = 54,
 Kuwait = 55,
 Latvia = 56,
 Lebanon = 57,
 Liberia = 58,
 Libya = 59,
 Liechtenstein = 60,
 Lithuania = 61,
 Luxembourg = 62,
 Macedonia = 63,
 Malawi = 64,
 Malaysia = 65,
 Malta = 66,
 Mauritania = 67,
 Mexico = 68,
 Montenegro = 69,
 Morocco = 70,
 Myanmar = 71,
 Nepal = 72,
 Netherlands = 73,
 NewZealand = 74,
 Nigeria = 75,
 NorthKorea = 76,
 Norway = 77,
 Oman = 78,
 Pakistan = 79,
 Panama = 116,
 Paraguay = 80,
 Peru = 81,
 Philippines = 82,
 Poland = 83,
 Portugal = 84,
 Romania = 85,
 Russia = 86,
 SaudiArabia = 87,
 Serbia = 88,
 Singapore = 89,
 Slovakia = 90,
 Slovenia = 91,
 SouthAfrica = 92,
 SouthKorea = 93,
 Spain = 94,
 SriLanka = 95,
 Swaziland = 96,
 Sweden = 97,
 Switzerland = 98,
 Syria = 99,
 Taiwan = 100,
 Thailand = 101,
 Tunisia = 102,
 Turkey = 103,
 Ukraine = 104,
 UnitedArabEmirates = 105,
 UnitedKingdom = 106,
 Uruguay = 107,
 USA = 108,
 Venezuela = 109,
 Vietnam = 110,
 VirginIslandsBritish = 113,
 Yemen = 111,
 Zimbabwe = 112,
}

export enum stq_function {
 Administration = 100000001,
 Engineering = 100000003,
 Finance = 5,
 GeneralManagement = 10,
 HR = 7,
 IT = 11,
 Legal = 100000002,
 Logistics = 6,
 LogisticsSupply = 100000000,
 Management = 9,
 Marketing = 12,
 Production = 8,
 Purchasing = 4,
 QAEnvironment = 1,
 RDi = 3,
 Sales = 2,
}

export enum address3_shippingmethodcode {
 DefaultValue = 1,
}

export enum address2_addresstypecode {
 DefaultValue = 1,
}

export enum stq_surveydepartment {
 Engineering = 100000000,
 Management = 100000001,
 Production = 100000002,
 Purchase = 100000003,
 Quality = 100000004,
 RD = 100000005,
 Sales = 100000006,
}

export enum address2_shippingmethodcode {
 DefaultValue = 1,
}

export enum territorycode {
 DefaultValue = 1,
}

export enum address3_addresstypecode {
 DefaultValue = 1,
}

export enum familystatuscode {
 Single = 1,
 Married = 2,
 Divorced = 3,
 Widowed = 4,
}

export enum shippingmethodcode {
 DefaultValue = 1,
}

export enum educationcode {
 DefaultValue = 1,
}

export class contacts {
  address1_county: string;
  yomilastname: string;
  address3_utcoffset: number;
  description: string;
  department: string;
  haschildrencode: haschildrencode;
  address1_addressid: EntityReference;
  isbackofficecustomer: boolean;
  address3_addressid: EntityReference;
  address1_longitude: number;
  managername: string;
  entityimageid: EntityReference;
  telephone2: string;
  address2_utcoffset: number;
  customertypecode: customertypecode;
  address1_upszone: string;
  address1_freighttermscode: address1_freighttermscode;
  donotbulkpostalmail: boolean;
  importsequencenumber: number;
  gendercode: gendercode;
  donotpostalmail: boolean;
  address1_addresstypecode: address1_addresstypecode;
  stq_isuserinportal: boolean;
  telephone3: string;
  address1_telephone1: string;
  address1_telephone2: string;
  address1_telephone3: string;
  address1_fax: string;
  address2_upszone: string;
  address3_telephone2: string;
  address3_telephone3: string;
  fax: string;
  assistantname: string;
  address2_line3: string;
  fullname: string;
  address2_longitude: number;
  subscriptionid: EntityReference;
  merged: boolean;
  address1_latitude: number;
  stq_hcpticket: string;
  address3_fax: string;
  externaluseridentifier: string;
  stq_newsletter_powdernews: boolean;
  preferredappointmenttimecode: preferredappointmenttimecode;
  pager: string;
  salutation: string;
  address2_city: string;
  stq_responsibility: stq_responsibility;
  address3_postalcode: string;
  address2_line2: string;
  address3_upszone: string;
  address3_county: string;
  governmentid: string;
  callback: string;
  creditonhold: boolean;
  address2_freighttermscode: address2_freighttermscode;
  business2: string;
  stq_casipuser: boolean;
  yomifullname: string;
  address2_telephone2: string;
  address2_postalcode: string;
  spousesname: string;
  address1_utcoffset: number;
  yomimiddlename: string;
  traversedpath: string;
  address1_line3: string;
  address3_country: string;
  paymenttermscode: paymenttermscode;
  address3_telephone1: string;
  address2_line1: string;
  accountrolecode: accountrolecode;
  middlename: string;
  managerphone: string;
  address2_stateorprovince: string;
  childrensnames: string;
  address2_name: string;
  address3_stateorprovince: string;
  address3_line1: string;
  donotsendmm: boolean;
  donotbulkemail: boolean;
  address1_primarycontactname: string;
  home2: string;
  address1_name: string;
  address2_telephone3: string;
  address3_primarycontactname: string;
  ftpsiteurl: string;
  address1_postalcode: string;
  address3_freighttermscode: address3_freighttermscode;
  address1_stateorprovince: string;
  followemail: boolean;
  jobtitle: string;
  stq_collaborationsitemember: boolean;
  address1_shippingmethodcode: address1_shippingmethodcode;
  preferredappointmentdaycode: preferredappointmentdaycode;
  address2_fax: string;
  customersizecode: customersizecode;
  address2_latitude: number;
  employeeid: string;
  address1_postofficebox: string;
  address1_city: string;
  timezoneruleversionnumber: number;
  stq_externalsystem: stq_externalsystem;
  preferredcontactmethodcode: preferredcontactmethodcode;
  leadsourcecode: leadsourcecode;
  address3_line2: string;
  participatesinworkflow: boolean;
  stq_pmschoolparticipant: boolean;
  address2_postofficebox: string;
  emailaddress3: string;
  emailaddress2: string;
  emailaddress1: string;
  websiteurl: string;
  nickname: string;
  address3_name: string;
  lastname: string;
  address3_longitude: number;
  stq_customerevaluationmember: boolean;
  stq_address1_country: stq_address1_country;
  stq_function: stq_function;
  stq_newsletter_somaloyupdate: boolean;
  onholdtime: number;
  marketingonly: boolean;
  address3_shippingmethodcode: address3_shippingmethodcode;
  telephone1: string;
  address2_addresstypecode: address2_addresstypecode;
  address3_postofficebox: string;
  address2_telephone1: string;
  assistantphone: string;
  address2_addressid: EntityReference;
  address1_composite: string;
  donotfax: boolean;
  stq_surveydepartment: stq_surveydepartment;
  address3_line3: string;
  address2_shippingmethodcode: address2_shippingmethodcode;
  address2_country: string;
  mobilephone: string;
  address1_line1: string;
  stq_newsletter_popcentrenews: boolean;
  yomifirstname: string;
  address3_city: string;
  address1_country: string;
  firstname: string;
  stageid: EntityReference;
  donotphone: boolean;
  suffix: string;
  territorycode: territorycode;
  timespentbymeonemailandmeetings: string;
  address3_composite: string;
  address3_addresstypecode: address3_addresstypecode;
  familystatuscode: familystatuscode;
  utcconversiontimezonecode: number;
  address2_county: string;
  contactid: EntityReference;
  address2_primarycontactname: string;
  shippingmethodcode: shippingmethodcode;
  address1_line2: string;
  isautocreate: boolean;
  donotemail: boolean;
  processid: EntityReference;
  educationcode: educationcode;
  company: string;
  address2_composite: string;
  stq_projectmember: boolean;
  numberofchildren: number;
  address3_latitude: number;
}

export class contactsForm {
  address1_county: CrmProp<string> = new CrmProp<string>("address1_county")
  yomilastname: CrmProp<string> = new CrmProp<string>("yomilastname")
  address3_utcoffset: CrmProp<number> = new CrmProp<number>("address3_utcoffset")
  description: CrmProp<string> = new CrmProp<string>("description")
  department: CrmProp<string> = new CrmProp<string>("department")
  haschildrencode: CrmProp<haschildrencode> = new CrmProp<haschildrencode>("haschildrencode")
  address1_addressid: CrmProp<EntityReference> = new CrmProp<EntityReference>("address1_addressid")
  isbackofficecustomer: CrmProp<boolean> = new CrmProp<boolean>("isbackofficecustomer")
  address3_addressid: CrmProp<EntityReference> = new CrmProp<EntityReference>("address3_addressid")
  address1_longitude: CrmProp<number> = new CrmProp<number>("address1_longitude")
  managername: CrmProp<string> = new CrmProp<string>("managername")
  entityimageid: CrmProp<EntityReference> = new CrmProp<EntityReference>("entityimageid")
  telephone2: CrmProp<string> = new CrmProp<string>("telephone2")
  address2_utcoffset: CrmProp<number> = new CrmProp<number>("address2_utcoffset")
  customertypecode: CrmProp<customertypecode> = new CrmProp<customertypecode>("customertypecode")
  address1_upszone: CrmProp<string> = new CrmProp<string>("address1_upszone")
  address1_freighttermscode: CrmProp<address1_freighttermscode> = new CrmProp<address1_freighttermscode>("address1_freighttermscode")
  donotbulkpostalmail: CrmProp<boolean> = new CrmProp<boolean>("donotbulkpostalmail")
  importsequencenumber: CrmProp<number> = new CrmProp<number>("importsequencenumber")
  gendercode: CrmProp<gendercode> = new CrmProp<gendercode>("gendercode")
  donotpostalmail: CrmProp<boolean> = new CrmProp<boolean>("donotpostalmail")
  address1_addresstypecode: CrmProp<address1_addresstypecode> = new CrmProp<address1_addresstypecode>("address1_addresstypecode")
  stq_isuserinportal: CrmProp<boolean> = new CrmProp<boolean>("stq_isuserinportal")
  telephone3: CrmProp<string> = new CrmProp<string>("telephone3")
  address1_telephone1: CrmProp<string> = new CrmProp<string>("address1_telephone1")
  address1_telephone2: CrmProp<string> = new CrmProp<string>("address1_telephone2")
  address1_telephone3: CrmProp<string> = new CrmProp<string>("address1_telephone3")
  address1_fax: CrmProp<string> = new CrmProp<string>("address1_fax")
  address2_upszone: CrmProp<string> = new CrmProp<string>("address2_upszone")
  address3_telephone2: CrmProp<string> = new CrmProp<string>("address3_telephone2")
  address3_telephone3: CrmProp<string> = new CrmProp<string>("address3_telephone3")
  fax: CrmProp<string> = new CrmProp<string>("fax")
  assistantname: CrmProp<string> = new CrmProp<string>("assistantname")
  address2_line3: CrmProp<string> = new CrmProp<string>("address2_line3")
  fullname: CrmProp<string> = new CrmProp<string>("fullname")
  address2_longitude: CrmProp<number> = new CrmProp<number>("address2_longitude")
  subscriptionid: CrmProp<EntityReference> = new CrmProp<EntityReference>("subscriptionid")
  merged: CrmProp<boolean> = new CrmProp<boolean>("merged")
  address1_latitude: CrmProp<number> = new CrmProp<number>("address1_latitude")
  stq_hcpticket: CrmProp<string> = new CrmProp<string>("stq_hcpticket")
  address3_fax: CrmProp<string> = new CrmProp<string>("address3_fax")
  externaluseridentifier: CrmProp<string> = new CrmProp<string>("externaluseridentifier")
  stq_newsletter_powdernews: CrmProp<boolean> = new CrmProp<boolean>("stq_newsletter_powdernews")
  preferredappointmenttimecode: CrmProp<preferredappointmenttimecode> = new CrmProp<preferredappointmenttimecode>("preferredappointmenttimecode")
  pager: CrmProp<string> = new CrmProp<string>("pager")
  salutation: CrmProp<string> = new CrmProp<string>("salutation")
  address2_city: CrmProp<string> = new CrmProp<string>("address2_city")
  stq_responsibility: CrmProp<stq_responsibility> = new CrmProp<stq_responsibility>("stq_responsibility")
  address3_postalcode: CrmProp<string> = new CrmProp<string>("address3_postalcode")
  address2_line2: CrmProp<string> = new CrmProp<string>("address2_line2")
  address3_upszone: CrmProp<string> = new CrmProp<string>("address3_upszone")
  address3_county: CrmProp<string> = new CrmProp<string>("address3_county")
  governmentid: CrmProp<string> = new CrmProp<string>("governmentid")
  callback: CrmProp<string> = new CrmProp<string>("callback")
  creditonhold: CrmProp<boolean> = new CrmProp<boolean>("creditonhold")
  address2_freighttermscode: CrmProp<address2_freighttermscode> = new CrmProp<address2_freighttermscode>("address2_freighttermscode")
  business2: CrmProp<string> = new CrmProp<string>("business2")
  stq_casipuser: CrmProp<boolean> = new CrmProp<boolean>("stq_casipuser")
  yomifullname: CrmProp<string> = new CrmProp<string>("yomifullname")
  address2_telephone2: CrmProp<string> = new CrmProp<string>("address2_telephone2")
  address2_postalcode: CrmProp<string> = new CrmProp<string>("address2_postalcode")
  spousesname: CrmProp<string> = new CrmProp<string>("spousesname")
  address1_utcoffset: CrmProp<number> = new CrmProp<number>("address1_utcoffset")
  yomimiddlename: CrmProp<string> = new CrmProp<string>("yomimiddlename")
  traversedpath: CrmProp<string> = new CrmProp<string>("traversedpath")
  address1_line3: CrmProp<string> = new CrmProp<string>("address1_line3")
  address3_country: CrmProp<string> = new CrmProp<string>("address3_country")
  paymenttermscode: CrmProp<paymenttermscode> = new CrmProp<paymenttermscode>("paymenttermscode")
  address3_telephone1: CrmProp<string> = new CrmProp<string>("address3_telephone1")
  address2_line1: CrmProp<string> = new CrmProp<string>("address2_line1")
  accountrolecode: CrmProp<accountrolecode> = new CrmProp<accountrolecode>("accountrolecode")
  middlename: CrmProp<string> = new CrmProp<string>("middlename")
  managerphone: CrmProp<string> = new CrmProp<string>("managerphone")
  address2_stateorprovince: CrmProp<string> = new CrmProp<string>("address2_stateorprovince")
  childrensnames: CrmProp<string> = new CrmProp<string>("childrensnames")
  address2_name: CrmProp<string> = new CrmProp<string>("address2_name")
  address3_stateorprovince: CrmProp<string> = new CrmProp<string>("address3_stateorprovince")
  address3_line1: CrmProp<string> = new CrmProp<string>("address3_line1")
  donotsendmm: CrmProp<boolean> = new CrmProp<boolean>("donotsendmm")
  donotbulkemail: CrmProp<boolean> = new CrmProp<boolean>("donotbulkemail")
  address1_primarycontactname: CrmProp<string> = new CrmProp<string>("address1_primarycontactname")
  home2: CrmProp<string> = new CrmProp<string>("home2")
  address1_name: CrmProp<string> = new CrmProp<string>("address1_name")
  address2_telephone3: CrmProp<string> = new CrmProp<string>("address2_telephone3")
  address3_primarycontactname: CrmProp<string> = new CrmProp<string>("address3_primarycontactname")
  ftpsiteurl: CrmProp<string> = new CrmProp<string>("ftpsiteurl")
  address1_postalcode: CrmProp<string> = new CrmProp<string>("address1_postalcode")
  address3_freighttermscode: CrmProp<address3_freighttermscode> = new CrmProp<address3_freighttermscode>("address3_freighttermscode")
  address1_stateorprovince: CrmProp<string> = new CrmProp<string>("address1_stateorprovince")
  followemail: CrmProp<boolean> = new CrmProp<boolean>("followemail")
  jobtitle: CrmProp<string> = new CrmProp<string>("jobtitle")
  stq_collaborationsitemember: CrmProp<boolean> = new CrmProp<boolean>("stq_collaborationsitemember")
  address1_shippingmethodcode: CrmProp<address1_shippingmethodcode> = new CrmProp<address1_shippingmethodcode>("address1_shippingmethodcode")
  preferredappointmentdaycode: CrmProp<preferredappointmentdaycode> = new CrmProp<preferredappointmentdaycode>("preferredappointmentdaycode")
  address2_fax: CrmProp<string> = new CrmProp<string>("address2_fax")
  customersizecode: CrmProp<customersizecode> = new CrmProp<customersizecode>("customersizecode")
  address2_latitude: CrmProp<number> = new CrmProp<number>("address2_latitude")
  employeeid: CrmProp<string> = new CrmProp<string>("employeeid")
  address1_postofficebox: CrmProp<string> = new CrmProp<string>("address1_postofficebox")
  address1_city: CrmProp<string> = new CrmProp<string>("address1_city")
  timezoneruleversionnumber: CrmProp<number> = new CrmProp<number>("timezoneruleversionnumber")
  stq_externalsystem: CrmProp<stq_externalsystem> = new CrmProp<stq_externalsystem>("stq_externalsystem")
  preferredcontactmethodcode: CrmProp<preferredcontactmethodcode> = new CrmProp<preferredcontactmethodcode>("preferredcontactmethodcode")
  leadsourcecode: CrmProp<leadsourcecode> = new CrmProp<leadsourcecode>("leadsourcecode")
  address3_line2: CrmProp<string> = new CrmProp<string>("address3_line2")
  participatesinworkflow: CrmProp<boolean> = new CrmProp<boolean>("participatesinworkflow")
  stq_pmschoolparticipant: CrmProp<boolean> = new CrmProp<boolean>("stq_pmschoolparticipant")
  address2_postofficebox: CrmProp<string> = new CrmProp<string>("address2_postofficebox")
  emailaddress3: CrmProp<string> = new CrmProp<string>("emailaddress3")
  emailaddress2: CrmProp<string> = new CrmProp<string>("emailaddress2")
  emailaddress1: CrmProp<string> = new CrmProp<string>("emailaddress1")
  websiteurl: CrmProp<string> = new CrmProp<string>("websiteurl")
  nickname: CrmProp<string> = new CrmProp<string>("nickname")
  address3_name: CrmProp<string> = new CrmProp<string>("address3_name")
  lastname: CrmProp<string> = new CrmProp<string>("lastname")
  address3_longitude: CrmProp<number> = new CrmProp<number>("address3_longitude")
  stq_customerevaluationmember: CrmProp<boolean> = new CrmProp<boolean>("stq_customerevaluationmember")
  stq_address1_country: CrmProp<stq_address1_country> = new CrmProp<stq_address1_country>("stq_address1_country")
  stq_function: CrmProp<stq_function> = new CrmProp<stq_function>("stq_function")
  stq_newsletter_somaloyupdate: CrmProp<boolean> = new CrmProp<boolean>("stq_newsletter_somaloyupdate")
  onholdtime: CrmProp<number> = new CrmProp<number>("onholdtime")
  marketingonly: CrmProp<boolean> = new CrmProp<boolean>("marketingonly")
  address3_shippingmethodcode: CrmProp<address3_shippingmethodcode> = new CrmProp<address3_shippingmethodcode>("address3_shippingmethodcode")
  telephone1: CrmProp<string> = new CrmProp<string>("telephone1")
  address2_addresstypecode: CrmProp<address2_addresstypecode> = new CrmProp<address2_addresstypecode>("address2_addresstypecode")
  address3_postofficebox: CrmProp<string> = new CrmProp<string>("address3_postofficebox")
  address2_telephone1: CrmProp<string> = new CrmProp<string>("address2_telephone1")
  assistantphone: CrmProp<string> = new CrmProp<string>("assistantphone")
  address2_addressid: CrmProp<EntityReference> = new CrmProp<EntityReference>("address2_addressid")
  address1_composite: CrmProp<string> = new CrmProp<string>("address1_composite")
  donotfax: CrmProp<boolean> = new CrmProp<boolean>("donotfax")
  stq_surveydepartment: CrmProp<stq_surveydepartment> = new CrmProp<stq_surveydepartment>("stq_surveydepartment")
  address3_line3: CrmProp<string> = new CrmProp<string>("address3_line3")
  address2_shippingmethodcode: CrmProp<address2_shippingmethodcode> = new CrmProp<address2_shippingmethodcode>("address2_shippingmethodcode")
  address2_country: CrmProp<string> = new CrmProp<string>("address2_country")
  mobilephone: CrmProp<string> = new CrmProp<string>("mobilephone")
  address1_line1: CrmProp<string> = new CrmProp<string>("address1_line1")
  stq_newsletter_popcentrenews: CrmProp<boolean> = new CrmProp<boolean>("stq_newsletter_popcentrenews")
  yomifirstname: CrmProp<string> = new CrmProp<string>("yomifirstname")
  address3_city: CrmProp<string> = new CrmProp<string>("address3_city")
  address1_country: CrmProp<string> = new CrmProp<string>("address1_country")
  firstname: CrmProp<string> = new CrmProp<string>("firstname")
  stageid: CrmProp<EntityReference> = new CrmProp<EntityReference>("stageid")
  donotphone: CrmProp<boolean> = new CrmProp<boolean>("donotphone")
  suffix: CrmProp<string> = new CrmProp<string>("suffix")
  territorycode: CrmProp<territorycode> = new CrmProp<territorycode>("territorycode")
  timespentbymeonemailandmeetings: CrmProp<string> = new CrmProp<string>("timespentbymeonemailandmeetings")
  address3_composite: CrmProp<string> = new CrmProp<string>("address3_composite")
  address3_addresstypecode: CrmProp<address3_addresstypecode> = new CrmProp<address3_addresstypecode>("address3_addresstypecode")
  familystatuscode: CrmProp<familystatuscode> = new CrmProp<familystatuscode>("familystatuscode")
  utcconversiontimezonecode: CrmProp<number> = new CrmProp<number>("utcconversiontimezonecode")
  address2_county: CrmProp<string> = new CrmProp<string>("address2_county")
  contactid: CrmProp<EntityReference> = new CrmProp<EntityReference>("contactid")
  address2_primarycontactname: CrmProp<string> = new CrmProp<string>("address2_primarycontactname")
  shippingmethodcode: CrmProp<shippingmethodcode> = new CrmProp<shippingmethodcode>("shippingmethodcode")
  address1_line2: CrmProp<string> = new CrmProp<string>("address1_line2")
  isautocreate: CrmProp<boolean> = new CrmProp<boolean>("isautocreate")
  donotemail: CrmProp<boolean> = new CrmProp<boolean>("donotemail")
  processid: CrmProp<EntityReference> = new CrmProp<EntityReference>("processid")
  educationcode: CrmProp<educationcode> = new CrmProp<educationcode>("educationcode")
  company: CrmProp<string> = new CrmProp<string>("company")
  address2_composite: CrmProp<string> = new CrmProp<string>("address2_composite")
  stq_projectmember: CrmProp<boolean> = new CrmProp<boolean>("stq_projectmember")
  numberofchildren: CrmProp<number> = new CrmProp<number>("numberofchildren")
  address3_latitude: CrmProp<number> = new CrmProp<number>("address3_latitude")
}
