import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActionCitoyenne } from '../models/ActionCitoyenne.model';
@Injectable({
  providedIn: 'root',
})
export class ActionCitoyenneService {
  getAction(): ActionCitoyenne[] {
    return [
      {
        _id: '1',
        etatobjet: 'En cours',
        reference: 'AC-001',
        modeCreation: 'Individuel',
        classeActionCitoyenne: 'code_283',
        categorieAction: 'Environnement',
        typePorteur: 'Citoyen',
        typeObject: 'Petition',
        thematiqueObject: "Protection de l'environnement",
        translations: {
          titre: 'Stop ! Tout Augmente !',
          language: 'fr',
          description:"<h3><span style='color: rgb(230, 0, 0);'>Plateformes et étanchéité de toitures plates</span></h3><p>Asphaltage et Etanchéité à Binche réalise tout vos travaux de toiture plate et d'étanchéité de plateforme, terrasse et balcon en Wallonie et Bruxelles.</p><p><br></p><p>Selon vos besoin et le type de&nbsp;<strong>bâtiment, nous vous conseillerons la meilleure </strong><strong style='color: rgb(0, 102, 204);'>technique parmi les membranes bitumineuses, EPDM, PVC, Rhepanol, Resitrix, ...</strong></p><p><br></p><p>Nous aménageons également vos chemin d'accès et parking en asphalte.</p><p>Nous posons du bardage ou des coupoles de toit.</p><p>Faites appel à notre expérience de plus de 40 ans pour vos travaux de plateforme et d'étanchéité.</p><p>Demandez votre devis.</p>",
          sousTitre: 'Agissons ensemble',
          descriptionObjet: "Description détaillée de l'objet de la pétition.",
        },
        objectifEnRechercheEnSignature: 10000,
        image: '../../../assets/images/tomac.jpg',
        messageAssocie:'code_241',
        nombreContributions: 7700,
        dateProposition: new Date('2023-12-01T09:00:00'),
        dateDebutDePublication: new Date('2023-12-05T10:00:00'),
        dateFinPublication: new Date('2024-01-05T18:00:00'),
        etatContribution: 'En attente',
        refMembre: [
          {
            id: '2',
            translations: {
              nom: 'LES',
              prenom: 'INSURGÉS',
              adresse: '123 Main Street',
              aPropos: 'Description about John Doe',
              language: 'en',
            },
            refActionCitoyenn: '1',
            reference: 'MEM-002',
            typeMembre: 'Type Example',
            salutation: 'Mr.',
            statut: 'Active',
            dateNaissanceOuCreation: new Date('1990-01-01'),
            fonctionOuSecteurActivite: 'Engineer',
            photo0uLogo: '../../../assets/images/team_01.jpg',
            pays: 'Country Example',
            region: 'Region Example',
            prouvince: 'Province Example',
            ville: 'City Example',
            codePostal: '12345',
            email: 'john.doe@example.com',
            note: 4.5,
            active: true,
            commentaire: 'A comment about John Doe',
            memberParent: 'null',
            sousMembres: {
              relationType: 'Example Relation',
              membres: [],
            },
            objetAssoccie: ['Object1', 'Object2'],
            compteUser: ['john_doe_username'],
            etatDePublication: 'Published',
          },
          {
            id: '3',
            translations: {
              nom: 'Olivier',
              prenom: 'VIVEN',
              adresse: '123 Main Street',
              aPropos: 'Description about hmed mido',
              language: 'en',
            },
            refActionCitoyenn: '1',
            reference: 'MEM-0021',
            typeMembre: 'Type Example',
            salutation: 'Mr.',
            statut: 'Active',
            dateNaissanceOuCreation: new Date('1990-01-01'),
            fonctionOuSecteurActivite: 'IT',
            photo0uLogo: '../../../assets/images/team_02.jpg',
            pays: 'Country Example',
            region: 'Region Example',
            prouvince: 'Province Example',
            ville: 'City Example',
            codePostal: '12345',
            email: 'john.doe@example.com',
            note: 4.5,
            active: true,
            commentaire: 'A comment about John Doe',
            memberParent: 'null',
            sousMembres: {
              relationType: 'Example Relation',
              membres: [],
            },
            objetAssoccie: ['Object1', 'Object2'],
            compteUser: ['john_doe_username'],
            etatDePublication: 'Published',
          },
        ],
        Contribution: [
          {
            _id: 'contrib-1',
            reference: 'CONTRIB-001',
            typeContribution: ['Type1', 'Type2'],
            DateHeur: new Date('2023-12-15T14:30:00'),
            AffichageInformation: ['Info1', 'Info2'],
            MediaIntervention: ['Media1', 'Media2'],
            CanalIntervention: ['Canal1', 'Canal2'],
            Pays: 'Country Example',
            etatDeValidation: 'En attente',
            actioncetoiyen: '1',
            refMembre: [
              {
                id: '3',
                translations: {
                  nom: 'Alice',
                  prenom: 'Johnson',
                  adresse: '456 Park Avenue',
                  aPropos: 'Description about Alice Johnson',
                  language: 'en',
                },
                refActionCitoyenn: '1',
                reference: 'MEM-003',
                typeMembre: 'Type Example',
                salutation: 'Ms.',
                statut: 'Active',
                dateNaissanceOuCreation: new Date('1992-03-15'),
                fonctionOuSecteurActivite: 'Example Occupation',
                photo0uLogo: '../../../assets/images/team_02.jpg',
                pays: 'USA',
                region: 'Region Example',
                prouvince: 'Province Example',
                ville: 'City Example',
                codePostal: '54321',
                email: 'alice.johnson@example.com',
                note: 4.2,
                active: true,
                commentaire: 'A comment about Alice Johnson',
                memberParent: '2',
                sousMembres: {
                  relationType: 'Example Relation',
                  membres: [],
                },
                objetAssoccie: ['Object3', 'Object4'],
                compteUser: ['alice_johnson_username'],
                etatDePublication: 'Published',
              },
              {
                id: '4',
                translations: {
                  nom: 'omar',
                  prenom: 'Johnson',
                  adresse: '456 Park Avenue',
                  aPropos: 'Description about Alice Johnson',
                  language: 'en',
                },
                refActionCitoyenn: '1',
                reference: 'MEM-003',
                typeMembre: 'Type Example',
                salutation: 'Ms.',
                statut: 'Active',
                dateNaissanceOuCreation: new Date('1992-03-15'),
                fonctionOuSecteurActivite: 'Example Occupation',
                photo0uLogo: '../../../assets/images/team_02.jpg',
                pays: 'Morocco',
                region: 'Region Example',
                prouvince: 'Province Example',
                ville: 'City Example',
                codePostal: '54321',
                email: 'alice.johnson@example.com',
                note: 4.2,
                active: true,
                commentaire: 'A comment about Alice Johnson',
                memberParent: '2',
                sousMembres: {
                  relationType: 'Example Relation',
                  membres: [],
                },
                objetAssoccie: ['Object3', 'Object4'],
                compteUser: ['alice_johnson_username'],
                etatDePublication: 'Published',
              },
              {
                id: '5',
                translations: {
                  nom: 'hmed',
                  prenom: 'Johnson',
                  adresse: '456 Park Avenue',
                  aPropos: 'Description about Alice Johnson',
                  language: 'en',
                },
                refActionCitoyenn: '1',
                reference: 'MEM-003',
                typeMembre: 'Type Example',
                salutation: 'Ms.',
                statut: 'Active',
                dateNaissanceOuCreation: new Date('1992-03-15'),
                fonctionOuSecteurActivite: 'Example Occupation',
                photo0uLogo: '../../../assets/images/team_02.jpg',
                pays: 'france',
                region: 'Region Example',
                prouvince: 'Province Example',
                ville: 'City Example',
                codePostal: '54321',
                email: 'alice.johnson@example.com',
                note: 4.2,
                active: true,
                commentaire: 'A comment about Alice Johnson',
                memberParent: '2',
                sousMembres: {
                  relationType: 'Example Relation',
                  membres: [],
                },
                objetAssoccie: ['Object3', 'Object4'],
                compteUser: ['alice_johnson_username'],
                etatDePublication: 'Published',
              },
            ],
          },
        ],
        message :[
          {
            _id: "msg12345",
            typeMessage: "code_241",
            translations: {
                language: "fr",
                message: "<p><strong>Depuis l\'été 2021</strong>, la France est confrontée à une <strong>inflation croissante</strong>, culminant à <strong>7.2% début 2023</strong>. Les augmentations notables concernent <strong>l\'essence</strong>, <strong>l\'électricité</strong>, et les <strong>produits de supermarché</strong>, impactant sévèrement le <strong>coût de la vie</strong>, en particulier pour les <strong>étudiants</strong>.</p><p>Le nombre de <strong>personnes sans domicile</strong> et vivant sous le <strong>seuil de pauvreté</strong> a augmenté. Des <strong>critiques</strong> s\'élèvent contre les <strong>politiques gouvernementales</strong>, la <strong>gestion des services publics</strong>, l\'<strong>évasion fiscale des grandes entreprises</strong>, et la <strong>pollution des milliardaires</strong>.</p><p>Face à cette situation, un <strong>appel</strong> est lancé pour des <strong>actions concrètes du gouvernement</strong>. Sans changement, un <strong>mouvement de protestation</strong> est envisagé pour <strong>bloquer l\'économie du pays</strong> et provoquer un <strong>changement</strong>.</p></p>",
                sujet: "Annonce importante"
            },
            actionCitoyenne: '1',
            contribution: [''],
            protagoniste: [
              {
                id: '2',
                translations: {
                  nom: 'Macron',
                  prenom: 'emanuel',
                  adresse: '123 Main Street',
                  aPropos: 'Description about John Doe',
                  language: 'en',
                },
                refActionCitoyenn: '1',
                reference: 'MEM-002',
                typeMembre: 'Type Example',
                salutation: 'Mr.',
                statut: 'Active',
                dateNaissanceOuCreation: new Date('1990-01-01'),
                fonctionOuSecteurActivite: 'Président de la République française',
                photo0uLogo: '../../../assets/images/macron.jpeg',
                pays: 'Country Example',
                region: 'Region Example',
                prouvince: 'Province Example',
                ville: 'City Example',
                codePostal: '12345',
                email: 'john.doe@example.com',
                note: 4.5,
                active: true,
                commentaire: 'A comment about John Doe',
                memberParent: 'null',
                sousMembres: {
                  relationType: 'Example Relation',
                  membres: [],
                },
                objetAssoccie: ['Object1', 'Object2'],
                compteUser: ['john_doe_username'],
                etatDePublication: 'Published',
              },
              {
                id: '3',
                translations: {
                  nom: 'Le Maire',
                  prenom: 'Bruno',
                  adresse: '123 Main Street',
                  aPropos: 'Description about John Doe',
                  language: 'en',
                },
                refActionCitoyenn: '1',
                reference: 'MEM-002',
                typeMembre: 'Type Example',
                salutation: 'Mr.',
                statut: 'Active',
                dateNaissanceOuCreation: new Date('1990-01-01'),
                fonctionOuSecteurActivite: 'Ministre de l’Économie, des Finances et de la Relance',
                photo0uLogo: '../../../assets/images/bruno.jpeg',
                pays: 'Country Example',
                region: 'Region Example',
                prouvince: 'Province Example',
                ville: 'City Example',
                codePostal: '12345',
                email: 'john.doe@example.com',
                note: 4.5,
                active: true,
                commentaire: 'A comment about John Doe',
                memberParent: 'null',
                sousMembres: {
                  relationType: 'Example Relation',
                  membres: [],
                },
                objetAssoccie: ['Object1', 'Object2'],
                compteUser: ['john_doe_username'],
                etatDePublication: 'Published',
              },
            ],
            referenceEtDocumentDappuisEtPreuve: [],
            createdAt: "2023-12-29T12:00:00Z",
            updatedAt: "2023-12-29T15:00:00Z"
        }
        

        ],
        refreference :[
          {
            id: "123456",
            etatDePublication: "Published",
            etatobjet: "Active",
            categorie: "Source d'Inspiration",
            classe: "reference",
            type: "Article Scientifique",
            format: "PDF",
            provenance: "Internal",
            phaseConcerne: "Implementation",
            translations:{ 
                language: "English",
                sousTitre: "Subtitle",
                titre: "Title de reference",
                descriptif: "Description de reference Description de reference Description de reference Description de reference Description de reference Description de reference Description de reference Description de reference Description de reference Description de reference",
                auteur: "Author",
            },
            fichier: "assets/data/bootstrap-support.pdf",
            lienAccess: "https://chat.openai.com/c/af78c217-c8e1-471b-9791-9814e183f0af",
            taille: 1024, // in kilobytes
            unite: "KB",
            nbrPage: 20,
            dureeLectureEnMin: 30,
            imageAssociee: "../../../assets/images/wikipedia.png",
            dateEnregistrement: new Date("2024-01-17T12:00:00Z"),
            dateEdition: new Date("2024-01-18T08:30:00Z"),
            avecValidite: true,
            validite: {
                debutValidite: new Date("2024-01-18T00:00:00Z"),
                finValidite: new Date("2024-02-18T23:59:59Z"),
                etatValidite: "Active",
            },
            etatValidation: "Approved",
            dateValidation: new Date("2024-01-19T09:45:00Z"),
            statistiquesDirectes: ["viewed", "downloaded"],
            etats: ["Draft", "Reviewed"],
            createdAt: new Date("2024-01-17T10:30:00Z"),
            updatedAt: new Date("2024-01-19T10:15:00Z"),
            datePublication: new Date("2024-01-19T10:00:00Z"),
            contenuMMedia: ["image.jpg", "video.mp4"],
            objetsConcernes: ["Object A", "Object B"],
            objetsAssocies: ["Associated Object 1", "Associated Object 2"],
            moments: ["Moment A", "Moment B"],
            actionCitoyenne : '1'
        },
        {
          id: "123456",
          etatDePublication: "Published",
          etatobjet: "Active",
          categorie: "Source d'Inspiration",
          classe: "reference",
          type: "Article Scientifique",
          format: "PDF",
          provenance: "Internal",
          phaseConcerne: "Implementation",
          translations:{
                  language: "English",
                  sousTitre: "Subtitle",
                  titre: "Title de reference",
                  descriptif: "Description de reference Description de referenceDescription de referenceDescription de reference Description de reference Description de reference Description de reference Description de reference Description de reference",
                  auteur: "Author",
             
          },
          fichier: "document.pdf",
          lienAccess: "https://www.reddit.com/r/Asustuf/comments/175jyax/asus_tuf_gaming_a15_bios_password/",
          taille: 1024, // in kilobytes
          unite: "KB",
          nbrPage: 20,
          dureeLectureEnMin: 30,
          imageAssociee: "../../../assets/images/reddit.png",
          dateEnregistrement: new Date("2024-01-17T12:00:00Z"),
          dateEdition: new Date("2024-01-18T08:30:00Z"),
          avecValidite: true,
          validite: {
              debutValidite: new Date("2024-01-18T00:00:00Z"),
              finValidite: new Date("2024-02-18T23:59:59Z"),
              etatValidite: "Active",
          },
          etatValidation: "Approved",
          dateValidation: new Date("2024-01-19T09:45:00Z"),
          statistiquesDirectes: ["viewed", "downloaded"],
          etats: ["Draft", "Reviewed"],
          createdAt: new Date("2024-01-17T10:30:00Z"),
          updatedAt: new Date("2024-01-19T10:15:00Z"),
          datePublication: new Date("2024-01-19T10:00:00Z"),
          contenuMMedia: ["image.jpg", "video.mp4"],
          objetsConcernes: ["Object A", "Object B"],
          objetsAssocies: ["Associated Object 1", "Associated Object 2"],
          moments: ["Moment A", "Moment B"],
          actionCitoyenne : '1'
      }

        ],
        contenu : [
          {
            id: "123456",
            etatDePublication: "Published",
            etatobjet: "Active",
            categorie: "Source d'Inspiration",
            classe: "reference",
            type: "Article Scientifique",
            format: "PDF",
            provenance: "Internal",
            phaseConcerne: "Implementation",
            translations:{
                    language: "English",
                    sousTitre: "Subtitle",
                    titre: "Asus Tuf Gaming A15 bios password",
                    descriptif: "Description de reference Description de referenceDescription de referenceDescription de reference Description de reference Description de reference Description de reference Description de reference Description de reference",
                    auteur: "Author",
               
            },
            fichier: "document.pdf",
            lienAccess: "https://www.reddit.com/r/Asustuf/comments/175jyax/asus_tuf_gaming_a15_bios_password/",
            taille: 1024, // in kilobytes
            unite: "KB",
            nbrPage: 20,
            dureeLectureEnMin: 30,
            imageAssociee: "../../../assets/images/reddit.png",
            dateEnregistrement: new Date("2024-01-17T12:00:00Z"),
            dateEdition: new Date("2024-01-18T08:30:00Z"),
            avecValidite: true,
            validite: {
                debutValidite: new Date("2024-01-18T00:00:00Z"),
                finValidite: new Date("2024-02-18T23:59:59Z"),
                etatValidite: "Active",
            },
            etatValidation: "Approved",
            dateValidation: new Date("2024-01-19T09:45:00Z"),
            statistiquesDirectes: ["viewed", "downloaded"],
            etats: ["Draft", "Reviewed"],
            createdAt: new Date("2024-01-17T10:30:00Z"),
            updatedAt: new Date("2024-01-19T10:15:00Z"),
            datePublication: new Date("2024-01-19T10:00:00Z"),
            contenuMMedia: ["image.jpg", "video.mp4"],
            objetsConcernes: ["Object A", "Object B"],
            objetsAssocies: ["Associated Object 1", "Associated Object 2"],
            moments: ["Moment A", "Moment B"],
            actionCitoyenne : '1'
        }
        ],
        instruction : [
          {
            id : '1',
          classInstructionAssoscie: "Class A",
          phaseConcernee: "Implementation",
          translations: {
              language: "fr",
              designation: "Instruction Designation",
              description:"<h3><span style='color: rgb(230, 0, 0);'>Plateformes et étanchéité de toitures plates</span></h3><p>Asphaltage et Etanchéité à Binche réalise tout vos travaux de toiture plate et d'étanchéité de plateforme, terrasse et balcon en Wallonie et Bruxelles.</p><p><br></p><p>Selon vos besoin et le type de&nbsp;<strong>bâtiment, nous vous conseillerons la meilleure </strong><strong style='color: rgb(0, 102, 204);'>technique parmi les membranes bitumineuses, EPDM, PVC, Rhepanol, Resitrix, ...</strong></p><p><br></p><p>Nous aménageons également vos chemin d'accès et parking en asphalte.</p><p>Nous posons du bardage ou des coupoles de toit.</p><p>Faites appel à notre expérience de plus de 40 ans pour vos travaux de plateforme et d'étanchéité.</p><p>Demandez votre devis.</p>",
            },
          EtatInstruction: "Active",
          CommentaireInterne: "Internal comment on the instruction",
          ActionCitoyenne: "1",
      },
      {
        id : '1',
      classInstructionAssoscie: "Class A",
      phaseConcernee: "Implementation",
      translations: {
          language: "fr",
          designation: "Instruction Designation",
          description:"<h3><span style='color: rgb(230, 0, 0);'>Plateformes et étanchéité de toitures plates</span></h3><p>Asphaltage et Etanchéité à Binche réalise tout vos travaux de toiture plate et d'étanchéité de plateforme, terrasse et balcon en Wallonie et Bruxelles.</p><p><br></p><p>Selon vos besoin et le type de&nbsp;<strong>bâtiment, nous vous conseillerons la meilleure </strong><strong style='color: rgb(0, 102, 204);'>technique parmi les membranes bitumineuses, EPDM, PVC, Rhepanol, Resitrix, ...</strong></p><p><br></p><p>Nous aménageons également vos chemin d'accès et parking en asphalte.</p><p>Nous posons du bardage ou des coupoles de toit.</p><p>Faites appel à notre expérience de plus de 40 ans pour vos travaux de plateforme et d'étanchéité.</p><p>Demandez votre devis.</p>",
        },
      EtatInstruction: "Active",
      CommentaireInterne: "Internal comment on the instruction",
      ActionCitoyenne: "1",
  }
    ],
    Donnee :[
      {
        CategorieDesDonnees: "Demographic Data",
        translations: {
            titre: "Population Statistics",
            description: "Statistics about the population demographics "
        },
        instanceCaracteristique: [
          {
            familleCaracteristique: 'familleCaracteristique',
            labelCaracteristique: "Age Range",
            Operateur: ">=",
            valeurs: "18",
            uniteDeValeur: "Years",
            Donnee: "Demographic Data"
        },
        {
          familleCaracteristique: 'familleCaracteristique',
          labelCaracteristique: "Age Range",
          Operateur: ">=",
          valeurs: "18",
          uniteDeValeur: "Years",
          Donnee: "Demographic Data"
      }
        ],
        sourceInformation: [
          {
            typeSourceInformation: "Government Data",
            translations: {
                designation: "National Census",
                description: "Official government data from the national census"
            },
            degreDeCredibilite: 50,
            etatExistanceSource: "Available",
            Donnee: "Demographic Data"
        },
        {
          typeSourceInformation: "Government Data",
          translations: {
              designation: "National Census",
              description: "Official government data from the national census"
          },
          degreDeCredibilite: 50,
          etatExistanceSource: "Available",
          Donnee: "Demographic Data"
      },    {
        typeSourceInformation: "Government Data",
        translations: {
            designation: "National Census",
            description: "Official government data from the national census"
        },
        degreDeCredibilite: 50,
        etatExistanceSource: "Available",
        Donnee: "Demographic Data"
    }
        ],
        referenceDocument: [
          {
            id: "123456",
            etatDePublication: "Published",
            etatobjet: "Active",
            categorie: "Source d'Inspiration",
            classe: "reference",
            type: "Article Scientifique",
            format: "PDF",
            provenance: "Internal",
            phaseConcerne: "Implementation",
            translations:{ 
               
                    language: "English",
                    sousTitre: "Subtitle",
                    titre: "Title de reference",
                    descriptif: "Description de reference Description de reference Description de reference Description de reference Description de reference Description de reference Description de reference Description de reference Description de reference Description de reference",
                    auteur: "Author",
               
            },
            fichier: "assets/data/bootstrap-support.pdf",
            lienAccess: "https://chat.openai.com/c/af78c217-c8e1-471b-9791-9814e183f0af",
            taille: 1024, // in kilobytes
            unite: "KB",
            nbrPage: 20,
            dureeLectureEnMin: 30,
            imageAssociee: "../../../assets/images/wikipedia.png",
            dateEnregistrement: new Date("2024-01-17T12:00:00Z"),
            dateEdition: new Date("2024-01-18T08:30:00Z"),
            avecValidite: true,
            validite: {
                debutValidite: new Date("2024-01-18T00:00:00Z"),
                finValidite: new Date("2024-02-18T23:59:59Z"),
                etatValidite: "Active",
            },
            etatValidation: "Approved",
            dateValidation: new Date("2024-01-19T09:45:00Z"),
            statistiquesDirectes: ["viewed", "downloaded"],
            etats: ["Draft", "Reviewed"],
            createdAt: new Date("2024-01-17T10:30:00Z"),
            updatedAt: new Date("2024-01-19T10:15:00Z"),
            datePublication: new Date("2024-01-19T10:00:00Z"),
            contenuMMedia: ["image.jpg", "video.mp4"],
            objetsConcernes: ["Object A", "Object B"],
            objetsAssocies: ["Associated Object 1", "Associated Object 2"],
            moments: ["Moment A", "Moment B"],
            actionCitoyenne : '1'
        },
        ]
    },
    ]
      },
    ];
  }

  getActeurById(id: string): Observable<ActionCitoyenne | undefined> {
    console.log('Fetching petiteAnnonce by ID:', id);
    const selectedacteur = this.getAction().find((action) => action._id === id);
    console.log('Selected petiteAnnonce:', selectedacteur);
    return of(selectedacteur);
  }


}
