import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model";
import { Eservice } from "./eservice.model";
import { instanceCaracteristique } from "./instanceCaracteristique.model";


 export interface ConditionParticuliere {
_id: string;
etatobjet: string;
conditions: instanceCaracteristique[];
acteurProfessionnelAssocie: acteurSocioEcanomique[];
eService: Eservice[];
createdAt: Date | string;
updatedAt: Date | string;
[key: string]: any;
}