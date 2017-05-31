import { CrmProp, EntityReference, Money, IQueryable } from './Base'

export enum stq_unit {
 kg = 1,
 MT = 2,
 lbs = 3,
}

export class QuotationPriceItem implements IQueryable {
  getSchemaName() { return "stq_quotationpriceitems" };
  createdonbehalfbyyominame: string;
  modifiedonbehalfby: EntityReference
  owningteam: EntityReference
  transactioncurrencyidname: string;
  stq_sourcetext: string;
  owneridname: string;
  stq_avgprmon_base: Money;
  owninguser: EntityReference
  createdonbehalfby: EntityReference
  stq_name: string;
  stq_spotprice_base: Money;
  importsequencenumber: number;
  stq_metalitemidname: string;
  utcconversiontimezonecode: number;
  createdbyyominame: string;
  owningbusinessunit: EntityReference
  modifiedbyname: string;
  modifiedby: EntityReference
  modifiedbyyominame: string;
  createdby: EntityReference
  timezoneruleversionnumber: number;
  stq_quotationproductid: EntityReference
  stq_reference: string;
  owneridyominame: string;
  modifiedon: Date;
  modifiedonbehalfbyname: string;
  transactioncurrencyid: EntityReference
  modifiedonbehalfbyyominame: string;
  ownerid: EntityReference
  createdbyname: string;
  createdon: Date;
  stq_metalitemid: EntityReference
  createdonbehalfbyname: string;
  stq_modifiedprice: Money;
  stq_unit: stq_unit;
  stq_modifiedprice_base: Money;
  stq_avgprmon: Money;
  stq_quotationproductidname: string;
  stq_quotationpriceitemid: string;
  stq_spotprice: Money;
  overriddencreatedon: Date;
}

export class QuotationPriceItemForm {
  createdonbehalfbyyominame: CrmProp<string> = new CrmProp<string>("createdonbehalfbyyominame")
  modifiedonbehalfby: CrmProp<EntityReference> = new CrmProp<EntityReference>("modifiedonbehalfby")
  owningteam: CrmProp<EntityReference> = new CrmProp<EntityReference>("owningteam")
  transactioncurrencyidname: CrmProp<string> = new CrmProp<string>("transactioncurrencyidname")
  stq_sourcetext: CrmProp<string> = new CrmProp<string>("stq_sourcetext")
  owneridname: CrmProp<string> = new CrmProp<string>("owneridname")
  stq_avgprmon_base: CrmProp<Money> = new CrmProp<Money>("stq_avgprmon_base")
  owninguser: CrmProp<EntityReference> = new CrmProp<EntityReference>("owninguser")
  createdonbehalfby: CrmProp<EntityReference> = new CrmProp<EntityReference>("createdonbehalfby")
  stq_name: CrmProp<string> = new CrmProp<string>("stq_name")
  stq_spotprice_base: CrmProp<Money> = new CrmProp<Money>("stq_spotprice_base")
  importsequencenumber: CrmProp<number> = new CrmProp<number>("importsequencenumber")
  stq_metalitemidname: CrmProp<string> = new CrmProp<string>("stq_metalitemidname")
  utcconversiontimezonecode: CrmProp<number> = new CrmProp<number>("utcconversiontimezonecode")
  createdbyyominame: CrmProp<string> = new CrmProp<string>("createdbyyominame")
  owningbusinessunit: CrmProp<EntityReference> = new CrmProp<EntityReference>("owningbusinessunit")
  modifiedbyname: CrmProp<string> = new CrmProp<string>("modifiedbyname")
  modifiedby: CrmProp<EntityReference> = new CrmProp<EntityReference>("modifiedby")
  modifiedbyyominame: CrmProp<string> = new CrmProp<string>("modifiedbyyominame")
  createdby: CrmProp<EntityReference> = new CrmProp<EntityReference>("createdby")
  timezoneruleversionnumber: CrmProp<number> = new CrmProp<number>("timezoneruleversionnumber")
  stq_quotationproductid: CrmProp<EntityReference> = new CrmProp<EntityReference>("stq_quotationproductid")
  stq_reference: CrmProp<string> = new CrmProp<string>("stq_reference")
  owneridyominame: CrmProp<string> = new CrmProp<string>("owneridyominame")
  modifiedon: CrmProp<Date> = new CrmProp<Date>("modifiedon")
  modifiedonbehalfbyname: CrmProp<string> = new CrmProp<string>("modifiedonbehalfbyname")
  transactioncurrencyid: CrmProp<EntityReference> = new CrmProp<EntityReference>("transactioncurrencyid")
  modifiedonbehalfbyyominame: CrmProp<string> = new CrmProp<string>("modifiedonbehalfbyyominame")
  ownerid: CrmProp<EntityReference> = new CrmProp<EntityReference>("ownerid")
  createdbyname: CrmProp<string> = new CrmProp<string>("createdbyname")
  createdon: CrmProp<Date> = new CrmProp<Date>("createdon")
  stq_metalitemid: CrmProp<EntityReference> = new CrmProp<EntityReference>("stq_metalitemid")
  createdonbehalfbyname: CrmProp<string> = new CrmProp<string>("createdonbehalfbyname")
  stq_modifiedprice: CrmProp<Money> = new CrmProp<Money>("stq_modifiedprice")
  stq_unit: CrmProp<stq_unit> = new CrmProp<stq_unit>("stq_unit")
  stq_modifiedprice_base: CrmProp<Money> = new CrmProp<Money>("stq_modifiedprice_base")
  stq_avgprmon: CrmProp<Money> = new CrmProp<Money>("stq_avgprmon")
  stq_quotationproductidname: CrmProp<string> = new CrmProp<string>("stq_quotationproductidname")
  stq_quotationpriceitemid: CrmProp<string> = new CrmProp<string>("stq_quotationpriceitemid")
  stq_spotprice: CrmProp<Money> = new CrmProp<Money>("stq_spotprice")
  overriddencreatedon: CrmProp<Date> = new CrmProp<Date>("overriddencreatedon")
}
