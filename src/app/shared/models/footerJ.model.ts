export interface FooterJ{
  _id:string;
  translations: {
    language:string;
    title:string;
  };
  planPrincipale:boolean;
  megaMenu:boolean;
  icon:string;
  path:string;
  ordre:number;
  priorite:number;
  typeAffichage?:string;
  parent:FooterJ |string;
  children:FooterJ[];
  etatObjet?:"code-1" | "code-2";
  etatCreation?:string;
  taxonomie?:string;
}
