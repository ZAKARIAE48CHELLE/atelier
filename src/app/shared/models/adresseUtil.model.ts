import { Coordonnee } from "./Conrdonnee.model";
import { ContenuMMedia } from "./ContenuMMEDIA.model";
import { Horaire } from "./Horaire.model";
import { ServiceFourni } from "./serviceFourni.model";

export interface AdressesUtiles {
  id: string;
  logo: string;
  translations:{
    designation: string;
    descriptif: string;

  }
  adresse: string;
  ville: string;
  cp?: number;
  region: string;
  province: string;
  pays: string;
  codePostal: string;
  telephones: string[];
  fax: string;
  email: string;
  image: string[];
  siteweb: string;
  Horaire: Horaire[];
  latitude: string;
  longitude: string;
  addressUtilesPrincipale: AdressesUtiles | null;
  addressUtilesAssocie: AdressesUtiles[];
  cordonnee: Coordonnee[];
  ContenuMMedia: ContenuMMedia[];
  servicefourni: ServiceFourni[];
} 
//add model for cordonne and media 