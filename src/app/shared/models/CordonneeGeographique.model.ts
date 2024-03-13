import { Horaire } from "./Horaire.model";
import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model";

export interface CordonneeGeographique{

    _id : string;
    Refacteur?: acteurSocioEcanomique|string;
    adress : string;
    latitude: number;
    longitude: number;

}