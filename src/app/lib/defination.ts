export type Owner = {
    id: string;
    firstName: string;
    lastName: string;
    profilePicture?: string;
    mobile?: string;
    email?: string;
}

export interface DuesFilterType {
    period: String;
    duesType: string[];
}