import { ProduitServiceSolPropre2 } from "./ProduitServiceSolPropre2.model";

export interface catalogue {
    referenceCataloge: string;
    classCatalogue: string
    typeDestinatiare: string
    translations: {
        titreCatalogue: string
        descriptionCatalogue: string
    }
    image: string
    sloganCatalogue: string
    editionCatalogue: string
    dateEtPeriodeDeCatalogue: Date;
    documentAssocie: string
    etatPublicationCatalogue: string
    produiService : ProduitServiceSolPropre2[]
}