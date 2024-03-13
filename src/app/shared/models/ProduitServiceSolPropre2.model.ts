import { ContenuMMedia } from "./ContenuMMEDIA.model";
import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model";
import { Distinction } from "./distinction.model";
import { instanceCaracteristique } from "./instanceCaracteristique.model";
import { SocialMedia } from "./socialMedia.mode";


export interface ProduitServiceSolPropre2 {
  id: string; 
  categorieProduit: string; //Taxonomie
  typeProduit: string; 
  translations : {
    language :string ;
    designationProduit :string ;
    slogan :string ;
    descriptifProduit :string ;
    messageAachat :string ,
    tags :string[]
  };
  messageBoutonSiExterne :string ;
  venteSeule: boolean;
  typeVente: string; 
  tarifSpecial: string;
  typeTarif: string; //CodeTypeTarif
  produitVirtuel: boolean;
  produitTelechargeable: boolean;
  event: boolean;
  dateDebutEvent: Date;
  dateFinEvent: Date;
  slogan: string;
  imageProduit: string; //CodeImage
  madeInProduit: string; //ZoneID
  productTAG: string;
  unityProduit: string;//Or Taxonomie
  affichageTarif: string;//CodeAffichageTarif
  tarifUHTpardefaut: number;
  monnaiePays: string | undefined; //Taxonomie
  tVApardefaut: number;
  paysTVAdefaut: string;//ZoneID
  ordreAffichageProduit: number;
  messageAfficherAchat: string;
  commandeQuantiteReglementee: boolean;
  qteMaxParCommande: number;
  qteMinParCommande: number;
  urlSiExterne: number;
  afficherAvis: boolean;
  affichagePublic: boolean;
  indicationEtatStock: boolean;
  relationavecGestionSock:boolean;
  etatPublicationProduit: string; //CodeEtatPub
  refProduitServiceSolPropre2?: string[];
  caracteristiques?: instanceCaracteristique[];
  distinctions?: Distinction[];
  contenuMedia?: ContenuMMedia[];
  socialMedia?:SocialMedia[];
  acteur : acteurSocioEcanomique | string
}