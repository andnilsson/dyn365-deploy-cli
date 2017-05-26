import { CrmProp, EntityReference, Money } from './Base'


export class Action {
  stq_commentsbyfollowupresponsible: string;
  stq_actionid: EntityReference;
  stq_signatureready: string;
  importsequencenumber: number;
  emailaddress: string;
  stq_actiondescription: string;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  stq_actionisissued: boolean;
  stq_commentsbyresponsible: string;
  stq_name: string;
  stq_signaturefollowupready: string;
}

export class ActionForm {
  stq_commentsbyfollowupresponsible: CrmProp<string> = new CrmProp<string>("stq_commentsbyfollowupresponsible")
  stq_actionid: CrmProp<EntityReference> = new CrmProp<EntityReference>("stq_actionid")
  stq_signatureready: CrmProp<string> = new CrmProp<string>("stq_signatureready")
  importsequencenumber: CrmProp<number> = new CrmProp<number>("importsequencenumber")
  emailaddress: CrmProp<string> = new CrmProp<string>("emailaddress")
  stq_actiondescription: CrmProp<string> = new CrmProp<string>("stq_actiondescription")
  timezoneruleversionnumber: CrmProp<number> = new CrmProp<number>("timezoneruleversionnumber")
  utcconversiontimezonecode: CrmProp<number> = new CrmProp<number>("utcconversiontimezonecode")
  stq_actionisissued: CrmProp<boolean> = new CrmProp<boolean>("stq_actionisissued")
  stq_commentsbyresponsible: CrmProp<string> = new CrmProp<string>("stq_commentsbyresponsible")
  stq_name: CrmProp<string> = new CrmProp<string>("stq_name")
  stq_signaturefollowupready: CrmProp<string> = new CrmProp<string>("stq_signaturefollowupready")
}
