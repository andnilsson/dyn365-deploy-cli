import { CrmProp, EntityReference, Money } from './Base'

export enum stq_segment {
 Applications = 6,
 Combined = 3,
 Components = 1,
 Consumables = 2,
 Financial = 5,
 IntraGroup = 4,
}

export enum address1_addresstypecode {
 BillTo = 1,
 ShipTo = 2,
 Primary = 3,
 Other = 4,
}

export enum stq_businesschain {
 Group = 1,
 Region = 2,
 Country = 3,
 Plant = 4,
}

export enum stq_subsector {
 Aerospace = 1,
 Agriculture = 24,
 Alternativeenergy = 18,
 AutomotiveHCV = 30,
 BodyChassi = 27,
 Construction = 12,
 Consumerappliances = 8,
 Defence = 2,
 Electrical = 19,
 Electronics = 23,
 Engine = 25,
 Equipment = 17,
 Foodandfeed = 9,
 Glass = 13,
 Healthcareproducts = 10,
 HeavyMotorizedEquipment = 28,
 Inorganic = 6,
 Intragroup = 33,
 Mining = 7,
 Misc = 34,
 Motorcycles = 29,
 Nonferrousmetals = 4,
 Nuclear = 21,
 OilGas = 20,
 Paint = 11,
 PlasticExtrusion = 14,
 Polymers = 5,
 Printingrolls = 15,
 Pulpandpaper = 16,
 Railways = 31,
 Shipping = 32,
 Steel = 3,
 Transmission = 26,
 Water = 22,
}

export enum stq_region {
 Americas = 1,
 APAC = 2,
 Europe = 3,
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

export enum accountcategorycode {
 PreferredCustomer = 1,
 Standard = 2,
 A = 200000,
 B = 200001,
 C = 200002,
}

export enum stq_suppliertype {
 Agent = 3,
 Forwardingagent = 4,
 Insurancecompany = 7,
 Miscellaneoussuppliers = 2,
 Onlypayee = 5,
 Supplier = 1,
 Suppliergroup = 6,
}

export enum address1_freighttermscode {
 FOB = 1,
 NoCharge = 2,
}

export enum preferredappointmenttimecode {
 Morning = 1,
 Afternoon = 2,
 Evening = 3,
}

export enum accountclassificationcode {
 DefaultValue = 1,
}

export enum customertypecode {
 Account = 200000,
 EndUserOEM = 200001,
 EndUserSystemSupplier = 200002,
 EndUserEngineeringHouse = 200003,
 EndUserAcademics = 200004,
 EndUserOther = 100000000,
 Prospect = 200005,
 Other = 200007,
 CooperationPartner = 200006,
 Supplier = 200008,
 SupplierProspect = 200009,
}

export enum stq_submarket {
 China = 1,
 DSS = 3,
 France = 4,
 Germany = 5,
 GreatBritain = 6,
 Iberica = 7,
 India = 8,
 Italy = 9,
 Japan = 10,
 Korea = 11,
 NOAM = 12,
 SEA = 13,
 SOAM = 14,
 Taiwan = 15,
 CEE = 16,
 Russia = 17,
}

export enum ownershipcode {
 Public = 1,
 Private = 2,
 Subsidiary = 3,
 Other = 4,
}

export enum stq_subsegment {
 enum3DPrinting = 100000001,
 Aluminium = 8,
 Brazing = 9,
 CarrierCores = 10,
 ChemicalOther = 11,
 Combined = 26,
 Components = 1,
 CoreWireInjection = 12,
 Cutting = 13,
 DieselPartFilters = 2,
 DigitalMetal = 34,
 ElectricalDriveSystems = 33,
 FIL = 28,
 Financial = 30,
 Friction = 15,
 GlidcopNonWelding = 14,
 GlidcopWelding = 22,
 HotBags = 16,
 InductorSystems = 32,
 IntraGroup = 29,
 MagneticCharacterRecognit = 17,
 Melting = 18,
 MetalInjectionMoulding = 31,
 MetallurgicalOther = 19,
 MIM = 27,
 Nutrition = 20,
 OxygeneAbsorbes = 21,
 PowderMetallurgy = 3,
 PowderMetallurgyHA = 6,
 SinteredFilters = 4,
 SoftMagnetic = 5,
 SurfaceCoating = 23,
 TextFilters = 24,
 WaterTreatment = 100000000,
 WearResistance = 7,
 Welding = 25,
}

export enum territorycode {
 DefaultValue = 1,
}

export enum stq_externalsystem {
 DW = 1,
 SuperOffice = 2,
}

export enum industrycode {
 Accounting = 1,
 AgricultureandNonpetrolNaturalResourceExtraction = 2,
 BroadcastingPrintingandPublishing = 3,
 Brokers = 4,
 BuildingSupplyRetail = 5,
 BusinessServices = 6,
 Consulting = 7,
 ConsumerServices = 8,
 DesignDirectionandCreativeManagement = 9,
 DistributorsDispatchersandProcessors = 10,
 DoctorsOfficesandClinics = 11,
 DurableManufacturing = 12,
 EatingandDrinkingPlaces = 13,
 EntertainmentRetail = 14,
 EquipmentRentalandLeasing = 15,
 Financial = 16,
 FoodandTobaccoProcessing = 17,
 InboundCapitalIntensiveProcessing = 18,
 InboundRepairandServices = 19,
 Insurance = 20,
 LegalServices = 21,
 NonDurableMerchandiseRetail = 22,
 OutboundConsumerService = 23,
 PetrochemicalExtractionandDistribution = 24,
 ServiceRetail = 25,
 SIGAffiliations = 26,
 SocialServices = 27,
 SpecialOutboundTradeContractors = 28,
 SpecialtyRealty = 29,
 Transportation = 30,
 UtilityCreationandDistribution = 31,
 VehicleRetail = 32,
 Wholesale = 33,
}

export enum businesstypecode {
 DefaultValue = 1,
}

export enum stq_address1_country {
 undefined = 1,
 DONOTUSE = 100000004,
 Albania = 2,
 Algeria = 3,
 Andorra = 4,
 Angola = 5,
 Anguilla = 100000003,
 Argentina = 6,
 Australia = 7,
 Austria = 8,
 Azerbaijan = 9,
 Bahamas = 100000000,
 Bahrain = 10,
 Bangladesh = 11,
 Belarus = 12,
 Belgium = 13,
 Bolivia = 14,
 BosniaandHerzegovina = 15,
 Brazil = 16,
 BritishVirginIslands = 100000001,
 Brunei = 114,
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
 Guam = 100000005,
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
 Mauritius = 100000002,
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

export enum shippingmethodcode {
 DefaultValue = 1,
}

export enum paymenttermscode {
 Net30 = 1,
 enum210Net30 = 2,
 Net45 = 3,
 Net60 = 4,
 PAYMENTINADVANCE = 200011,
 PAYMENTNETCASH7DAYSAFTERDATEOFINVOICE = 200014,
 PAYMENTNETCASH10DAYSAFTERDATEOFINVOICE = 200008,
 PAYMENTNETCASH15DAYSAFTERDATEOFINVOICE = 200021,
 PAYMENTNETCASH28DAYSAFTERDATEOFINVOICE = 200024,
 PAYMENTNETCASH30DAYSAFTERDATEOFINVOICE = 200000,
 PAYMENTNETCASH35DAYSAFTERDATEOFINVOICE = 200005,
 PAYMENTNETCASH45DAYSAFTERDATEOFINVOICE = 200002,
 PAYMENTNETCASH47DAYSAFTERDATEOFINVOICE = 200012,
 PAYMENTNETCASH50DAYSAFTERDATEOFINVOICE = 200019,
 PAYMENTNETCASH60DAYSAFTERDATEOFINVOICE = 200001,
 PAYMENTNETCASH75DAYSAFTERDATEOFINVOICE = 200022,
 PAYMENTNETCASH90DAYSAFTERDATEOFINVOICE = 200010,
 PAYMENTNETCASH120DAYSAFTERDATEOFINVOICE = 200023,
 PAYMENTNETCASHATTHEENDOFTHEMONTHAFTERINVOICEMONTH = 200029,
 PAYMENTNETCASHATTHEENDOFTHEMONTH30DAYSAFTERINVOICEMONTH = 200003,
 PAYMENTNETCASHATTHEENDOFTHEMONTH45DAYSAFTERDATEOFINVOICE = 200016,
 PAYMENTNETCASHONTHE15TH30DAYSAFTERINVOICEMONTH = 200018,
 PAYMENTNETCASHONTHE20TH30DAYSAFTERINVOICEMONTH = 200013,
 PAYMENTNETCASHONTHE20THAFTERINVOICEMONTH = 200030,
 PAYMENTNETCASH15DAYSAFTERINVOICEMONTH = 200006,
 PAYMENTNETCASH30DAYSAFTERINVOICEMONTH = 200004,
 PAYMENTNETCASH45DAYSAFTERINVOICEMONTH = 200020,
 PAYMENTNETCASH60DAYSAFTERINVOICEMONTH = 200009,
 BYTTINADVANCE = 200026,
 AGAINSTIRREVOCABLELC = 200007,
 CASHPAYMENTAGAINSTDOCUMENTS = 200032,
 PAYMENTNETCASHAGAINSTDOCUMENTSCAD = 200017,
 BYTELEGRAPHICTRANSFER45DAYSAFTERDATEOFINVOICE = 200028,
 BYDOCUMENTSAGAINSTPAYMENTBY45DAYSAFTERONBOARDBL = 200027,
 PAYMENTBYLCCONFIRMEDBYANDPAYABLEATSIGHTWITHAGREEDBANK = 200025,
 PAYMENTSECUREDBYBANKGUARANTEEONDEMAND60DAYSAFTERINVOICEDATE = 200015,
 FREEOFCHARGE = 200031,
}

export enum accountratingcode {
 DefaultValue = 1,
}

export enum stq_industry {
 Automotive = 100000000,
 Environmental = 100000002,
 FinMisc = 9,
 Industrial = 4,
 Intragroup = 8,
 Water = 100000001,
}

export enum address2_addresstypecode {
 DefaultValue = 1,
}

export enum customersizecode {
 DefaultValue = 1,
}

export enum preferredcontactmethodcode {
 Any = 1,
 Email = 2,
 Phone = 3,
 Fax = 4,
 Mail = 5,
}

export enum address2_shippingmethodcode {
 DefaultValue = 1,
}

export enum stq_sector {
 Aerospace = 1,
 AerospaceDefence = 100000000,
 Agriculture = 23,
 Alternativeenergy = 17,
 AutomotiveHCV = 31,
 AutomotiveLCV = 24,
 Basicmaterials = 100000001,
 Chemicals = 5,
 Construction = 11,
 Consumer = 100000003,
 Consumerappliances = 7,
 Defence = 2,
 Electrical = 18,
 Electronics = 22,
 Equipment = 16,
 Foodandfeed = 8,
 Glass = 12,
 Healthcareproducts = 9,
 HeavyMotorizedEquipment = 26,
 IntraGroup = 29,
 Mining = 6,
 Misc = 30,
 Motorcycles = 25,
 Nonferrousmetals = 4,
 Nuclear = 20,
 OilGas = 19,
 Paint = 10,
 Paper = 100000002,
 PlasticExtrusion = 13,
 Plastics = 100000007,
 PrintingRolls = 14,
 Pulpandpaper = 15,
 Railways = 27,
 Shipping = 28,
 Steel = 3,
 Technology = 100000004,
 Transport = 100000005,
 Utilities = 100000006,
 Water = 21,
}

export enum stq_market {
 Asia = 1,
 Europe = 2,
 India = 3,
 NOAM = 4,
 SOAM = 5,
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

export enum address2_freighttermscode {
 DefaultValue = 1,
}

export enum stq_suppliergroup {
 Additives = 4,
 Agentsexternal = 20,
 Agentsintragroup = 19,
 Coal = 100000000,
 Consultants = 30,
 Consumables = 10,
 Energy = 8,
 EnergyandUtilities = 29,
 Equipment = 26,
 FinanceAdministration = 16,
 GroupCompanies = 18,
 HRcostsandtemporarystaff = 14,
 Iron = 21,
 ITHardwareandSoftware = 13,
 Logistics = 6,
 Lubricants = 5,
 Maintenance = 3,
 Marketing = 17,
 Miscellaneous = 12,
 Necessities = 25,
 NonFerrous = 100000001,
 Organicandminerals = 100000002,
 Organicmaterialsandminerals = 22,
 Otheradministrativeservices = 28,
 Outsideservice = 11,
 Packaging = 1,
 QAandRD = 15,
 Rawmaterials = 2,
 Redmetals = 23,
 Scrap = 9,
 TravellingandEntertainment = 27,
 Utilities = 7,
 Whitemetals = 24,
}

export class Account {
  emailaddress3: string;
  emailaddress2: string;
  emailaddress1: string;
  address1_city: string;
  stq_segment: stq_segment;
  address1_longitude: number;
  websiteurl: string;
  stq_legalorigin: string;
  donotpostalmail: boolean;
  address1_addresstypecode: address1_addresstypecode;
  stq_businesschain: stq_businesschain;
  stq_isfictiveaccount: boolean;
  sharesoutstanding: number;
  stq_subsector: stq_subsector;
  stq_qa: string;
  stq_responsiblesignature: string;
  stq_region: stq_region;
  donotsendmm: boolean;
  creditonhold: boolean;
  donotbulkpostalmail: boolean;
  address1_shippingmethodcode: address1_shippingmethodcode;
  utcconversiontimezonecode: number;
  accountcategorycode: accountcategorycode;
  address2_stateorprovince: string;
  stq_ownership: string;
  address2_country: string;
  address2_line2: string;
  stq_suppliertype: stq_suppliertype;
  stq_materialorigin: string;
  address1_line3: string;
  onholdtime: number;
  stq_profitability: string;
  address1_freighttermscode: address1_freighttermscode;
  stq_totalsales: string;
  stq_dunsnumber: string;
  address1_utcoffset: number;
  preferredappointmenttimecode: preferredappointmenttimecode;
  numberofemployees: number;
  accountclassificationcode: accountclassificationcode;
  customertypecode: customertypecode;
  address2_county: string;
  telephone3: string;
  address2_city: string;
  stq_mainproducts: string;
  stq_submarket: stq_submarket;
  stq_majorcustomers: string;
  address2_latitude: number;
  donotbulkemail: boolean;
  address2_line1: string;
  donotfax: boolean;
  address1_composite: string;
  ownershipcode: ownershipcode;
  opendeals_state: number;
  stq_headoffice: string;
  stq_localcompanyname: string;
  stq_subsegment: stq_subsegment;
  address2_postalcode: string;
  stq_deliverymethod: string;
  stq_vatnumber: string;
  processid: EntityReference;
  stq_generalcomments: string;
  address2_line3: string;
  description: string;
  stq_distributor: boolean;
  timezoneruleversionnumber: number;
  address1_county: string;
  address1_line1: string;
  donotemail: boolean;
  territorycode: territorycode;
  address2_postofficebox: string;
  address2_telephone1: string;
  address2_telephone2: string;
  address2_telephone3: string;
  address1_addressid: EntityReference;
  traversedpath: string;
  yominame: string;
  stq_externalsystem: stq_externalsystem;
  industrycode: industrycode;
  address2_name: string;
  openrevenue_state: number;
  primarysatoriid: string;
  name: string;
  stq_salesregions: string;
  entityimageid: EntityReference;
  donotphone: boolean;
  timespentbymeonemailandmeetings: string;
  businesstypecode: businesstypecode;
  stq_address1_country: stq_address1_country;
  primarytwitterid: string;
  address2_composite: string;
  shippingmethodcode: shippingmethodcode;
  address1_country: string;
  stq_movexsignature: string;
  address1_stateorprovince: string;
  paymenttermscode: paymenttermscode;
  marketingonly: boolean;
  stq_ts16949: boolean;
  accountratingcode: accountratingcode;
  stq_paymentterms: string;
  address1_telephone1: string;
  address1_telephone2: string;
  address1_telephone3: string;
  address1_postofficebox: string;
  fax: string;
  sic: string;
  address2_utcoffset: number;
  stageid: EntityReference;
  accountnumber: string;
  stq_strategy: string;
  stq_industry: stq_industry;
  address2_fax: string;
  merged: boolean;
  address2_longitude: number;
  ftpsiteurl: string;
  address1_primarycontactname: string;
  address1_line2: string;
  address2_addresstypecode: address2_addresstypecode;
  address2_upszone: string;
  followemail: boolean;
  stq_creditlimit: string;
  address1_postalcode: string;
  tickersymbol: string;
  customersizecode: customersizecode;
  participatesinworkflow: boolean;
  stockexchange: string;
  msdyn_externalaccountid: string;
  preferredcontactmethodcode: preferredcontactmethodcode;
  importsequencenumber: number;
  telephone2: string;
  accountid: EntityReference;
  telephone1: string;
  address1_name: string;
  address1_fax: string;
  address1_latitude: number;
  stq_deliveryterms: string;
  address2_shippingmethodcode: address2_shippingmethodcode;
  stq_sector: stq_sector;
  stq_market: stq_market;
  preferredappointmentdaycode: preferredappointmentdaycode;
  stq_address1_line4: string;
  address2_freighttermscode: address2_freighttermscode;
  address1_upszone: string;
  address2_addressid: EntityReference;
  stq_suppliergroup: stq_suppliergroup;
  stq_mixcode: string;
  address2_primarycontactname: string;
  opendeals: number;
}

export class AccountForm {
  emailaddress3: CrmProp<string> = new CrmProp<string>("emailaddress3")
  emailaddress2: CrmProp<string> = new CrmProp<string>("emailaddress2")
  emailaddress1: CrmProp<string> = new CrmProp<string>("emailaddress1")
  address1_city: CrmProp<string> = new CrmProp<string>("address1_city")
  stq_segment: CrmProp<stq_segment> = new CrmProp<stq_segment>("stq_segment")
  address1_longitude: CrmProp<number> = new CrmProp<number>("address1_longitude")
  websiteurl: CrmProp<string> = new CrmProp<string>("websiteurl")
  stq_legalorigin: CrmProp<string> = new CrmProp<string>("stq_legalorigin")
  donotpostalmail: CrmProp<boolean> = new CrmProp<boolean>("donotpostalmail")
  address1_addresstypecode: CrmProp<address1_addresstypecode> = new CrmProp<address1_addresstypecode>("address1_addresstypecode")
  stq_businesschain: CrmProp<stq_businesschain> = new CrmProp<stq_businesschain>("stq_businesschain")
  stq_isfictiveaccount: CrmProp<boolean> = new CrmProp<boolean>("stq_isfictiveaccount")
  sharesoutstanding: CrmProp<number> = new CrmProp<number>("sharesoutstanding")
  stq_subsector: CrmProp<stq_subsector> = new CrmProp<stq_subsector>("stq_subsector")
  stq_qa: CrmProp<string> = new CrmProp<string>("stq_qa")
  stq_responsiblesignature: CrmProp<string> = new CrmProp<string>("stq_responsiblesignature")
  stq_region: CrmProp<stq_region> = new CrmProp<stq_region>("stq_region")
  donotsendmm: CrmProp<boolean> = new CrmProp<boolean>("donotsendmm")
  creditonhold: CrmProp<boolean> = new CrmProp<boolean>("creditonhold")
  donotbulkpostalmail: CrmProp<boolean> = new CrmProp<boolean>("donotbulkpostalmail")
  address1_shippingmethodcode: CrmProp<address1_shippingmethodcode> = new CrmProp<address1_shippingmethodcode>("address1_shippingmethodcode")
  utcconversiontimezonecode: CrmProp<number> = new CrmProp<number>("utcconversiontimezonecode")
  accountcategorycode: CrmProp<accountcategorycode> = new CrmProp<accountcategorycode>("accountcategorycode")
  address2_stateorprovince: CrmProp<string> = new CrmProp<string>("address2_stateorprovince")
  stq_ownership: CrmProp<string> = new CrmProp<string>("stq_ownership")
  address2_country: CrmProp<string> = new CrmProp<string>("address2_country")
  address2_line2: CrmProp<string> = new CrmProp<string>("address2_line2")
  stq_suppliertype: CrmProp<stq_suppliertype> = new CrmProp<stq_suppliertype>("stq_suppliertype")
  stq_materialorigin: CrmProp<string> = new CrmProp<string>("stq_materialorigin")
  address1_line3: CrmProp<string> = new CrmProp<string>("address1_line3")
  onholdtime: CrmProp<number> = new CrmProp<number>("onholdtime")
  stq_profitability: CrmProp<string> = new CrmProp<string>("stq_profitability")
  address1_freighttermscode: CrmProp<address1_freighttermscode> = new CrmProp<address1_freighttermscode>("address1_freighttermscode")
  stq_totalsales: CrmProp<string> = new CrmProp<string>("stq_totalsales")
  stq_dunsnumber: CrmProp<string> = new CrmProp<string>("stq_dunsnumber")
  address1_utcoffset: CrmProp<number> = new CrmProp<number>("address1_utcoffset")
  preferredappointmenttimecode: CrmProp<preferredappointmenttimecode> = new CrmProp<preferredappointmenttimecode>("preferredappointmenttimecode")
  numberofemployees: CrmProp<number> = new CrmProp<number>("numberofemployees")
  accountclassificationcode: CrmProp<accountclassificationcode> = new CrmProp<accountclassificationcode>("accountclassificationcode")
  customertypecode: CrmProp<customertypecode> = new CrmProp<customertypecode>("customertypecode")
  address2_county: CrmProp<string> = new CrmProp<string>("address2_county")
  telephone3: CrmProp<string> = new CrmProp<string>("telephone3")
  address2_city: CrmProp<string> = new CrmProp<string>("address2_city")
  stq_mainproducts: CrmProp<string> = new CrmProp<string>("stq_mainproducts")
  stq_submarket: CrmProp<stq_submarket> = new CrmProp<stq_submarket>("stq_submarket")
  stq_majorcustomers: CrmProp<string> = new CrmProp<string>("stq_majorcustomers")
  address2_latitude: CrmProp<number> = new CrmProp<number>("address2_latitude")
  donotbulkemail: CrmProp<boolean> = new CrmProp<boolean>("donotbulkemail")
  address2_line1: CrmProp<string> = new CrmProp<string>("address2_line1")
  donotfax: CrmProp<boolean> = new CrmProp<boolean>("donotfax")
  address1_composite: CrmProp<string> = new CrmProp<string>("address1_composite")
  ownershipcode: CrmProp<ownershipcode> = new CrmProp<ownershipcode>("ownershipcode")
  opendeals_state: CrmProp<number> = new CrmProp<number>("opendeals_state")
  stq_headoffice: CrmProp<string> = new CrmProp<string>("stq_headoffice")
  stq_localcompanyname: CrmProp<string> = new CrmProp<string>("stq_localcompanyname")
  stq_subsegment: CrmProp<stq_subsegment> = new CrmProp<stq_subsegment>("stq_subsegment")
  address2_postalcode: CrmProp<string> = new CrmProp<string>("address2_postalcode")
  stq_deliverymethod: CrmProp<string> = new CrmProp<string>("stq_deliverymethod")
  stq_vatnumber: CrmProp<string> = new CrmProp<string>("stq_vatnumber")
  processid: CrmProp<EntityReference> = new CrmProp<EntityReference>("processid")
  stq_generalcomments: CrmProp<string> = new CrmProp<string>("stq_generalcomments")
  address2_line3: CrmProp<string> = new CrmProp<string>("address2_line3")
  description: CrmProp<string> = new CrmProp<string>("description")
  stq_distributor: CrmProp<boolean> = new CrmProp<boolean>("stq_distributor")
  timezoneruleversionnumber: CrmProp<number> = new CrmProp<number>("timezoneruleversionnumber")
  address1_county: CrmProp<string> = new CrmProp<string>("address1_county")
  address1_line1: CrmProp<string> = new CrmProp<string>("address1_line1")
  donotemail: CrmProp<boolean> = new CrmProp<boolean>("donotemail")
  territorycode: CrmProp<territorycode> = new CrmProp<territorycode>("territorycode")
  address2_postofficebox: CrmProp<string> = new CrmProp<string>("address2_postofficebox")
  address2_telephone1: CrmProp<string> = new CrmProp<string>("address2_telephone1")
  address2_telephone2: CrmProp<string> = new CrmProp<string>("address2_telephone2")
  address2_telephone3: CrmProp<string> = new CrmProp<string>("address2_telephone3")
  address1_addressid: CrmProp<EntityReference> = new CrmProp<EntityReference>("address1_addressid")
  traversedpath: CrmProp<string> = new CrmProp<string>("traversedpath")
  yominame: CrmProp<string> = new CrmProp<string>("yominame")
  stq_externalsystem: CrmProp<stq_externalsystem> = new CrmProp<stq_externalsystem>("stq_externalsystem")
  industrycode: CrmProp<industrycode> = new CrmProp<industrycode>("industrycode")
  address2_name: CrmProp<string> = new CrmProp<string>("address2_name")
  openrevenue_state: CrmProp<number> = new CrmProp<number>("openrevenue_state")
  primarysatoriid: CrmProp<string> = new CrmProp<string>("primarysatoriid")
  name: CrmProp<string> = new CrmProp<string>("name")
  stq_salesregions: CrmProp<string> = new CrmProp<string>("stq_salesregions")
  entityimageid: CrmProp<EntityReference> = new CrmProp<EntityReference>("entityimageid")
  donotphone: CrmProp<boolean> = new CrmProp<boolean>("donotphone")
  timespentbymeonemailandmeetings: CrmProp<string> = new CrmProp<string>("timespentbymeonemailandmeetings")
  businesstypecode: CrmProp<businesstypecode> = new CrmProp<businesstypecode>("businesstypecode")
  stq_address1_country: CrmProp<stq_address1_country> = new CrmProp<stq_address1_country>("stq_address1_country")
  primarytwitterid: CrmProp<string> = new CrmProp<string>("primarytwitterid")
  address2_composite: CrmProp<string> = new CrmProp<string>("address2_composite")
  shippingmethodcode: CrmProp<shippingmethodcode> = new CrmProp<shippingmethodcode>("shippingmethodcode")
  address1_country: CrmProp<string> = new CrmProp<string>("address1_country")
  stq_movexsignature: CrmProp<string> = new CrmProp<string>("stq_movexsignature")
  address1_stateorprovince: CrmProp<string> = new CrmProp<string>("address1_stateorprovince")
  paymenttermscode: CrmProp<paymenttermscode> = new CrmProp<paymenttermscode>("paymenttermscode")
  marketingonly: CrmProp<boolean> = new CrmProp<boolean>("marketingonly")
  stq_ts16949: CrmProp<boolean> = new CrmProp<boolean>("stq_ts16949")
  accountratingcode: CrmProp<accountratingcode> = new CrmProp<accountratingcode>("accountratingcode")
  stq_paymentterms: CrmProp<string> = new CrmProp<string>("stq_paymentterms")
  address1_telephone1: CrmProp<string> = new CrmProp<string>("address1_telephone1")
  address1_telephone2: CrmProp<string> = new CrmProp<string>("address1_telephone2")
  address1_telephone3: CrmProp<string> = new CrmProp<string>("address1_telephone3")
  address1_postofficebox: CrmProp<string> = new CrmProp<string>("address1_postofficebox")
  fax: CrmProp<string> = new CrmProp<string>("fax")
  sic: CrmProp<string> = new CrmProp<string>("sic")
  address2_utcoffset: CrmProp<number> = new CrmProp<number>("address2_utcoffset")
  stageid: CrmProp<EntityReference> = new CrmProp<EntityReference>("stageid")
  accountnumber: CrmProp<string> = new CrmProp<string>("accountnumber")
  stq_strategy: CrmProp<string> = new CrmProp<string>("stq_strategy")
  stq_industry: CrmProp<stq_industry> = new CrmProp<stq_industry>("stq_industry")
  address2_fax: CrmProp<string> = new CrmProp<string>("address2_fax")
  merged: CrmProp<boolean> = new CrmProp<boolean>("merged")
  address2_longitude: CrmProp<number> = new CrmProp<number>("address2_longitude")
  ftpsiteurl: CrmProp<string> = new CrmProp<string>("ftpsiteurl")
  address1_primarycontactname: CrmProp<string> = new CrmProp<string>("address1_primarycontactname")
  address1_line2: CrmProp<string> = new CrmProp<string>("address1_line2")
  address2_addresstypecode: CrmProp<address2_addresstypecode> = new CrmProp<address2_addresstypecode>("address2_addresstypecode")
  address2_upszone: CrmProp<string> = new CrmProp<string>("address2_upszone")
  followemail: CrmProp<boolean> = new CrmProp<boolean>("followemail")
  stq_creditlimit: CrmProp<string> = new CrmProp<string>("stq_creditlimit")
  address1_postalcode: CrmProp<string> = new CrmProp<string>("address1_postalcode")
  tickersymbol: CrmProp<string> = new CrmProp<string>("tickersymbol")
  customersizecode: CrmProp<customersizecode> = new CrmProp<customersizecode>("customersizecode")
  participatesinworkflow: CrmProp<boolean> = new CrmProp<boolean>("participatesinworkflow")
  stockexchange: CrmProp<string> = new CrmProp<string>("stockexchange")
  msdyn_externalaccountid: CrmProp<string> = new CrmProp<string>("msdyn_externalaccountid")
  preferredcontactmethodcode: CrmProp<preferredcontactmethodcode> = new CrmProp<preferredcontactmethodcode>("preferredcontactmethodcode")
  importsequencenumber: CrmProp<number> = new CrmProp<number>("importsequencenumber")
  telephone2: CrmProp<string> = new CrmProp<string>("telephone2")
  accountid: CrmProp<EntityReference> = new CrmProp<EntityReference>("accountid")
  telephone1: CrmProp<string> = new CrmProp<string>("telephone1")
  address1_name: CrmProp<string> = new CrmProp<string>("address1_name")
  address1_fax: CrmProp<string> = new CrmProp<string>("address1_fax")
  address1_latitude: CrmProp<number> = new CrmProp<number>("address1_latitude")
  stq_deliveryterms: CrmProp<string> = new CrmProp<string>("stq_deliveryterms")
  address2_shippingmethodcode: CrmProp<address2_shippingmethodcode> = new CrmProp<address2_shippingmethodcode>("address2_shippingmethodcode")
  stq_sector: CrmProp<stq_sector> = new CrmProp<stq_sector>("stq_sector")
  stq_market: CrmProp<stq_market> = new CrmProp<stq_market>("stq_market")
  preferredappointmentdaycode: CrmProp<preferredappointmentdaycode> = new CrmProp<preferredappointmentdaycode>("preferredappointmentdaycode")
  stq_address1_line4: CrmProp<string> = new CrmProp<string>("stq_address1_line4")
  address2_freighttermscode: CrmProp<address2_freighttermscode> = new CrmProp<address2_freighttermscode>("address2_freighttermscode")
  address1_upszone: CrmProp<string> = new CrmProp<string>("address1_upszone")
  address2_addressid: CrmProp<EntityReference> = new CrmProp<EntityReference>("address2_addressid")
  stq_suppliergroup: CrmProp<stq_suppliergroup> = new CrmProp<stq_suppliergroup>("stq_suppliergroup")
  stq_mixcode: CrmProp<string> = new CrmProp<string>("stq_mixcode")
  address2_primarycontactname: CrmProp<string> = new CrmProp<string>("address2_primarycontactname")
  opendeals: CrmProp<number> = new CrmProp<number>("opendeals")
}
