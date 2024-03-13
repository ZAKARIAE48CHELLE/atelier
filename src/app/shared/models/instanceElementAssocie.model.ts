import { AgendaEvent } from "./AgendaEvent.model";
import { lieuConcerne } from "./lieuConcerne.model";



export interface InstanceElementAssocie {
id: string;
etatobjet: string;
phaseEvenement: string;
translations: { language: string; designation: string; description: string };
agendaEvent: AgendaEvent |string;
lieuConcerne: lieuConcerne[];
objetAssocie: string[];

referenceDocumentsAppuisPreuve: string[];
createdAt: Date | string;
updatedAt: Date | string; [key: string]: any;
}