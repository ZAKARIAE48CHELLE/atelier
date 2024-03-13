import { PostArticle } from "./PostArticle.model"

export interface rubrique {

    taxoCategorie : string,
    titreRubrique : string,
    descriptionRubrique: string,
    iconRubrique : string | null
    imageRubrique : string | null 
    postArticle : PostArticle[]
    

}