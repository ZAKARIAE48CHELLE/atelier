import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model";


export interface Expression {
    id: string;
    etatDePublication: string; etatobjet: string;
    refExpression: string;
    langue: string;
    translations: { language: string; expression: string };
    dateEnregistrement:
    Date | string;
    dateValidation: Date | string;
    datePublication: Date | string;
    motscle: string;
    acteur: acteurSocioEcanomique | string;
}