import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model";

export interface ContenuMMedia{
    taxonomyContenu : string;
    refContenu : string;
    FormatDoc : string;
    translations : {
        titreDoc : string;
        SousTitre : string;
        resume : string;
    }
    file : string;
    image : string;
    Date : Date;
    typeContenu : string
    Auteurs : string[];
    lienContenu : string;
    langueParDefaut : string
    Telechargeable : boolean;
    tailleDoc : number;
    TailleLimmite : number;
    uniteTaille : string ;
    provenanceInterne : boolean;
    Payant : boolean;
    DroitLibre : boolean;
    DroitPublication : boolean;
    publicationAutorisee : boolean;
    preuveDroitSiNonLibre : string;
    acteur ?: acteurSocioEcanomique | string 
}