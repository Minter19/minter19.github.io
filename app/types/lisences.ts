export interface ILisencesData{
    id: number,
    name: string,
    company: string,
    issuedDate: string,
    credentialID: string | null,
    skills: string | null,
    lisenceUrl?: string | null,
    logoUrl: string
}