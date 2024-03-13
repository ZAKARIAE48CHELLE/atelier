import { ProduitServiceSolPropre2 } from "./ProduitServiceSolPropre2.model";
import { TransactionCommerciale } from "./TransactionCommerciale.model";
import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model";

export interface ligneTransaction{

_id: string;
etatobjet: string;
refProduit: ProduitServiceSolPropre2 ;
translations: { language: string; designation: string; descriptif: string };
puht: number;
quantite: number;
unite: string;
remise: number;
prixPromoSpe: number
tauxTVA: number;
refFournisseur:string | acteurSocioEcanomique;
transactionCommerciale: TransactionCommerciale | string;
instructions: string[];
createdAt?: Date | string;
updatedAt?: Date | string; [key: string]: any;
}


