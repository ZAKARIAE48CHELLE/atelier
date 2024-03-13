import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model";
import { InstanceElementAssocie } from "./instanceElementAssocie.model";
import { ProgrammeEvent } from "./programmeEvent.model";


export interface AgendaEvent {
    id: string;
    etatEvent: string;
    etatobjet: string;
    referenceEvent: string;
    categorieEvent: string;
    presentielEnligne: string;
    translations: {
        language: string;
        designation: string;
        slogan: string;
        description: string;
    };
    images: string[];
    dateDebut: Date | string;
    dateFin: Date | string;
    multiSessions: boolean;
    multisites: boolean;
    accessibilite: string;
    avecDistribution: boolean;
    RecompensesPrix: boolean;
    reservationObligatoire: boolean;
    relationInterEventParent: string;
    relationInterEventAssocie: string[];
    programmeEvent: ProgrammeEvent[];
    instanceElementAssocie: InstanceElementAssocie[];
    probleme: string[];
    reservation: string[];
    faq: string[];
    produitServices: string[];
    indicationTarifaire: string[];
    protagonistePotentiel: string[];
    recompence: string[];
    rapportBilan: string[];
    echangeCommunication: string[];
    instructions: string[];
    etatDeObjet: string[];
    statistiquesDirectes: string[];
    conditions: string[];
    instanceCarateristique: string[];
    acteur : acteurSocioEcanomique | string;

}