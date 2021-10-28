export interface ICoin {
    s: string;
    p: number;
    ch: number;
}

export interface ICoinData {
    data: [ ICoin ];
    error: string;
}
