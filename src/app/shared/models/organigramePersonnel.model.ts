import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model";
import { OrganigrameStructure } from "./organigrameStructure.model";

export interface  organigramePersonnel{
    _id : string;
    civilite : string;
    nom : string;
    prenom : string;
    fonction : string;
    Presentation : string;
    mission : string;
    departement : string;
    service : string;
    photo : string;
    telFix : string;
    gsm : string;
    email : string;
    enActive : string;
    organigrammeStructure ?: OrganigrameStructure | string;
    organigramePersonnelPrincipale ?: organigramePersonnel |  string;
    organigramePersonnelAsso : organigramePersonnel[];
    acteur ?: acteurSocioEcanomique | string;
}