import { coordBien } from "./coordBien.model";
import { instanceCaracteristique } from "./instanceCaracteristique.model";
import { Membre } from "./membre.model";


export interface petiteAnnonce{
    id: string;
    refMember: Membre 
    typeAnnonce:string 
    photos: string [];
    translations :{
        titre: string;
        description: string;
    }
    naturePrix: string;
    prix: number ;
    motscles: string[];
    monnaie: string;
    phone: number
    classAnnonce:string,
    taxoAnnonce : string
    dateDebutPublication: Date | string;
    afficheCoordBien: boolean;
    instanceCaracteristique : instanceCaracteristique []
    coordBien : coordBien
}