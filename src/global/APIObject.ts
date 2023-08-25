export interface APIObject {
    [key: string]: APIAttribute;
}

export type APIAttribute = {
    detail: boolean,
    value: any
}

export class APIObjectClass {
    
}