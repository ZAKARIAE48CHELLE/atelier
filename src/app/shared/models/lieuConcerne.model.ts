import { Coordonnee } from "./Conrdonnee.model"
import { CordonneeGeographique } from "./CordonneeGeographique.model"

export interface lieuConcerne {
    reflieu : string
    interneExterne : boolean
    personneAContacte : string
    telPersonne : string
    emailPersonne : string
    RemplacementLienInitial : boolean
    raisonRemplacement : string
    EtatEtulisation : boolean
    commentaireInterne : string
    cordonne : Coordonnee
}