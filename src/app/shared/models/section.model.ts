export interface Section {
    id: string;
    titreSection: string;
    soustitreSection: string | null;
    contenuSection: string;
    postArticleId: string;
    typeContenue: string
    sectionPrincipale:string
    sectionChildren: Section[]
    // sectionId: string // Add property to link to the PostArticle
  }
  