export interface document {
    id: string;
    translations: {
        titre : string
        Description : string
        langue : string
    }
    image : string
    taille : number
    datePubications: Date | string
    format: string
    auteur: string
    documentUrl: string
    documentTelecharger : boolean
}