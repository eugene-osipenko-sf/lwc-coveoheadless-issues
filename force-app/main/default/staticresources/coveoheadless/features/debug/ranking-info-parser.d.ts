export declare type RankingInfo = ReturnType<typeof parseRankingInfo>;
export interface ListOfWeights {
    Adjacency: number;
    'Collaborative rating': number;
    Custom: number;
    Date: number;
    QRE: number;
    Quality: number;
    'Ranking functions': number;
    Source: number;
    Title: number;
    [key: string]: number;
}
export interface ListOfQRE {
    expression: string;
    score: number;
}
export declare type ListOfTermsWeights = Record<string, WeightsPerTerm>;
export interface WeightsPerTerm {
    Weights: WeightsPerTermBreakdown;
    terms: Record<string, WeightsPerTermPerDocument>;
}
export interface WeightsPerTermBreakdown {
    Casing: number;
    Concept: number;
    Formatted: number;
    Frequency: number;
    Relation: number;
    Summary: number;
    Title: number;
    URI: number;
    [key: string]: number;
}
export interface WeightsPerTermPerDocument {
    Correlation: number;
    'TF-IDF': number;
}
export declare const parseRankingInfo: (value: string) => {
    documentWeights: ListOfWeights | null;
    termsWeight: Record<string, WeightsPerTerm> | null;
    totalWeight: number | null;
    qreWeights: ListOfQRE[];
} | null;
