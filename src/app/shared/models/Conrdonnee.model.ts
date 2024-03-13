import { Horaire } from "./Horaire.model";

export interface Coordonnee {
  _id: string;
  refCordonne: string;
  pays: string;
  region: string;
  ZoneUrbaineRurale: string;
  villePrincipale: string;
  commune: string;
  quartier: string;
  cp: string;
  adress: string;
  longitude: number;
  latitude: number;
  translations: {
    description: string;
  };
  planAcces: string;
  tel: string;
  Horaire ?: Horaire[] | null ;
  Mobile: string;
  fax: string;
  email: string;
  web: string;
  EtatCoord: number;
}