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

    export interface Description {
        LocalizedLabels: LocalizedLabel[];
        UserLocalizedLabel: UserLocalizedLabel;
    }

    export interface LocalizedLabel2 {
        Label: string;
        LanguageCode: number;
        IsManaged: boolean;
        MetadataId: string;
        HasChanged?: any;
    }

    export interface UserLocalizedLabel2 {
        Label: string;
        LanguageCode: number;
        IsManaged: boolean;
        MetadataId: string;
        HasChanged?: any;
    }

    export interface DisplayName {
        LocalizedLabels: LocalizedLabel2[];
        UserLocalizedLabel: UserLocalizedLabel2;
    }

    export interface IsCustomizable {
        Value: boolean;
        CanBeChanged: boolean;
        ManagedPropertyLogicalName: string;
    }

    export interface LocalizedLabel3 {
        Label: string;
        LanguageCode: number;
        IsManaged: boolean;
        MetadataId: string;
        HasChanged?: any;
    }

    export interface UserLocalizedLabel3 {
        Label: string;
        LanguageCode: number;
        IsManaged: boolean;
        MetadataId: string;
        HasChanged?: any;
    }

    export interface Label {
        LocalizedLabels: LocalizedLabel3[];
        UserLocalizedLabel: UserLocalizedLabel3;
    }

    export interface Description2 {
        LocalizedLabels: any[];
        UserLocalizedLabel?: any;
    }

    export interface Option {
        Value: number;
        Label: Label;
        Description: Description2;
        Color?: any;
        IsManaged: boolean;
        MetadataId?: any;
        HasChanged?: any;
    }

    export interface OptionSet {
        MetadataId: string;
        HasChanged?: any;
        Description: Description;
        DisplayName: DisplayName;
        IsCustomOptionSet: boolean;
        IsGlobal: boolean;
        IsManaged: boolean;
        IsCustomizable: IsCustomizable;
        Name: string;
        OptionSetType: string;
        IntroducedVersion?: any;
        Options: Option[];
    }

    export interface Value {
        LogicalName: string;
        MetadataId: string;
        
        OptionSet: OptionSet;
        GlobalOptionSet?: any;
    }

    export interface OptionsetMetadata {        
        value: Value[];
    }



