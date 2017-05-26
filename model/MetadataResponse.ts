export interface LocalizedLabel {
    Label: string;
    LanguageCode: number;
    IsManaged: boolean;
    MetadataId: string;
    HasChanged?: any;
}

export interface UserLocalizedLabel {
    Label: string;
    LanguageCode: number;
    IsManaged: boolean;
    MetadataId: string;
    HasChanged?: any;
}

export interface DisplayName {
    LocalizedLabels: LocalizedLabel[];
    UserLocalizedLabel: UserLocalizedLabel;
}

export interface MetadataContents {
    DisplayName: DisplayName;
    IsKnowledgeManagementEnabled: boolean;
    EntitySetName: string;
    MetadataId: string;
}

export interface MetadataResponse {
    value: MetadataContents[];
}

