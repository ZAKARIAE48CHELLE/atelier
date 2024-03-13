import { AgendaEvent } from "./AgendaEvent.model";
import { lieuConcerne } from "./lieuConcerne.model";
import { protagoniste } from "./protagoniste.model";



export interface ProgrammeEvent {
_id: string;
etatobjet: string;
categorieProgramme: string;
translations: { 
    language: string; 
designation: string;
 description: string 
};
dateHeureDebut: Date | string;
dateHeureFin: Date | string;
accesibilite: boolean;
programmeEventParent: ProgrammeEvent | string;
programmeEventChildren : ProgrammeEvent[]
agendaEvent: AgendaEvent | string;
lieuConcerne: lieuConcerne[];
protagonistePotentiel: protagoniste[];

}