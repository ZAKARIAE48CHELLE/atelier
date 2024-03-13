import { ligneTransaction } from "./ligneTransaction.model";

export interface TransactionCommerciale{

_id: string; 
etatobjet: string;
classe: string;
fluxTransaction: string;
multiFournisseur: boolean;
refTransaction: string;
dateTransaction: Date | string;
dateEnregistrement: Date | string;
montantHT: number;
montantRemise: number;
montantTVA: number;
monnaie: string;
translations: { 
    language: string;
    commentaireTransaction: string
}; 
LangueCommande: string;
urlDocPdfTransaction: string;
auteurTransaction: string;
etatTransaction: string;
transactionCommercialePrincipal: TransactionCommerciale[];
transactionCommercialeAssociee:TransactionCommerciale[];
ligneTransaction: ligneTransaction[];
instanceActeur: string[];
paiements: string[];
autreConditions: string[];
conditionDuPaiment: string[];
documentAssociee: string[];
objetAssociee: string[]; livraison: string[];
bonDeLivraison: string[];
instanceCoordonnee: string[];
probleme: string[];
indicateurDeSuiviEtRealisation: string[];
etatsObjets: string[];
instructions: string[];
createdAt?: Date | string;
updatedAt?: Date | string;
[key: string]: any;

}