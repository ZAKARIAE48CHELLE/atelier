import { AgendaEvent } from "./AgendaEvent.model";


export interface RelationInterEvent {
    id: string;
    etatobjet: string;
    typeRelation: string;
    agendaEventParent: AgendaEvent;
    agendaEventAssocie: AgendaEvent[];
    createdAt: Date | string;
    updatedAt: Date | string;
}