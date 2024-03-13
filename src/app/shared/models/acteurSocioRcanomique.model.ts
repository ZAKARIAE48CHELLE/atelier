import { SocialMediaComponent } from "../components/social-media/social-media.component";
import { AgendaEvent } from "./AgendaEvent.model";
import { Coordonnee } from "./Conrdonnee.model";
import { ContenuMMedia } from "./ContenuMMEDIA.model";
import { Horaire } from "./Horaire.model";
import { Parrainepar } from "./Parrainepar.model";
import { ProduitServiceSolPropre2 } from "./ProduitServiceSolPropre2.model";
import { TransactionCommerciale } from "./TransactionCommerciale.model";
import { actionSocialeetSOlidaire } from "./actionSocialeetSOlidaire.model";
import { actionnaire } from "./actionnaire.model";
import { catalogue } from "./catalogue.model";
import { conditionPaiment } from "./conditionPaiment.model";
import { ConseilAdministration } from "./conseuilAdministratif.model";
import { Distinction } from "./distinction.model";
import { enregistrementLegale } from "./enregistrementLegale.model";
import { Eservice } from "./eservice.model";
import { Expression } from "./expression.model";
import { QuestionsFAQ } from "./faq.model";
import { histoire } from "./histoire.model";
import { instanceCaracteristique } from "./instanceCaracteristique.model";
import { nationaliteEtLongue } from "./nationalite.model";
import { organigramePersonnel } from "./organigramePersonnel.model";
import { OrganigrameStructure } from "./organigrameStructure.model";
import { relationInterActeur } from "./relationInterActeur.model";
import { representationDunMarque } from "./representationDunMarque.model";
import { SocialMedia } from "./socialMedia.mode";
import { Temoignage } from "./temoignae.model";

export interface acteurSocioEcanomique {
  _id: string;
  RefSocioEco: string;
  TypeStructure: string;
  StatutStructure: string;
  SecteurActivitePrincipal: string;
  ActivitePrincipale: string;
  translations: {
    nomStructure: string;
    Slogan: string; 
    Descriptif: string;
    CommeentaireInterne: string;
  };
  Logo: string;
  Pays_Origine: string;
  telephone: string[];
  fax : string;
  email : string;
  SiteWeb?: string;
  AnneeCreation: Date | string;
  Notation: number;
  Effectif_global: string;
  CordonneeGeographique: Coordonnee[];
  Horaire : Horaire[];
  distinction ?: Distinction[];
  histoire ?: histoire[];
  instanceCaracteristique : instanceCaracteristique[];
  nationaliteEtLongue ?: nationaliteEtLongue[];
  relationInterActeur ?: relationInterActeur[];
  OrganigrameStructure?: OrganigrameStructure[];
  organigramePersonnel: organigramePersonnel[]
  actionnaire ?: actionnaire[]
  conseilAdministration ?: ConseilAdministration[]
  socialMedia : SocialMedia[]
  temoignage ?: Temoignage[]
  parrainePar ?: Parrainepar[];
  representaionDunMarque : representationDunMarque[]; 
  faq : QuestionsFAQ[]
  actionSocialeetSOlidaire : actionSocialeetSOlidaire[];
  contennuMMedia : ContenuMMedia[];
  produiteEtService : ProduitServiceSolPropre2[];
  catalogue : catalogue[]
  enregistrementLegale : enregistrementLegale[],
  tags : Expression[];
  agendaEvent : AgendaEvent[]
  TransactionCommerciale : TransactionCommerciale[]
  conditionPaiment : conditionPaiment[],
  eService : Eservice[]
}