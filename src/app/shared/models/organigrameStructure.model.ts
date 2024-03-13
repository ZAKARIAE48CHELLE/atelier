import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model"
import { organigramePersonnel } from "./organigramePersonnel.model"

export interface OrganigrameStructure {
    _id  : string
    typeStructure :string 
    nom:string
    Effectif : number
    acteur : acteurSocioEcanomique | string
    organigramePersonnel  : organigramePersonnel[] ;
    OrganigrameStructurePricnipale : OrganigrameStructure | string
    OrganigrameStructureAsso : OrganigrameStructure[]
}