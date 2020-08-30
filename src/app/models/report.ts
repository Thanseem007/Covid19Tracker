export interface Report
{
    country: string;
    dateTimes: string[];
    cases:number[];
    recovered:number[];
    death:number[];
    TotalDeath:number;
    TotalRecovery:number;
    TotalCases:number;
}