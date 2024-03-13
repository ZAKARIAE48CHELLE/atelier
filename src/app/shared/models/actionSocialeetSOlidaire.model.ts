import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model";

export interface actionSocialeetSOlidaire {
    _id: string;
    typeAction : string;
    dateAction : Date;
    typeBeneficiere : string;
    nomBeneficiere : string;
    photo : string
    commentaire : string
    lienAssocie : string;
    contenuMMedia : string;
    acteur : acteurSocioEcanomique |string;

} 