import { ActionCitoyenne } from "./ActionCitoyenne.model";

export interface instruction{
    id: string;
    classInstructionAssoscie : string ;
    phaseConcernee : string ;
    translations :{
        language : string ;
        designation : string ;
        description : string;
    }
    EtatInstruction : string;
    CommentaireInterne : string;
    ActionCitoyenne : ActionCitoyenne | string;
}