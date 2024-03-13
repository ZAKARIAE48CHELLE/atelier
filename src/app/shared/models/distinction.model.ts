import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model";

export interface Distinction{

typeDistinction : string;
dateDistinction : Date |string;
translations : {
    language : string;
    designation : string;
    description : string;
}
image?:string;

institutionResponsable : string ;
logoInstitution : string;
acteur : acteurSocioEcanomique | string;

}