import { CordonneeGeographique } from "./CordonneeGeographique.model";
import { AdressesUtiles } from "./adresseUtil.model";
import { ServiceFourni } from "./serviceFourni.model";

export interface Horaire {
  _id: string;
  heurDebut: string;
  heurFin: string;
  DayDebut: string;
  Dayfin: string;
  DateDebut: Date;
  DateFin: Date;
  CordonneeGeographique?: CordonneeGeographique | string;
  AdressesUtiles?: AdressesUtiles | string;
  service?:ServiceFourni;
}