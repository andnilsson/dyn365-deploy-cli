
    export interface AttributeTypeName {
        Value: string;
    }

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

    export interface IsAuditEnabled {
        Value: boolean;
        CanBeChanged: boolean;
        ManagedPropertyLogicalName: string;
    }

    export interface IsGlobalFilterEnabled {
        Value: boolean;
        CanBeChanged: boolean;
        ManagedPropertyLogicalName: string;
    }

    export interface IsSortableEnabled {
        Value: boolean;
        CanBeChanged: boolean;
        ManagedPropertyLogicalName: string;
    }

    export interface IsCustomizable {
        Value: boolean;
        CanBeChanged: boolean;
        ManagedPropertyLogicalName: string;
    }

    export interface IsRenameable {
        Value: boolean;
        CanBeChanged: boolean;
        ManagedPropertyLogicalName: string;
    }

    export interface IsValidForAdvancedFind {
        Value: boolean;
        CanBeChanged: boolean;
        ManagedPropertyLogicalName: string;
    }

    export interface RequiredLevel {
        Value: string;
        CanBeChanged: boolean;
        ManagedPropertyLogicalName: string;
    }

    export interface CanModifyAdditionalSettings {
        Value: boolean;
        CanBeChanged: boolean;
        ManagedPropertyLogicalName: string;
    }

    export interface FormatName {
        Value: string;
    }

    export interface DateTimeBehavior {
        Value: string;
    }

    export interface CanChangeDateTimeBehavior {
        Value: boolean;
        CanBeChanged: boolean;
        ManagedPropertyLogicalName: string;
    }

    export interface Attribute {
        MetadataId: string;
        HasChanged?: any;
        AttributeOf: string;
        AttributeType: string;
        AttributeTypeName: AttributeTypeName;
        ColumnNumber: number;
        Description: Description;
        DisplayName: DisplayName;
        DeprecatedVersion?: any;
        IntroducedVersion: string;
        EntityLogicalName: string;
        IsAuditEnabled: IsAuditEnabled;
        IsCustomAttribute: boolean;
        IsPrimaryId: boolean;
        IsPrimaryName: boolean;
        IsValidForCreate: boolean;
        IsValidForRead: boolean;
        IsValidForUpdate: boolean;
        CanBeSecuredForRead: boolean;
        CanBeSecuredForCreate: boolean;
        CanBeSecuredForUpdate: boolean;
        IsSecured: boolean;
        IsRetrievable: boolean;
        IsFilterable: boolean;
        IsSearchable: boolean;
        IsManaged: boolean;
        IsGlobalFilterEnabled: IsGlobalFilterEnabled;
        IsSortableEnabled: IsSortableEnabled;
        LinkedAttributeId?: any;
        LogicalName: string;
        IsCustomizable: IsCustomizable;
        IsRenameable: IsRenameable;
        IsValidForAdvancedFind: IsValidForAdvancedFind;
        RequiredLevel: RequiredLevel;
        CanModifyAdditionalSettings: CanModifyAdditionalSettings;
        SchemaName: string;
        IsLogical: boolean;
        InheritsFrom?: any;
        SourceType?: number;
        
        Format: string;
        FormatName: FormatName;
        ImeMode: string;
        MaxLength?: number;
        YomiOf: string;
        IsLocalizable?: boolean;
        FormulaDefinition: string;
        SourceTypeMask?: number;
        MaxValue?: number;
        MinValue?: number;
        DefaultFormValue?: number;
        DefaultValue?: boolean;
        Precision?: number;
        MinSupportedValue?: Date;
        MaxSupportedValue?: Date;
        DateTimeBehavior: DateTimeBehavior;
        CanChangeDateTimeBehavior: CanChangeDateTimeBehavior;
        Targets: string[];
        PrecisionSource?: number;
        CalculationOf: string;
        IsBaseCurrency?: boolean;
        IsPrimaryImage?: boolean;
        MaxHeight?: number;
        MaxWidth?: number;
    }

    export interface EntityMetadata {
        MetadataId: string;
        
        Attributes: Attribute[];
    }



