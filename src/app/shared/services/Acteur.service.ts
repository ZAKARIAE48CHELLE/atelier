import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { footerItems, media } from '../models/footer.model';
import { acteurSocioEcanomique } from '../models/acteurSocioRcanomique.model';

@Injectable({
  providedIn: 'root',
})
export class ActeurService {
  getActeur(): acteurSocioEcanomique[] {
    return [
      {
        _id: '1',
        RefSocioEco: 'IT Company',
        TypeStructure: 'Company',
        StatutStructure: 'Active',
        SecteurActivitePrincipal: 'restaurant',
        ActivitePrincipale: 'Software Development',
        translations: {
          nomStructure: 'The Procter & Gamble Company',
          Descriptif:
            "<h3>Plateformes et étanchéité de toitures plates</h3><p>Asphaltage et Etanchéité à Binche réalise tout vos travaux de toiture plate et d'étanchéité de plateforme, terrasse et balcon en Wallonie et Bruxelles.</p><p></p><p>Selon vos besoin et le type de&nbsp;<strong>bâtiment, nous vous conseillerons la meilleure technique parmi les membranes bitumineuses, EPDM, PVC, Rhepanol, Resitrix, ...</strong></p><p></p><p></p><p>Nous aménageons également vos chemin d'accès et parking en asphalte.</p><p>Nous posons du bardage ou des coupoles de toit.</p><p>Faites appel à notre expérience de plus de 40 ans pour vos travaux de plateforme et d'étanchéité.</p><p>Demandez votre devis.</p>",
          Slogan: 'Eat well to be happy Ranked 106th in America’s Most JUST Companies Personal Products company based in Cincinnati, Ohio',
          CommeentaireInterne: 'Internal comments about the structure',
        },
        Logo: '../../../assets/images/bigrestologo.png',
        Pays_Origine: 'Marroc',
        AnneeCreation: new Date('2000-01-01'),
        Notation: 5,
        Effectif_global: '500',
        telephone: ['0984736487', '4569875465'],
        fax: '03947639309',
        email: 'zakariaechelle2001@gmail.com',
        SiteWeb: 'https://github.com/dashboard',
        CordonneeGeographique: [
          {
            _id: "60a8b9c4f5e4d32f8c9f4d67",
            refCordonne: "C001",
            pays: "Morocco",
            region: "Tanger-Tetouan-Al Hoceima",
            ZoneUrbaineRurale: "Urbaine",
            villePrincipale: "Tangier",
            commune: "Tanger-Assilah",
            quartier: "Boukhalef",
            cp: "90000",
            adress: "Avenue Mohamed VI ",
            longitude: -5.8129,
            latitude: 35.7595,
            translations: {
              description: "This is the coordinate of the Tangier Ibn Battouta Airport"
            },
            planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
            tel: "+212 5393-93940",
            Mobile: "+212 661-223344",
            fax: "+212 5393-93941",
            email: "contact@tangierairport.ma",
            web: "https://www.tangierairport.ma/",
            EtatCoord: 1
          }
        ],
        Horaire: [
          {
            _id: '3',
            CordonneeGeographique: '2',
            DayDebut: 'Lundi',
            Dayfin: 'Jeudi',
            heurDebut: '9 AM',
            heurFin: '5 PM',
            DateDebut: new Date('2023-01-01T09:00:00'),
            DateFin: new Date('2023-01-01T17:00:00'),
          },
          {
            _id: '5',
            CordonneeGeographique: '4',
            DayDebut: 'Vendredi',
            Dayfin: 'Vendredi',
            heurDebut: '6 AM',
            heurFin: '5 PM',
            DateDebut: new Date('2023-02-01T09:00:00'),
            DateFin: new Date('2023-02-01T18:00:00'),
          },
          // Add more Horaire objects as needed
        ],
        distinction: [
          {
            typeDistinction: 'Award',
            dateDistinction: '2-2-2001',
            translations: {
              language: 'en',
              designation: 'Best in Category Innovation Excellence ',
              description: 'In 2001, [Your Company Name] earned the prestigious "Best in Category Innovation Excellence Award" for its outstanding contributions to the field of innovation. Presented by Microsoft, this accolade recognizes [Your Company Name]\'s commitment to pushing technological boundaries. The award comes with a captivating description in English and a symbolic image '
            },
            image: 'assets/images/innovation.jpg',
            institutionResponsable: 'Microsoft',
            logoInstitution: 'assets/images/micro.jpeg',
            acteur: '1'
          },
          {
            typeDistinction: 'Award',
            dateDistinction: '2-2-2001',
            translations: {
              language: 'en',
              designation: 'Best in Category Innovation Excellence ',
              description: 'In 2001, [Your Company Name] earned the prestigious "Best in Category Innovation Excellence Award" for its outstanding contributions to the field of innovation. Presented by Microsoft, this accolade recognizes [Your Company Name]\'s commitment to pushing technological boundaries. The award comes with a captivating description in English and a symbolic image '
            },
            image: 'assets/images/innovation.jpg',
            institutionResponsable: 'Microsoft',
            logoInstitution: 'assets/images/micro.jpeg',
            acteur: '1'
          },
          // {
          //   typeDistinction: 'Award',
          //   dateDistinction: '2-2-2001',
          //   translations: {
          //     language: 'en',
          //     designation: 'Best in Category Innovation Excellence ',
          //     description: 'In 2001, [Your Company Name] earned the prestigious "Best in Category Innovation Excellence Award" for its outstanding contributions to the field of innovation. Presented by Microsoft, this accolade recognizes [Your Company Name]\'s commitment to pushing technological boundaries. The award comes with a captivating description in English and a symbolic image '
          //   },
          //   image: 'assets/images/innovation.jpg',
          //   institutionResponsable: 'Microsoft',
          //   logoInstitution: 'assets/images/micro.jpeg',
          //   acteur : '1'
          // },
          // {
          //   typeDistinction: 'Award',
          //   dateDistinction: '2-2-2001',
          //   translations: {
          //     language: 'en',
          //     designation: 'Best in Category Innovation Excellence ',
          //     description: 'In 2001, [Your Company Name] earned the prestigious "Best in Category Innovation Excellence Award" for its outstanding contributions to the field of innovation. Presented by Microsoft, this accolade recognizes [Your Company Name]\'s commitment to pushing technological boundaries. The award comes with a captivating description in English and a symbolic image '
          //   },
          //   image: 'assets/images/innovation.jpg',
          //   institutionResponsable: 'Microsoft',
          //   logoInstitution: 'assets/images/micro.jpeg',
          //   acteur : '1'
          // },
          // {
          //   typeDistinction: 'Award',
          //   dateDistinction: '2-2-2001',
          //   translations: {
          //     language: 'en',
          //     designation: 'Best in Category Innovation Excellence ',
          //     description: 'In 2001, [Your Company Name] earned the prestigious "Best in Category Innovation Excellence Award" for its outstanding contributions to the field of innovation. Presented by Microsoft, this accolade recognizes [Your Company Name]\'s commitment to pushing technological boundaries. The award comes with a captivating description in English and a symbolic image '
          //   },
          //   image: 'assets/images/innovation.jpg',
          //   institutionResponsable: 'Microsoft',
          //   logoInstitution: 'assets/images/micro.jpeg',
          //   acteur : '1'
          // },
          // {
          //   typeDistinction: 'Award',
          //   dateDistinction: '2-2-2001',
          //   translations: {
          //     language: 'en',
          //     designation: 'Best in Category Innovation Excellence ',
          //     description: 'In 2001, [Your Company Name] earned the prestigious "Best in Category Innovation Excellence Award" for its outstanding contributions to the field of innovation. Presented by Microsoft, this accolade recognizes [Your Company Name]\'s commitment to pushing technological boundaries. The award comes with a captivating description in English and a symbolic image '
          //   },
          //   image: 'assets/images/innovation.jpg',
          //   institutionResponsable: 'Microsoft',
          //   logoInstitution: 'assets/images/micro.jpeg',
          //   acteur : '1'
          // }
        ],
        histoire: [
          {
            date: new Date(),
            translation: {
              language: 'en',
              titre: 'Title in English',
              commenteire: 'Le terme « ordinateur personnel » est utilisé pour la première fois dans un article du New York Times daté du 3 novembre 1962 rapportant la vision de John William Mauchly sur l\'avenir de l\'informatique comme présenté lors d\'une réunion de l\'Institute of Industrial Engineers (en). Mauchly a déclaré : « Il n\'y a aucune raison de supposer qu\'un garçon ou une fille ordinaire ne puisse être maître d\'un ordinateur personnel »1.'
            },
            image: 'path/to/image.jpg',
            acteur: '1',
            distinction: [
              {
                typeDistinction: 'Award',
                dateDistinction: new Date(),
                translations: {
                  language: 'en',
                  designation: 'Best in Category',
                  description: 'This is a description for the award in English'
                },
                image: 'path/to/distinction_image.jpg',
                institutionResponsable: 'XYZ Organization',
                logoInstitution: 'path/to/logo.jpg',
                acteur: '1'
              }
            ],
            instanceCaracteristique: [
              {
                _id: "unique_id_123",
                etatobjet: "active",
                groupe: "Size",
                caracteristique: "Length",
                translations: {
                  language: "en",
                  label: "Banana Length",
                  valeurChar: "7.5 inches",
                },
                valeurNotChar: null,
                unite: "inches",
                operateur: "=",
                imageAssocie: "banana_image.jpg",
              }
            ]

          },
          {
            date: new Date(),
            translation: {
              language: 'en',
              titre: 'Title in English',
              commenteire: 'Le terme « ordinateur personnel » est utilisé pour la première fois dans un article du New York Times daté du 3 novembre 1962 rapportant la vision de John William Mauchly sur l\'avenir de l\'informatique comme présenté lors d\'une réunion de l\'Institute of Industrial Engineers (en). Mauchly a déclaré : « Il n\'y a aucune raison de supposer qu\'un garçon ou une fille ordinaire ne puisse être maître d\'un ordinateur personnel »1.'
            },
            image: 'path/to/image.jpg',
            acteur: '1',
            distinction: [
              {
                typeDistinction: 'Award',
                dateDistinction: new Date(),
                translations: {
                  language: 'en',
                  designation: 'Best in Category',
                  description: 'This is a description for the award in English'
                },
                image: 'path/to/distinction_image.jpg',
                institutionResponsable: 'XYZ Organization',
                logoInstitution: 'path/to/logo.jpg',
                acteur: '1'
              }
            ],
            instanceCaracteristique: [
              {
                _id: "unique_id_123",
                etatobjet: "active",
                groupe: "Size",
                caracteristique: "Length",
                translations: {
                  language: "en",
                  label: "Banana Length",
                  valeurChar: "7.5 inches",
                },
                valeurNotChar: null,
                unite: "inches",
                operateur: "=",
                imageAssocie: "banana_image.jpg",
              }
            ]

          }
        ],
        instanceCaracteristique: [
          {
            _id: "unique_id_123",
            etatobjet: "active",
            groupe: "Size",
            caracteristique: "Length",
            translations: {
              language: "en",
              label: "Banana Length",
              valeurChar: "7.5 inches",
            },
            valeurNotChar: null,
            unite: "inches",
            operateur: "=",
            imageAssocie: "banana_image.jpg",
          },
          {
            _id: "unique_id_123",
            etatobjet: "active",
            groupe: "Size",
            caracteristique: "Length",
            translations: {
              language: "en",
              label: "Banana Length",
              valeurChar: "7.5 inches",
            },
            valeurNotChar: null,
            unite: "inches",
            operateur: "=",
            imageAssocie: "banana_image.jpg",
          },
          {
            _id: "unique_id_123",
            etatobjet: "active",
            groupe: "Size",
            caracteristique: "Length",
            translations: {
              language: "en",
              label: "Banana Length",
              valeurChar: "7.5 inches",
            },
            valeurNotChar: null,
            unite: "inches",
            operateur: "=",
            imageAssocie: "banana_image.jpg",
          },
          {
            _id: "unique_id_123",
            etatobjet: "active",
            groupe: "Size",
            caracteristique: "Length",
            translations: {
              language: "en",
              label: "Banana Length",
              valeurChar: "7.5 inches",
            },
            valeurNotChar: null,
            unite: "inches",
            operateur: "=",
            imageAssocie: "banana_image.jpg",
          },
          {
            _id: "unique_id_123",
            etatobjet: "active",
            groupe: "Size",
            caracteristique: "Length",
            translations: {
              language: "en",
              label: "Banana Length",
              valeurChar: "7.5 inches",
            },
            valeurNotChar: null,
            unite: "inches",
            operateur: "=",
            imageAssocie: "banana_image.jpg",
          }
        ],
        nationaliteEtLongue: [
          {
            nationalite: 'marocaine',
            imageDrapeaau: 'assets/flag/ma.svg',
            acteur: '1'
          },
          {
            nationalite: 'francaise',
            imageDrapeaau: 'assets/flag/fr.svg',
            acteur: '1'
          }
        ],
        relationInterActeur: [
          {
            typeRelation: 'Siege',
            acteurParent: '1',
            acteurAccocie: [
              {
                _id: '2',
                RefSocioEco: 'SE001',
                TypeStructure: 'Company',
                StatutStructure: 'Active',
                SecteurActivitePrincipal: 'Technology',
                ActivitePrincipale: 'Software Development',
                translations: {
                  nomStructure: 'Google',
                  Slogan: 'Innovate. Transform. Succeed.',
                  Descriptif: 'Leading technology company specializing in software development.',
                  CommeentaireInterne: 'Highly innovative and dynamic team.',
                },
                instanceCaracteristique: [],
                Logo: 'assets/images/google.png',
                Pays_Origine: 'United States',
                telephone: ['+1 123-456-7890'],
                fax: '+1 123-456-7891',
                email: 'info@techsolutions.com',
                SiteWeb: 'https://www.techsolutions.com',
                AnneeCreation: '1995-06-15',
                Notation: 4.5,
                Effectif_global: '5000+ employees',
                representaionDunMarque: [],
                faq: [],
                eService: [],
                socialMedia: [],
                contennuMMedia: [],
                produiteEtService: [],
                catalogue: [],
                enregistrementLegale: [],
                TransactionCommerciale: [],
                tags: [],
                conditionPaiment: [],
                agendaEvent: [],
                CordonneeGeographique: [
                  {
                    _id: "60a8b9c4f5e4d32f8c9f4d67",
                    refCordonne: "C001",
                    pays: "Morocco",
                    region: "Tanger-Tetouan-Al Hoceima",
                    ZoneUrbaineRurale: "Urbaine",
                    villePrincipale: "Tangier",
                    commune: "Tanger-Assilah",
                    quartier: "Boukhalef",
                    cp: "90000",
                    adress: "Avenue Mohamed VI, Tangier 90000, Morocco",
                    longitude: -5.8129,
                    latitude: 35.7595,
                    translations: {
                      description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                    },
                    planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                    tel: "+212 5393-93940",
                    Mobile: "+212 661-223344",
                    fax: "+212 5393-93941",
                    email: "contact@tangierairport.ma",
                    web: "https://www.tangierairport.ma/",
                    EtatCoord: 1
                  }
                ],
                Horaire: [
                  {
                    _id: '3',
                    CordonneeGeographique: '2',
                    DayDebut: 'Lundi',
                    Dayfin: 'Jeudi',
                    heurDebut: '9 AM',
                    heurFin: '5 PM',
                    DateDebut: new Date('2023-01-01T09:00:00'),
                    DateFin: new Date('2023-01-01T17:00:00'),
                  },
                  {
                    _id: '5',
                    CordonneeGeographique: '4',
                    DayDebut: 'Vendredi',
                    Dayfin: 'Vendredi',
                    heurDebut: '6 AM',
                    heurFin: '5 PM',
                    DateDebut: new Date('2023-02-01T09:00:00'),
                    DateFin: new Date('2023-02-01T18:00:00'),
                  },
                  // Add more Horaire objects as needed
                ],
                organigramePersonnel: [],
                actionSocialeetSOlidaire: [],
              }
            ]
          }
        ],
        organigramePersonnel: [
          {
            _id: '56',
            civilite: 'Mr',
            nom: 'Doe',
            prenom: 'John',
            fonction: 'CEO',
            Presentation: 'An experienced leader with a vision for growth.',
            mission: 'To steer the company towards success and innovation.',
            departement: 'Executive',
            service: 'Leadership',
            photo: 'assets/images/team_01.jpg',
            telFix: '123-456-7890',
            gsm: '987-654-3210',
            email: 'john.doe@example.com',
            enActive: 'Yes',
            organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
            organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
            organigramePersonnelAsso: [
              {
                _id: '134',
                civilite: 'Mr',
                nom: 'Doe',
                prenom: 'John',
                fonction: 'designer',
                Presentation: 'An experienced leader with a vision for growth.',
                mission: 'To steer the company towards success and innovation.',
                departement: 'Executive',
                service: 'Leadership',
                photo: 'assets/images/team_01.jpg',
                telFix: '123-456-7890',
                gsm: '987-654-3210',
                email: 'john.doe@example.com',
                enActive: 'Yes',
                organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                organigramePersonnelAsso: [
                  {
                    _id: '1123',
                    civilite: 'Mr',
                    nom: 'Doe',
                    prenom: 'John',
                    fonction: 'video editer',
                    Presentation: 'An experienced leader with a vision for growth.',
                    mission: 'To steer the company towards success and innovation.',
                    departement: 'Executive',
                    service: 'Leadership',
                    photo: 'assets/images/team_01.jpg',
                    telFix: '123-456-7890',
                    gsm: '987-654-3210',
                    email: 'john.doe@example.com',
                    enActive: 'Yes',
                    organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                    organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                    organigramePersonnelAsso: [],
                    acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
                  },
                  {
                    _id: '1123',
                    civilite: 'Mr',
                    nom: 'Doe',
                    prenom: 'John',
                    fonction: 'photo editer',
                    Presentation: 'An experienced leader with a vision for growth.',
                    mission: 'To steer the company towards success and innovation.',
                    departement: 'Executive',
                    service: 'Leadership',
                    photo: 'assets/images/team_01.jpg',
                    telFix: '123-456-7890',
                    gsm: '987-654-3210',
                    email: 'john.doe@example.com',
                    enActive: 'Yes',
                    organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                    organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                    organigramePersonnelAsso: [],
                    acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
                  }
                ],
                acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
              },
              {
                _id: '2234',
                civilite: 'Mr',
                nom: 'Doe',
                prenom: 'John',
                fonction: 'senior devloper',
                Presentation: 'An experienced leader with a vision for growth.',
                mission: 'To steer the company towards success and innovation.',
                departement: 'Executive',
                service: 'Leadership',
                photo: 'assets/images/team_01.jpg',
                telFix: '123-456-7890',
                gsm: '987-654-3210',
                email: 'john.doe@example.com',
                enActive: 'Yes',
                organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                organigramePersonnelAsso: [
                  {
                    _id: '12341',
                    civilite: 'Mr',
                    nom: 'Doe',
                    prenom: 'John',
                    fonction: 'beginner',
                    Presentation: 'An experienced leader with a vision for growth.',
                    mission: 'To steer the company towards success and innovation.',
                    departement: 'Executive',
                    service: 'Leadership',
                    photo: 'assets/images/team_01.jpg',
                    telFix: '123-456-7890',
                    gsm: '987-654-3210',
                    email: 'john.doe@example.com',
                    enActive: 'Yes',
                    organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                    organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                    organigramePersonnelAsso: [],
                    acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
                  },
                  {
                    _id: '1123',
                    civilite: 'Mr',
                    nom: 'Doe',
                    prenom: 'John',
                    fonction: 'advanced beginner',
                    Presentation: 'An experienced leader with a vision for growth.',
                    mission: 'To steer the company towards success and innovation.',
                    departement: 'Executive',
                    service: 'Leadership',
                    photo: 'assets/images/team_01.jpg',
                    telFix: '123-456-7890',
                    gsm: '987-654-3210',
                    email: 'john.doe@example.com',
                    enActive: 'Yes',
                    organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                    organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                    organigramePersonnelAsso: [],
                    acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
                  }
                ],
                acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
              },
              {
                _id: '2234',
                civilite: 'Mr',
                nom: 'Doe',
                prenom: 'John',
                fonction: 'senior devloper',
                Presentation: 'An experienced leader with a vision for growth.',
                mission: 'To steer the company towards success and innovation.',
                departement: 'Executive',
                service: 'Leadership',
                photo: 'assets/images/team_01.jpg',
                telFix: '123-456-7890',
                gsm: '987-654-3210',
                email: 'john.doe@example.com',
                enActive: 'Yes',
                organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                organigramePersonnelAsso: [
                  {
                    _id: '12341',
                    civilite: 'Mr',
                    nom: 'Doe',
                    prenom: 'John',
                    fonction: 'beginner',
                    Presentation: 'An experienced leader with a vision for growth.',
                    mission: 'To steer the company towards success and innovation.',
                    departement: 'Executive',
                    service: 'Leadership',
                    photo: 'assets/images/team_01.jpg',
                    telFix: '123-456-7890',
                    gsm: '987-654-3210',
                    email: 'john.doe@example.com',
                    enActive: 'Yes',
                    organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                    organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                    organigramePersonnelAsso: [],
                    acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
                  },
                  {
                    _id: '1123',
                    civilite: 'Mr',
                    nom: 'Doe',
                    prenom: 'John',
                    fonction: 'advanced beginner',
                    Presentation: 'An experienced leader with a vision for growth.',
                    mission: 'To steer the company towards success and innovation.',
                    departement: 'Executive',
                    service: 'Leadership',
                    photo: 'assets/images/team_01.jpg',
                    telFix: '123-456-7890',
                    gsm: '987-654-3210',
                    email: 'john.doe@example.com',
                    enActive: 'Yes',
                    organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                    organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                    organigramePersonnelAsso: [],
                    acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
                  }
                ],
                acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
              }
            ],
            acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
          },
          {
            _id: '42134',
            civilite: 'Mr',
            nom: 'Doe',
            prenom: 'John',
            fonction: 'CEO',
            Presentation: 'An experienced leader with a vision for growth.',
            mission: 'To steer the company towards success and innovation.',
            departement: 'Executive',
            service: 'Leadership',
            photo: 'assets/images/team_01.jpg',
            telFix: '123-456-7890',
            gsm: '987-654-3210',
            email: 'john.doe@example.com',
            enActive: 'Yes',
            organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
            organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
            organigramePersonnelAsso: [
              {
                _id: '1123',
                civilite: 'Mr',
                nom: 'Doe',
                prenom: 'John',
                fonction: 'photo editer',
                Presentation: 'An experienced leader with a vision for growth.',
                mission: 'To steer the company towards success and innovation.',
                departement: 'Executive',
                service: 'Leadership',
                photo: 'assets/images/team_01.jpg',
                telFix: '123-456-7890',
                gsm: '987-654-3210',
                email: 'john.doe@example.com',
                enActive: 'Yes',
                organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                organigramePersonnelAsso: [
                  {
                    _id: '1123',
                    civilite: 'Mr',
                    nom: 'Doe',
                    prenom: 'John',
                    fonction: 'it',
                    Presentation: 'An experienced leader with a vision for growth.',
                    mission: 'To steer the company towards success and innovation.',
                    departement: 'Executive',
                    service: 'Leadership',
                    photo: 'assets/images/team_01.jpg',
                    telFix: '123-456-7890',
                    gsm: '987-654-3210',
                    email: 'john.doe@example.com',
                    enActive: 'Yes',
                    organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                    organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                    organigramePersonnelAsso: [],
                    acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
                  }
                ],
                acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
              },
              {
                _id: '112sdf3',
                civilite: 'Mr',
                nom: 'Doe',
                prenom: 'John',
                fonction: 'Electronic',
                Presentation: 'An experienced leader with a vision for growth.',
                mission: 'To steer the company towards success and innovation.',
                departement: 'Executive',
                service: 'Leadership',
                photo: 'assets/images/team_01.jpg',
                telFix: '123-456-7890',
                gsm: '987-654-3210',
                email: 'john.doe@example.com',
                enActive: 'Yes',
                organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                organigramePersonnelAsso: [
                  {
                    _id: '11asfdasf23',
                    civilite: 'Mr',
                    nom: 'Doe',
                    prenom: 'John',
                    fonction: 'stagier',
                    Presentation: 'An experienced leader with a vision for growth.',
                    mission: 'To steer the company towards success and innovation.',
                    departement: 'Executive',
                    service: 'Leadership',
                    photo: 'assets/images/team_01.jpg',
                    telFix: '123-456-7890',
                    gsm: '987-654-3210',
                    email: 'john.doe@example.com',
                    enActive: 'Yes',
                    organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                    organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                    organigramePersonnelAsso: [

                    ],
                    acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
                  },
                  {
                    _id: '11sadfasf23',
                    civilite: 'Mr',
                    nom: 'Doe',
                    prenom: 'John',
                    fonction: 'stagier',
                    Presentation: 'An experienced leader with a vision for growth.',
                    mission: 'To steer the company towards success and innovation.',
                    departement: 'Executive',
                    service: 'Leadership',
                    photo: 'assets/images/team_01.jpg',
                    telFix: '123-456-7890',
                    gsm: '987-654-3210',
                    email: 'john.doe@example.com',
                    enActive: 'Yes',
                    organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                    organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                    organigramePersonnelAsso: [],
                    acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
                  }
                ],
                acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
              }
            ],
            acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
          }
        ],
        OrganigrameStructure: [
          {
            _id: "1",
            typeStructure: "Departement",
            nom: "Technologies de l'information",
            Effectif: 100,
            acteur: '1',
            OrganigrameStructurePricnipale: '1',
            organigramePersonnel: [
              {
                _id: '134',
                civilite: 'Mr',
                nom: 'Doe',
                prenom: 'John',
                fonction: 'designer',
                Presentation: 'An experienced leader with a vision for growth.',
                mission: 'To steer the company towards success and innovation.',
                departement: 'Executive',
                service: 'Leadership',
                photo: 'assets/images/team_01.jpg',
                telFix: '123-456-7890',
                gsm: '987-654-3210',
                email: 'john.doe@example.com',
                enActive: 'Yes',
                organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                organigramePersonnelAsso: [
                  {
                    _id: '1123',
                    civilite: 'Mr',
                    nom: 'Doe',
                    prenom: 'John',
                    fonction: 'photo editer',
                    Presentation: 'An experienced leader with a vision for growth.',
                    mission: 'To steer the company towards success and innovation.',
                    departement: 'Executive',
                    service: 'Leadership',
                    photo: 'assets/images/team_01.jpg',
                    telFix: '123-456-7890',
                    gsm: '987-654-3210',
                    email: 'john.doe@example.com',
                    enActive: 'Yes',
                    organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                    organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                    organigramePersonnelAsso: [],
                    acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
                  }
                ],
                acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
              },
            ],
            OrganigrameStructureAsso: [
              {
                _id: "1",
                typeStructure: "Departement",
                nom: "It",
                Effectif: 10,
                acteur: '1',
                OrganigrameStructurePricnipale: '1',
                organigramePersonnel: [
                  {
                    _id: '13454',
                    civilite: 'Mr',
                    nom: 'Doe',
                    prenom: 'John',
                    fonction: 'devlopeeeer',
                    Presentation: 'An experienced leader with a vision for growth.',
                    mission: 'To steer the company towards success and innovation.',
                    departement: 'Executive',
                    service: 'Leadership',
                    photo: 'assets/images/team_01.jpg',
                    telFix: '123-456-7890',
                    gsm: '987-654-3210',
                    email: 'john.doe@example.com',
                    enActive: 'Yes',
                    organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                    organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                    organigramePersonnelAsso: [],
                    acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
                  },
                ],
                OrganigrameStructureAsso: [
                  {
                    _id: "1",
                    typeStructure: "Departement",
                    nom: "It",
                    Effectif: 1700,
                    acteur: '1',
                    OrganigrameStructurePricnipale: '1',
                    organigramePersonnel: [
                      {
                        _id: '1343563464',
                        civilite: 'Mr',
                        nom: 'Doe',
                        prenom: 'John',
                        fonction: 'designer',
                        Presentation: 'An experienced leader with a vision for growth.',
                        mission: 'To steer the company towards success and innovation.',
                        departement: 'Executive',
                        service: 'Leadership',
                        photo: 'assets/images/team_01.jpg',
                        telFix: '123-456-7890',
                        gsm: '987-654-3210',
                        email: 'john.doe@example.com',
                        enActive: 'Yes',
                        organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                        organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                        organigramePersonnelAsso: [
                          {
                            _id: '1123',
                            civilite: 'Mr',
                            nom: 'Doe',
                            prenom: 'John',
                            fonction: 'photo editer',
                            Presentation: 'An experienced leader with a vision for growth.',
                            mission: 'To steer the company towards success and innovation.',
                            departement: 'Executive',
                            service: 'Leadership',
                            photo: 'assets/images/team_01.jpg',
                            telFix: '123-456-7890',
                            gsm: '987-654-3210',
                            email: 'john.doe@example.com',
                            enActive: 'Yes',
                            organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                            organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                            organigramePersonnelAsso: [],
                            acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
                          }
                        ],
                        acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
                      },
                    ],
                    OrganigrameStructureAsso: []
                  },
                  {
                    _id: "1",
                    typeStructure: "conseil administration",
                    nom: "It",
                    Effectif: 10870,
                    acteur: '1',
                    OrganigrameStructurePricnipale: '1',
                    organigramePersonnel: [
                      {
                        _id: '134',
                        civilite: 'Mr',
                        nom: 'redouan',
                        prenom: 'John',
                        fonction: 'designer',
                        Presentation: 'An experienced leader with a vision for growth.',
                        mission: 'To steer the company towards success and innovation.',
                        departement: 'Executive',
                        service: 'Leadership',
                        photo: 'assets/images/team_01.jpg',
                        telFix: '123-456-7890',
                        gsm: '987-654-3210',
                        email: 'john.doe@example.com',
                        enActive: 'Yes',
                        organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                        organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                        organigramePersonnelAsso: [
                          {
                            _id: '1123',
                            civilite: 'Mr',
                            nom: 'hetler',
                            prenom: 'John',
                            fonction: 'photo editer',
                            Presentation: 'An experienced leader with a vision for growth.',
                            mission: 'To steer the company towards success and innovation.',
                            departement: 'Executive',
                            service: 'Leadership',
                            photo: 'assets/images/team_01.jpg',
                            telFix: '123-456-7890',
                            gsm: '987-654-3210',
                            email: 'john.doe@example.com',
                            enActive: 'Yes',
                            organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                            organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                            organigramePersonnelAsso: [],
                            acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
                          }
                        ],
                        acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
                      },
                    ],
                    OrganigrameStructureAsso: []
                  },
                ]
              },
              {
                _id: "1",
                typeStructure: "Departement",
                nom: "It dep",
                Effectif: 104540,
                acteur: '1',
                OrganigrameStructurePricnipale: '1',
                organigramePersonnel: [
                  {
                    _id: '134',
                    civilite: 'Mr',
                    nom: 'zakariae',
                    prenom: 'chelle',
                    fonction: 'designer',
                    Presentation: 'An experienced leader with a vision for growth.',
                    mission: 'To steer the company towards success and innovation.',
                    departement: 'Executive',
                    service: 'Leadership',
                    photo: 'assets/images/team_01.jpg',
                    telFix: '123-456-7890',
                    gsm: '987-654-3210',
                    email: 'john.doe@example.com',
                    enActive: 'Yes',
                    organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                    organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                    organigramePersonnelAsso: [],
                    acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
                  },
                ],
                OrganigrameStructureAsso: [
                  {
                    _id: "1",
                    typeStructure: "Departement",
                    nom: "It",
                    Effectif: 100,
                    acteur: '1',
                    OrganigrameStructurePricnipale: '1',
                    organigramePersonnel: [
                      {
                        _id: '1324532554235434',
                        civilite: 'Mr',
                        nom: 'red',
                        prenom: 'John',
                        fonction: 'designer',
                        Presentation: 'An experienced leader with a vision for growth.',
                        mission: 'To steer the company towards success and innovation.',
                        departement: 'Executive',
                        service: 'Leadership',
                        photo: 'assets/images/team_01.jpg',
                        telFix: '123-456-7890',
                        gsm: '987-654-3210',
                        email: 'john.doe@example.com',
                        enActive: 'Yes',
                        organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                        organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                        organigramePersonnelAsso: [
                          {
                            _id: '1122355423523523552345234g3',
                            civilite: 'Mr',
                            nom: 'anass',
                            prenom: 'chahid',
                            fonction: 'photo editer',
                            Presentation: 'An experienced leader with a vision for growth.',
                            mission: 'To steer the company towards success and innovation.',
                            departement: 'Executive',
                            service: 'Leadership',
                            photo: 'assets/images/team_01.jpg',
                            telFix: '123-456-7890',
                            gsm: '987-654-3210',
                            email: 'john.doe@example.com',
                            enActive: 'Yes',
                            organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
                            organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
                            organigramePersonnelAsso: [],
                            acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
                          }
                        ],
                        acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
                      },

                    ],
                    OrganigrameStructureAsso: []
                  }
                ]
              }
            ]
          }],
        actionnaire: [
          {
            image: 'assets/images/team_01.jpg',
            lien: 'www.google.com',
            typeActionnaire: "entreprise",
            nombreActionPossede: 1000,
            pourcentageParticipation: 51,
            nbrSiegeConseilAdministration: 2,
            roleActif: "Chairman",
            acteur: '1'
          },
          {
            image: 'assets/images/team_01.jpg',
            lien: 'www.google.com',
            typeActionnaire: "entreprise",
            nombreActionPossede: 1000,
            pourcentageParticipation: 51,
            nbrSiegeConseilAdministration: 2,
            roleActif: "Chairman",
            acteur: '1'
          },
          {
            image: 'assets/images/team_01.jpg',
            lien: 'www.google.com',
            typeActionnaire: "entreprise",
            nombreActionPossede: 1000,
            pourcentageParticipation: - 1,
            nbrSiegeConseilAdministration: 2,
            roleActif: "Chairman",
            acteur: '1'
          },
          {
            image: 'assets/images/team_01.jpg',
            lien: 'www.google.com',
            typeActionnaire: "entreprise",
            nombreActionPossede: 1000,
            pourcentageParticipation: - 0.22,
            nbrSiegeConseilAdministration: 2,
            roleActif: "Chairman",
            acteur: '1'
          }
        ],
        conseilAdministration: [
          {
            id: "1",
            etatobjet: "Active",
            civilite: "Mr",
            translations: {
              language: "en",
              nom: "Elon",
              prenom: "Musk",
              presentation: "Experienced professional in corporate governance.",
              fonction: "Chairman",
            },
            photo: "assets/images/profile1.png",
            roleConseil: "Chairman",
            actionnaire: true,
            dateEntree: "2023-01-01",
            enActivite: true,
            dateSortie: new Date(),
            refObjetAssocie: ["obj1", "obj2"],
            refauteurSocioEconomique: "1",
            createdAt: "2022-01-01T12:00:00Z",
            updatedAt: "2022-01-05T15:30:00Z",
          },
          {
            id: "1",
            etatobjet: "Active",
            civilite: "Mr",
            translations: {
              language: "en",
              nom: "Greg",
              prenom: "Brockman",
              presentation: "Experienced professional in corporate governance.",
              fonction: "Chairman",
            },
            photo: "assets/images/profile5.jpg",
            roleConseil: "Chairman",
            actionnaire: true,
            dateEntree: "2023-01-01",
            enActivite: true,
            dateSortie: new Date(),
            refObjetAssocie: ["obj1", "obj2"],
            refauteurSocioEconomique: "1",
            createdAt: "2022-01-01T12:00:00Z",
            updatedAt: "2022-01-05T15:30:00Z",
          },
          {
            id: "1",
            etatobjet: "Active",
            civilite: "Mr",
            translations: {
              language: "en",
              nom: "Greg",
              prenom: "Brockman",
              presentation: "Experienced professional in corporate governance.",
              fonction: "Chairman",
            },
            photo: "assets/images/profile2.png",
            roleConseil: "Chairman",
            actionnaire: true,
            dateEntree: "2023-01-01",
            enActivite: true,
            dateSortie: new Date(),
            refObjetAssocie: ["obj1", "obj2"],
            refauteurSocioEconomique: "1",
            createdAt: "2022-01-01T12:00:00Z",
            updatedAt: "2022-01-05T15:30:00Z",
          },
          {
            id: "1",
            etatobjet: "Active",
            civilite: "Mr",
            translations: {
              language: "en",
              nom: "Greg",
              prenom: "Brockman",
              presentation: "Experienced professional in corporate governance.",
              fonction: "Chairman",
            },
            photo: "assets/images/profile2.png",
            roleConseil: "Chairman",
            actionnaire: true,
            dateEntree: "2023-01-01",
            enActivite: true,
            dateSortie: new Date(),
            refObjetAssocie: ["obj1", "obj2"],
            refauteurSocioEconomique: "1",
            createdAt: "2022-01-01T12:00:00Z",
            updatedAt: "2022-01-05T15:30:00Z",
          },
          {
            id: "1",
            etatobjet: "Active",
            civilite: "Mr",
            translations: {
              language: "en",
              nom: "Greg",
              prenom: "Brockman",
              presentation: "Experienced professional in corporate governance.",
              fonction: "Chairman",
            },
            photo: "assets/images/profile2.png",
            roleConseil: "Chairman",
            actionnaire: true,
            dateEntree: "2023-01-01",
            enActivite: true,
            dateSortie: new Date(),
            refObjetAssocie: ["obj1", "obj2"],
            refauteurSocioEconomique: "1",
            createdAt: "2022-01-01T12:00:00Z",
            updatedAt: "2022-01-05T15:30:00Z",
          },
          {
            id: "1",
            etatobjet: "Active",
            civilite: "Mr",
            translations: {
              language: "en",
              nom: "Greg",
              prenom: "Brockman",
              presentation: "Experienced professional in corporate governance.",
              fonction: "Chairman",
            },
            photo: "assets/images/profile2.png",
            roleConseil: "Chairman",
            actionnaire: true,
            dateEntree: "2023-01-01",
            enActivite: true,
            dateSortie: new Date(),
            refObjetAssocie: ["obj1", "obj2"],
            refauteurSocioEconomique: "1",
            createdAt: "2022-01-01T12:00:00Z",
            updatedAt: "2022-01-05T15:30:00Z",
          },
          {
            id: "1",
            etatobjet: "Active",
            civilite: "Mr",
            translations: {
              language: "en",
              nom: "Greg",
              prenom: "Brockman",
              presentation: "Experienced professional in corporate governance.",
              fonction: "Chairman",
            },
            photo: "assets/images/profile2.png",
            roleConseil: "Chairman",
            actionnaire: true,
            dateEntree: "2023-01-01",
            enActivite: true,
            dateSortie: new Date(),
            refObjetAssocie: ["obj1", "obj2"],
            refauteurSocioEconomique: "1",
            createdAt: "2022-01-01T12:00:00Z",
            updatedAt: "2022-01-05T15:30:00Z",
          },
          {
            id: "1",
            etatobjet: "Active",
            civilite: "Mr",
            translations: {
              language: "en",
              nom: "Greg",
              prenom: "Brockman",
              presentation: "Experienced professional in corporate governance.",
              fonction: "Chairman",
            },
            photo: "assets/images/profile2.png",
            roleConseil: "Chairman",
            actionnaire: true,
            dateEntree: "2023-01-01",
            enActivite: true,
            dateSortie: new Date(),
            refObjetAssocie: ["obj1", "obj2"],
            refauteurSocioEconomique: "1",
            createdAt: "2022-01-01T12:00:00Z",
            updatedAt: "2022-01-05T15:30:00Z",
          },
          {
            id: "1",
            etatobjet: "Active",
            civilite: "Mr",
            translations: {
              language: "en",
              nom: "Greg",
              prenom: "Brockman",
              presentation: "Experienced professional in corporate governance.",
              fonction: "Chairman",
            },
            photo: "assets/images/profile2.png",
            roleConseil: "Chairman",
            actionnaire: true,
            dateEntree: "2023-01-01",
            enActivite: true,
            dateSortie: new Date(),
            refObjetAssocie: ["obj1", "obj2"],
            refauteurSocioEconomique: "1",
            createdAt: "2022-01-01T12:00:00Z",
            updatedAt: "2022-01-05T15:30:00Z",
          },
          {
            id: "1",
            etatobjet: "Active",
            civilite: "Mr",
            translations: {
              language: "en",
              nom: "Greg",
              prenom: "Brockman",
              presentation: "Experienced professional in corporate governance.",
              fonction: "Chairman",
            },
            photo: "assets/images/profile2.png",
            roleConseil: "Chairman",
            actionnaire: true,
            dateEntree: "2023-01-01",
            enActivite: true,
            dateSortie: new Date(),
            refObjetAssocie: ["obj1", "obj2"],
            refauteurSocioEconomique: "1",
            createdAt: "2022-01-01T12:00:00Z",
            updatedAt: "2022-01-05T15:30:00Z",
          }

        ],
        socialMedia: [
          {
            id: "1",
            etatDePublication: "Published",
            typeSocialMedia: "code_8611",
            translations: {
              language: "English",
              designation: "code_8611",
              descriptif: "Professional networking platform",
            },
            logo: "linkedin_logo.png",
            lien: "https://www.linkedin.com/",
            etatFonctionnement: "Active",
            etatobjet: "Networking",
            typeObjetConcene: "Platform",
            objetAssocie: ["Networking", "Job Search"],
            createdAt: new Date(),
            updatedAt: new Date(),
            acteur: "LinkedIn Corporation",
          },
          {
            id: "2",
            etatDePublication: "Published",
            typeSocialMedia: "code_8608",
            translations: {
              language: "English",
              designation: "code_8608",
              descriptif: "Social networking platform",
            },
            logo: "facebook_logo.png",
            lien: "https://www.facebook.com/",
            etatFonctionnement: "Active",
            etatobjet: "Networking",
            typeObjetConcene: "Platform",
            objetAssocie: ["Networking", "Business Pages"],
            createdAt: new Date(),
            updatedAt: new Date(),
            acteur: "Facebook, Inc.",
          },
          {
            id: "3",
            etatDePublication: "Published",
            typeSocialMedia: "code_8610",
            translations: {
              language: "English",
              designation: "code_8610",
              descriptif: "Photo and video sharing platform",
            },
            logo: "instagram_logo.png",
            lien: "https://www.instagram.com/",
            etatFonctionnement: "Active",
            etatobjet: "Networking",
            typeObjetConcene: "Platform",
            objetAssocie: ["Visual Content", "Brand Promotion"],
            createdAt: new Date(),
            updatedAt: new Date(),
            acteur: "Meta Platforms, Inc. (formerly Facebook, Inc.)",
          },
          {
            id: "4",
            etatDePublication: "Published",
            typeSocialMedia: "code_8609",
            translations: {
              language: "English",
              designation: "code_8609",
              descriptif: "Microblogging and social networking platform",
            },
            logo: "twitter_logo.png",
            lien: "https://twitter.com/",
            etatFonctionnement: "Active",
            etatobjet: "Networking",
            typeObjetConcene: "Platform",
            objetAssocie: ["Microblogging", "Trending Topics"],
            createdAt: new Date(),
            updatedAt: new Date(),
            acteur: "Twitter, Inc.",
          },
          {
            id: "5",
            etatDePublication: "Published",
            typeSocialMedia: "code_8613",
            translations: {
              language: "English",
              designation: "code_8613",
              descriptif: "Platform for version control and collaboration",
            },
            logo: "github_logo.png", // Assuming you have a GitHub logo file
            lien: "https://github.com/",
            etatFonctionnement: "Active",
            etatobjet: "Version Control",
            typeObjetConcene: "Platform",
            objetAssocie: ["Collaboration", "Open Source"],
            createdAt: new Date(),
            updatedAt: new Date(),
            acteur: "GitHub, Inc.",
          },
          {
            id: "5",
            etatDePublication: "Published",
            typeSocialMedia: "code_8612",
            translations: {
              language: "English",
              designation: "code_8612",
              descriptif: "Platform for version control and collaboration",
            },
            logo: "github_logo.png", // Assuming you have a GitHub logo file
            lien: "https://youtube.com/",
            etatFonctionnement: "Active",
            etatobjet: "Version Control",
            typeObjetConcene: "Platform",
            objetAssocie: ["Collaboration", "Open Source"],
            createdAt: new Date(),
            updatedAt: new Date(),
            acteur: "GitHub, Inc.",
          },
        ],
        temoignage: [
          {
            id: "1",
            reftemoignage: "REF123", // Reference for the testimonial (optional)
            translations: {
              language: "en",
              nom: "Doe",
              prenom: "John",
              temoignage: "Excellent service, highly recommended!",
              entreprise: "ABC Corporation"
            },
            fonction: "Manager",
            email: "john.doe@example.com",
            date: new Date(),
            photo: "assets/images/profile1.png",
            logo: "assets/images/profile1.png",
            lienAssocie: "https://abc-corp.com/testimonials",
            typeObjetConcerne: "Customer",
            objetAssocie: ["2", "3"], // IDs of associated objects
            etatobjet: "Active",
            acteur: "4" // ID of the associated actor (optional)
          },
          {
            id: "1",
            reftemoignage: "REF123", // Reference for the testimonial (optional)
            translations: {
              language: "en",
              nom: "Doe",
              prenom: "John",
              temoignage: "Excellent service, highly recommended!",
              entreprise: "ABC Corporation"
            },
            fonction: "Manager",
            email: "john.doe@example.com",
            date: new Date(),
            photo: "assets/images/profile2.png",
            logo: "assets/images/profile1.png",
            lienAssocie: "https://abc-corp.com/testimonials",
            typeObjetConcerne: "Customer",
            objetAssocie: ["2", "3"], // IDs of associated objects
            etatobjet: "Active",
            acteur: "4" // ID of the associated actor (optional)
          },
          {
            id: "1",
            reftemoignage: "REF123", // Reference for the testimonial (optional)
            translations: {
              language: "en",
              nom: "Doe",
              prenom: "John",
              temoignage: "Excellent service, highly recommended!",
              entreprise: "ABC Corporation"
            },
            fonction: "Manager",
            email: "john.doe@example.com",
            date: new Date(),
            photo: "assets/images/profile3.png",
            logo: "assets/images/profile1.png",
            lienAssocie: "https://abc-corp.com/testimonials",
            typeObjetConcerne: "Customer",
            objetAssocie: ["2", "3"], // IDs of associated objects
            etatobjet: "Active",
            acteur: "4" // ID of the associated actor (optional)
          },
          {
            id: "1",
            reftemoignage: "REF123", // Reference for the testimonial (optional)
            translations: {
              language: "en",
              nom: "Doe",
              prenom: "John",
              temoignage: "Excellent service, highly recommended!",
              entreprise: "ABC Corporation"
            },
            fonction: "Manager",
            email: "john.doe@example.com",
            date: new Date(),
            photo: "assets/images/profile5.jpg",
            logo: "assets/images/profile1.png",
            lienAssocie: "https://abc-corp.com/testimonials",
            typeObjetConcerne: "Customer",
            objetAssocie: ["2", "3"], // IDs of associated objects
            etatobjet: "Active",
            acteur: "4" // ID of the associated actor (optional)
          },
        ],
        parrainePar: [
          {
            _id: '1',
            acteur: "4", // ID of the associated acteurSocioEcanomique
            categorieParrain: "Gold",
            nom: "Nike Corporation",
            commentaire: "We are proud to sponsor... Excellent partnership! Working with ABC Corporation has been a pleasure, and their commitment to excellence is commendable. Excellent partnership! Working with ABC Corporation has been a pleasure, and their commitment to excellence is commendable.Excellent partnership! Working with ABC Corporation has been a pleasure, and their commitment to excellence is commendable.",
            image: "assets/images/nikelogo.png",
            representaionDuneMarque: [
              {
                refRepresentation: "AIRJ001",
                typeRepresentation: "Endorsement",
                dateDebut: new Date("2022-01-01"),
                marque: "Air Jordan",
                entreprise: "Nike Inc.",
                logo: "assets/images/jordan.png",
                commentaire: "Thrilled to have Air Jordan as our brand ambassador for our latest sportswear line!",
                lien_associe: "https://nike.com/air-jordan",
                acteur: "nike_001", // Replace with the actual ID of the associated acteurSocioEcanomique (Nike Inc.)
                parrainePar: "michael_jordan", // Replace with the actual ID of the associated Parrainepar (Michael Jordan)
              },
              {
                refRepresentation: "AIRJ001",
                typeRepresentation: "Endorsement",
                dateDebut: new Date("2022-01-01"),
                marque: "Just Do It",
                entreprise: "Nike Inc.",
                logo: "assets/images/justdoit.png",
                commentaire: "Thrilled to have Air Jordan as our brand ambassador for our latest sportswear line!",
                lien_associe: "https://nike.com/air-jordan",
                acteur: "nike_001", // Replace with the actual ID of the associated acteurSocioEcanomique (Nike Inc.)
                parrainePar: "michael_jordan", // Replace with the actual ID of the associated Parrainepar (Michael Jordan)
              }
            ],
            temoignage: [
              {
                id: "1",
                reftemoignage: "REF123", // Reference for the testimonial (optional)
                translations: {
                  language: "en",
                  nom: "Doe",
                  prenom: "John",
                  temoignage: "Excellent service, highly recommended!",
                  entreprise: "ABC Corporation"
                },
                fonction: "Manager",
                email: "john.doe@example.com",
                date: new Date(),
                photo: "assets/images/profile1.png",
                logo: "assets/images/profile1.png",
                lienAssocie: "https://abc-corp.com/testimonials",
                typeObjetConcerne: "Customer",
                objetAssocie: ["2", "3"], // IDs of associated objects
                etatobjet: "Active",
                acteur: "4" // ID of the associated actor (optional)
              },
              {
                id: "1",
                reftemoignage: "REF123", // Reference for the testimonial (optional)
                translations: {
                  language: "en",
                  nom: "Doe",
                  prenom: "John",
                  temoignage: "Excellent service, highly recommended!",
                  entreprise: "ABC Corporation"
                },
                fonction: "Manager",
                email: "john.doe@example.com",
                date: new Date(),
                photo: "assets/images/profile2.png",
                logo: "assets/images/profile1.png",
                lienAssocie: "https://abc-corp.com/testimonials",
                typeObjetConcerne: "Customer",
                objetAssocie: ["2", "3"], // IDs of associated objects
                etatobjet: "Active",
                acteur: "4" // ID of the associated actor (optional)
              },
            ]
          },
          {
            _id: '1',
            acteur: "4", // ID of the associated acteurSocioEcanomique
            categorieParrain: "Gold",
            nom: "Adidas Corporation",
            commentaire: "We are proud to sponsor... Excellent partnership! Working with ABC Corporation has been a pleasure, and their commitment to excellence is commendable. Excellent partnership! Working with ABC Corporation has been a pleasure, and their commitment to excellence is commendable.",
            image: "assets/images/adidas.png",
            representaionDuneMarque: [
              // {
              //   refRepresentation: "AIRJ001",
              //   typeRepresentation: "Endorsement",
              //   dateDebut: new Date("2022-01-01"),
              //   marque: "Air Jordan",
              //   entreprise: "Nike Inc.",
              //   logo: "assets/images/adidas.png",
              //   commentaire: "Thrilled to have Air Jordan as our brand ambassador for our latest sportswear line!",
              //   lien_associe: "https://nike.com/air-jordan",
              //   acteur: "nike_001", // Replace with the actual ID of the associated acteurSocioEcanomique (Nike Inc.)
              //   parrainePar: "michael_jordan", // Replace with the actual ID of the associated Parrainepar (Michael Jordan)
              // },  
              // {
              //   refRepresentation: "AIRJ001",
              //   typeRepresentation: "Endorsement",
              //   dateDebut: new Date("2022-01-01"),
              //   marque: "Air Jordan",
              //   entreprise: "Nike Inc.",
              //   logo: "assets/images/adidas.png",
              //   commentaire: "Thrilled to have Air Jordan as our brand ambassador for our latest sportswear line!",
              //   lien_associe: "https://nike.com/air-jordan",
              //   acteur: "nike_001", // Replace with the actual ID of the associated acteurSocioEcanomique (Nike Inc.)
              //   parrainePar: "michael_jordan", // Replace with the actual ID of the associated Parrainepar (Michael Jordan)
              // }
            ],
            temoignage: [
              {
                id: "1",
                translations: {
                  language: "en",
                  nom: "Doe",
                  prenom: "John",
                  temoignage: "Great sponsorship experience!",
                  entreprise: "ABC Corporation"
                },
                fonction: "Manager",
                email: "john.doe@example.com",
                date: new Date(),
                photo: "path/to/john-doe-photo.jpg",
                logo: "path/to/abc-corp-logo.jpg",
                lienAssocie: "https://abc-corp.com/testimonials",
                typeObjetConcerne: "Sponsorship",
                objetAssocie: ["2", "3"], // IDs of associated objects
                etatobjet: "Active",
                acteur: "4" // ID of the associated actor (optional)
              },
            ],

          }

        ],
        representaionDunMarque: [
          {
            refRepresentation: "AIRJ001",
            typeRepresentation: "Endorsement",
            dateDebut: new Date("2022-01-01"),
            marque: "Air Jordan",
            entreprise: "Nike Inc.",
            logo: "assets/images/jordan.png",
            commentaire: "Thrilled to have Air Jordan as our brand ambassador for our latest sportswear line!",
            lien_associe: "https://nike.com/air-jordan",
            acteur: "nike_001", // Replace with the actual ID of the associated acteurSocioEcanomique (Nike Inc.)
            parrainePar: "michael_jordan", // Replace with the actual ID of the associated Parrainepar (Michael Jordan)
          },
          {
            refRepresentation: "AIRJ001",
            typeRepresentation: "Endorsement",
            dateDebut: new Date("2022-01-01"),
            marque: "Just Do It",
            entreprise: "Nike Inc.",
            logo: "assets/images/justdoit.png",
            commentaire: "Thrilled to have Air Jordan as our brand ambassador for our latest sportswear line!",
            lien_associe: "https://nike.com/air-jordan",
            acteur: "nike_001", // Replace with the actual ID of the associated acteurSocioEcanomique (Nike Inc.)
            parrainePar: "michael_jordan", // Replace with the actual ID of the associated Parrainepar (Michael Jordan)
          }
        ],
        faq: [
          {
            question: "What is Lorem Ipsum?",
            reponse: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          },
          {
            question: "Why do we use it?",
            reponse: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          },
          {
            question: "Where does it come from?",
            reponse: "Contrary to popular belief, Lorem Ipsum is not simply random text."
          },
          {
            question: "Is it readable?",
            reponse: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
          },
          {
            question: "What are the origins of Lorem Ipsum?",
            reponse: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
          },
          {
            question: "How to use Lorem Ipsum?",
            reponse: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
          }, {
            question: "How to install Angular CLI?",
            reponse: "You can install Angular CLI using the command 'npm install -g @angular/cli'."
          },
          {
            question: "What is TypeScript?",
            reponse: "TypeScript is a superset of JavaScript that adds static typing to the language."
          },
          {
            question: "How to create a new Angular project?",
            reponse: "To create a new Angular project, run 'ng new project-name' in the terminal."
          },
          {
            question: "What is the Angular component?",
            reponse: "An Angular component is a building block of an Angular application, representing a part of the user interface."
          },
          {
            question: "How to handle forms in Angular?",
            reponse: "Angular provides the FormsModule for handling forms. You can use ngModel for two-way data binding."
          },
          {
            question: "What is dependency injection in Angular?",
            reponse: "Dependency injection is a design pattern in which a class receives its dependencies from external sources rather than creating them itself."
          },
        ],
        actionSocialeetSOlidaire: [
          {
            _id: '1',
            typeAction: "Don de vêtements",
            dateAction: new Date("2024-01-15"),
            typeBeneficiere: "Association caritative",
            nomBeneficiere: "Les Restos du Coeur",
            photo: "assets/images/solid1.jpg",
            commentaire: "Nous avons collecté et trié plus de 500 kg de vêtements pour les distribuer aux personnes dans le besoin.",
            lienAssocie: "https://www.restosducoeur.org/",
            contenuMMedia: "video-don-vetements.mp4",
            acteur: "Entreprise sociale"
          },
          {
            _id: '3',
            typeAction: "Don de vêtements",
            dateAction: new Date("2024-01-15"),
            typeBeneficiere: "Association caritative",
            nomBeneficiere: "Les Restos du Coeur",
            photo: "assets/images/solid2.png",
            commentaire: "Nous avons collecté et trié plus de 500 kg de vêtements pour les distribuer aux personnes dans le besoin.",
            lienAssocie: "https://www.github.com",
            contenuMMedia: "video-don-vetements.mp4",
            acteur: "Entreprise sociale"
          },
          {
            _id: '34',
            typeAction: "Don de vêtements",
            dateAction: new Date("2024-01-15"),
            typeBeneficiere: "Association caritative",
            nomBeneficiere: "Les Restos du Coeur",
            photo: "assets/images/solid3.jpg",
            commentaire: "Nous avons collecté et trié plus de 500 kg de vêtements pour les distribuer aux personnes dans le besoin.",
            lienAssocie: "https://www.google.com",
            contenuMMedia: "video-don-vetements.mp4",
            acteur: "Entreprise sociale"
          }
        ],
        contennuMMedia: [
          {
            file: 'assets/images/res1.jpg',

            typeContenu: 'document',

            taxonomyContenu: 'Some Taxonomy',
            refContenu: 'ABC123',
            FormatDoc: 'PDF',
            translations: {
              titreDoc: 'catalogue',
              SousTitre: 'Subtitle',
              resume: 'Summary of the document',
            },
            image: '',
            Date: new Date(),
            Auteurs: ['Author 1', 'Author 2'],
            lienContenu: 'https://example.com/document',
            langueParDefaut: 'en',
            Telechargeable: true,
            tailleDoc: 1024, // size in KB
            TailleLimmite: 2048, // size limit in KB
            uniteTaille: 'KB',
            provenanceInterne: true,
            Payant: false,
            DroitLibre: true,
            DroitPublication: true,
            publicationAutorisee: true,
            preuveDroitSiNonLibre: 'Proof of rights if not free',
            // Optional property, uncomment if you want to include it
            // acteur: 'Some Actor',
          },
          {
            file: 'assets/images/res1.jpg',

            typeContenu: 'image',

            taxonomyContenu: 'Some Taxonomy',
            refContenu: 'ABC123',
            FormatDoc: 'PDF',
            translations: {
              titreDoc: 'Document Title',
              SousTitre: 'Subtitle',
              resume: 'Summary of the document',
            },
            image: '',

            Date: new Date(),
            Auteurs: ['Author 1', 'Author 2'],
            lienContenu: 'https://example.com/document',
            langueParDefaut: 'en',
            Telechargeable: true,
            tailleDoc: 1024, // size in KB
            TailleLimmite: 2048, // size limit in KB
            uniteTaille: 'KB',
            provenanceInterne: true,
            Payant: false,
            DroitLibre: true,
            DroitPublication: true,
            publicationAutorisee: true,
            preuveDroitSiNonLibre: 'Proof of rights if not free',
            // Optional property, uncomment if you want to include it
            // acteur: 'Some Actor',
          },
          {
            file: 'assets/images/res3.jpg',

            typeContenu: 'image',

            taxonomyContenu: 'Some Taxonomy',
            refContenu: 'ABC123',
            FormatDoc: 'PDF',
            translations: {
              titreDoc: 'Document Title',
              SousTitre: 'Subtitle',
              resume: 'Summary of the document',
            },
            image: '',

            Date: new Date(),
            Auteurs: ['Author 1', 'Author 2'],
            lienContenu: 'https://example.com/document',
            langueParDefaut: 'en',
            Telechargeable: true,
            tailleDoc: 1024, // size in KB
            TailleLimmite: 2048, // size limit in KB
            uniteTaille: 'KB',
            provenanceInterne: true,
            Payant: false,
            DroitLibre: true,
            DroitPublication: true,
            publicationAutorisee: true,
            preuveDroitSiNonLibre: 'Proof of rights if not free',
            // Optional property, uncomment if you want to include it
            // acteur: 'Some Actor',
          },
          {
            file: 'assets/images/res4.jpg',

            typeContenu: 'image',

            taxonomyContenu: 'Some Taxonomy',
            refContenu: 'ABC123',
            FormatDoc: 'PDF',
            translations: {
              titreDoc: 'Document Title',
              SousTitre: 'Subtitle',
              resume: 'Summary of the document',
            },
            image: 'assets/images/res4.jpg',
            Date: new Date(),
            Auteurs: ['Author 1', 'Author 2'],
            lienContenu: 'https://example.com/document',
            langueParDefaut: 'en',
            Telechargeable: true,
            tailleDoc: 1024, // size in KB
            TailleLimmite: 2048, // size limit in KB
            uniteTaille: 'KB',
            provenanceInterne: true,
            Payant: false,
            DroitLibre: true,
            DroitPublication: true,
            publicationAutorisee: true,
            preuveDroitSiNonLibre: 'Proof of rights if not free',
            // Optional property, uncomment if you want to include it
            // acteur: 'Some Actor',
          },
          {
            file: 'assets/data/bootstrap-support.pdf',

            typeContenu: 'file',

            taxonomyContenu: 'Some Taxonomy',
            refContenu: 'ABC123',
            FormatDoc: 'PDF',
            translations: {
              titreDoc: 'Document Title',
              SousTitre: 'Subtitle',
              resume: 'Summary of the document',
            },
            image: 'assets/images/res5.jpg',

            Date: new Date(),
            Auteurs: ['Author 1', 'Author 2'],
            lienContenu: 'https://example.com/document',
            langueParDefaut: 'en',
            Telechargeable: true,
            tailleDoc: 1024, // size in KB
            TailleLimmite: 2048, // size limit in KB
            uniteTaille: 'KB',
            provenanceInterne: true,
            Payant: false,
            DroitLibre: true,
            DroitPublication: true,
            publicationAutorisee: true,
            preuveDroitSiNonLibre: 'Proof of rights if not free',
            // Optional property, uncomment if you want to include it
            // acteur: 'Some Actor',
          },
          {
            file: 'assets/data/bootstrap-support.pdf',

            typeContenu: 'file',

            taxonomyContenu: 'Some Taxonomy',
            refContenu: 'ABC123',
            FormatDoc: 'PDF',
            translations: {
              titreDoc: 'Document Title',
              SousTitre: 'Subtitle',
              resume: 'Summary of the document',
            },
            image: 'assets/images/res6.jpeg',

            Date: new Date(),
            Auteurs: ['Author 1', 'Author 2'],
            lienContenu: 'https://example.com/document',
            langueParDefaut: 'en',
            Telechargeable: true,
            tailleDoc: 1024, // size in KB
            TailleLimmite: 2048, // size limit in KB
            uniteTaille: 'KB',
            provenanceInterne: true,
            Payant: false,
            DroitLibre: true,
            DroitPublication: true,
            publicationAutorisee: true,
            preuveDroitSiNonLibre: 'Proof of rights if not free',
            // Optional property, uncomment if you want to include it
            // acteur: 'Some Actor',
          },
          {
            file: 'assets/images/res7.jpg',

            typeContenu: 'image',

            taxonomyContenu: 'Some Taxonomy',
            refContenu: 'ABC123',
            FormatDoc: 'PDF',
            translations: {
              titreDoc: 'Document Title',
              SousTitre: 'Subtitle',
              resume: 'Summary of the document',
            },
            image: 'assets/images/res7.jpg',
            Date: new Date(),
            Auteurs: ['Author 1', 'Author 2'],
            lienContenu: 'https://example.com/document',
            langueParDefaut: 'en',
            Telechargeable: true,
            tailleDoc: 1024, // size in KB
            TailleLimmite: 2048, // size limit in KB
            uniteTaille: 'KB',
            provenanceInterne: true,
            Payant: false,
            DroitLibre: true,
            DroitPublication: true,
            publicationAutorisee: true,
            preuveDroitSiNonLibre: 'Proof of rights if not free',
            // Optional property, uncomment if you want to include it
            // acteur: 'Some Actor',
          },
          {
            file: 'assets/images/vid1.mp4',

            typeContenu: 'video',

            taxonomyContenu: 'Some Taxonomy',
            refContenu: 'ABC123',
            FormatDoc: 'PDF',
            translations: {
              titreDoc: 'Document Title',
              SousTitre: 'Subtitle',
              resume: 'Summary of the document',
            },
            image: 'assets/images/res10.jpg',
            Date: new Date(),
            Auteurs: ['Author 1', 'Author 2'],
            lienContenu: 'https://example.com/document',
            langueParDefaut: 'en',
            Telechargeable: true,
            tailleDoc: 1024, // size in KB
            TailleLimmite: 2048, // size limit in KB
            uniteTaille: 'KB',
            provenanceInterne: true,
            Payant: false,
            DroitLibre: true,
            DroitPublication: true,
            publicationAutorisee: true,
            preuveDroitSiNonLibre: 'Proof of rights if not free',
            // Optional property, uncomment if you want to include it
            // acteur: 'Some Actor',
          },
          {
            file: 'assets/images/vid2.mp4',

            typeContenu: 'video',

            taxonomyContenu: 'Some Taxonomy',
            refContenu: 'ABC123',
            FormatDoc: 'PDF',
            translations: {
              titreDoc: 'Document Title',
              SousTitre: 'Subtitle',
              resume: 'Summary of the document',
            },
            image: 'assets/images/res9.jpeg',

            Date: new Date(),
            Auteurs: ['Author 1', 'Author 2'],
            lienContenu: 'https://example.com/document',
            langueParDefaut: 'en',
            Telechargeable: true,
            tailleDoc: 1024, // size in KB
            TailleLimmite: 2048, // size limit in KB
            uniteTaille: 'KB',
            provenanceInterne: true,
            Payant: false,
            DroitLibre: true,
            DroitPublication: true,
            publicationAutorisee: true,
            preuveDroitSiNonLibre: 'Proof of rights if not free',
            // Optional property, uncomment if you want to include it
            // acteur: 'Some Actor',
          },
          {
            file: 'assets/images/res9.jpeg',

            typeContenu: 'image',

            taxonomyContenu: 'Some Taxonomy',
            refContenu: 'ABC123',
            FormatDoc: 'PDF',
            translations: {
              titreDoc: 'Document Title',
              SousTitre: 'Subtitle',
              resume: 'Summary of the document',
            },
            image: 'assets/images/res9.jpeg',

            Date: new Date(),
            Auteurs: ['Author 1', 'Author 2'],
            lienContenu: 'https://example.com/document',
            langueParDefaut: 'en',
            Telechargeable: true,
            tailleDoc: 1024, // size in KB
            TailleLimmite: 2048, // size limit in KB
            uniteTaille: 'KB',
            provenanceInterne: true,
            Payant: false,
            DroitLibre: true,
            DroitPublication: true,
            publicationAutorisee: true,
            preuveDroitSiNonLibre: 'Proof of rights if not free',
            // Optional property, uncomment if you want to include it
            // acteur: 'Some Actor',
          },
          {
            file: 'assets/images/vid3.mp4',

            typeContenu: 'video',

            taxonomyContenu: 'Some Taxonomy',
            refContenu: 'ABC123',
            FormatDoc: 'PDF',
            translations: {
              titreDoc: 'Document Title',
              SousTitre: 'Subtitle',
              resume: 'Summary of the document',
            },
            image: 'assets/images/res9.jpeg',

            Date: new Date(),
            Auteurs: ['Author 1', 'Author 2'],
            lienContenu: 'https://example.com/document',
            langueParDefaut: 'en',
            Telechargeable: true,
            tailleDoc: 1024, // size in KB
            TailleLimmite: 2048, // size limit in KB
            uniteTaille: 'KB',
            provenanceInterne: true,
            Payant: false,
            DroitLibre: true,
            DroitPublication: true,
            publicationAutorisee: true,
            preuveDroitSiNonLibre: 'Proof of rights if not free',
            // Optional property, uncomment if you want to include it
            // acteur: 'Some Actor',
          },
          {
            file: 'assets/images/res6.jpeg',

            typeContenu: 'image',

            taxonomyContenu: 'Some Taxonomy',
            refContenu: 'ABC123',
            FormatDoc: 'PDF',
            translations: {
              titreDoc: 'Document Title',
              SousTitre: 'Subtitle',
              resume: 'Summary of the document',
            },
            image: 'assets/images/res6.jpeg',

            Date: new Date(),
            Auteurs: ['Author 1', 'Author 2'],
            lienContenu: 'https://example.com/document',
            langueParDefaut: 'en',
            Telechargeable: true,
            tailleDoc: 1024, // size in KB
            TailleLimmite: 2048, // size limit in KB
            uniteTaille: 'KB',
            provenanceInterne: true,
            Payant: false,
            DroitLibre: true,
            DroitPublication: true,
            publicationAutorisee: true,
            preuveDroitSiNonLibre: 'Proof of rights if not free',
            // Optional property, uncomment if you want to include it
            // acteur: 'Some Actor',
          },
          {
            file: 'assets/images/res6.jpeg',

            typeContenu: 'j',

            taxonomyContenu: 'Some Taxonomy',
            refContenu: 'ABC123',
            FormatDoc: 'PDF',
            translations: {
              titreDoc: 'Document Title',
              SousTitre: 'Subtitle',
              resume: 'Summary of the document',
            },
            image: 'assets/images/res6.jpeg',

            Date: new Date(),
            Auteurs: ['Author 1', 'Author 2'],
            lienContenu: 'https://example.com/document',
            langueParDefaut: 'en',
            Telechargeable: true,
            tailleDoc: 1024, // size in KB
            TailleLimmite: 2048, // size limit in KB
            uniteTaille: 'KB',
            provenanceInterne: true,
            Payant: false,
            DroitLibre: true,
            DroitPublication: true,
            publicationAutorisee: true,
            preuveDroitSiNonLibre: 'Proof of rights if not free',
            // Optional property, uncomment if you want to include it
            // acteur: 'Some Actor',
          },
          {
            file: 'assets/images/res6.jpeg',

            typeContenu: 'j',

            taxonomyContenu: 'Some Taxonomy',
            refContenu: 'ABC123',
            FormatDoc: 'PDF',
            translations: {
              titreDoc: 'Document Title',
              SousTitre: 'Subtitle',
              resume: 'Summary of the document',
            },
            image: 'assets/images/res7.jpg',

            Date: new Date(),
            Auteurs: ['Author 1', 'Author 2'],
            lienContenu: 'https://example.com/document',
            langueParDefaut: 'en',
            Telechargeable: true,
            tailleDoc: 1024, // size in KB
            TailleLimmite: 2048, // size limit in KB
            uniteTaille: 'KB',
            provenanceInterne: true,
            Payant: false,
            DroitLibre: true,
            DroitPublication: true,
            publicationAutorisee: true,
            preuveDroitSiNonLibre: 'Proof of rights if not free',
            // Optional property, uncomment if you want to include it
            // acteur: 'Some Actor',
          },
          {
            file: 'assets/images/res5.jpg',

            typeContenu: 'j',

            taxonomyContenu: 'Some Taxonomy',
            refContenu: 'ABC123',
            FormatDoc: 'PDF',
            translations: {
              titreDoc: 'Document Title',
              SousTitre: 'Subtitle',
              resume: 'Summary of the document',
            },
            image: 'assets/images/res5.jpg',

            Date: new Date(),
            Auteurs: ['Author 1', 'Author 2'],
            lienContenu: 'https://example.com/document',
            langueParDefaut: 'en',
            Telechargeable: true,
            tailleDoc: 1024, // size in KB
            TailleLimmite: 2048, // size limit in KB
            uniteTaille: 'KB',
            provenanceInterne: true,
            Payant: false,
            DroitLibre: true,
            DroitPublication: true,
            publicationAutorisee: true,
            preuveDroitSiNonLibre: 'Proof of rights if not free',
            // Optional property, uncomment if you want to include it
            // acteur: 'Some Actor',
          },
          {
            file: 'assets/images/res5.jpg',

            typeContenu: 'j',

            taxonomyContenu: 'Some Taxonomy',
            refContenu: 'ABC123',
            FormatDoc: 'PDF',
            translations: {
              titreDoc: 'Document Title',
              SousTitre: 'Subtitle',
              resume: 'Summary of the document',
            },
            image: 'assets/images/res5.jpg',

            Date: new Date(),
            Auteurs: ['Author 1', 'Author 2'],
            lienContenu: 'https://example.com/document',
            langueParDefaut: 'en',
            Telechargeable: true,
            tailleDoc: 1024, // size in KB
            TailleLimmite: 2048, // size limit in KB
            uniteTaille: 'KB',
            provenanceInterne: true,
            Payant: false,
            DroitLibre: true,
            DroitPublication: true,
            publicationAutorisee: true,
            preuveDroitSiNonLibre: 'Proof of rights if not free',
            // Optional property, uncomment if you want to include it
            // acteur: 'Some Actor',
          },
        ],
        produiteEtService: [
          {
            id: "1dfg",
            categorieProduit: "Cleaning",
            typeProduit: "Household",
            venteSeule: true,
            typeVente: "Online",
            tarifSpecial: "Discounted",
            typeTarif: "Regular",
            produitVirtuel: false,
            produitTelechargeable: false,
            event: true,
            dateDebutEvent: new Date("2024-02-01"),
            dateFinEvent: new Date("2024-02-10"),
            slogan: "Keep it Clean!",
            translations: {
              language: '',
              designationProduit: "Premium Cleaning Solution",
              slogan: 'string',
              descriptifProduit: 'Premium Cleaning Solution to perfectly clean you house',
              messageAachat: 'you have to provide',
              tags: [],
            },
            imageProduit: "assets/images/product.jpg",
            madeInProduit: "USA",
            productTAG: "Premium",
            unityProduit: "Bottle",
            affichageTarif: "code_8382",
            tarifUHTpardefaut: 550,
            monnaiePays: "MAD",
            tVApardefaut: 7.5,
            paysTVAdefaut: "United States",
            ordreAffichageProduit: 1,
            messageAfficherAchat: "Order Now for a Sparkling Home!",
            commandeQuantiteReglementee: false,
            qteMaxParCommande: 500,
            qteMinParCommande: 3,
            urlSiExterne: 0,
            messageBoutonSiExterne: 'Please enter',
            afficherAvis: true,
            affichagePublic: true,
            indicationEtatStock: true,
            relationavecGestionSock: true,
            etatPublicationProduit: "Published",
            refProduitServiceSolPropre2: ["related_product_1", "related_product_2"],
            caracteristiques: [],
            distinctions: [],
            contenuMedia: [],
            socialMedia: [],
            acteur: '1'
          },
          {
            id: "1dfg",
            categorieProduit: "Cleaning",
            typeProduit: "Household",
            venteSeule: true,
            typeVente: "Online",
            tarifSpecial: "Discounted",
            typeTarif: "Regular",
            produitVirtuel: false,
            produitTelechargeable: false,
            event: true,
            dateDebutEvent: new Date("2024-02-01"),
            dateFinEvent: new Date("2024-02-10"),
            slogan: "Keep it Clean!",
            translations: {
              language: '',
              designationProduit: "Premium Cleaning Solution",
              slogan: 'string',
              descriptifProduit: 'Premium Cleaning Solution to perfectly clean you house',
              messageAachat: 'you have to provide',
              tags: [],
            },
            imageProduit: "assets/images/product.jpg",
            madeInProduit: "USA",
            productTAG: "Premium",
            unityProduit: "Bottle",
            affichageTarif: "code_8382",
            tarifUHTpardefaut: 10,
            monnaiePays: "MAD",
            tVApardefaut: 7.5,
            paysTVAdefaut: "United States",
            ordreAffichageProduit: 1,
            messageAfficherAchat: "Order Now for a Sparkling Home!",
            commandeQuantiteReglementee: false,
            qteMaxParCommande: 100000,
            qteMinParCommande: 3,
            urlSiExterne: 0,
            messageBoutonSiExterne: 'Please enter',
            afficherAvis: true,
            affichagePublic: true,
            indicationEtatStock: true,
            relationavecGestionSock: true,
            etatPublicationProduit: "Published",
            refProduitServiceSolPropre2: ["related_product_1", "related_product_2"],
            caracteristiques: [],
            distinctions: [],
            contenuMedia: [],
            socialMedia: [],
            acteur: '1'
          },
          {
            id: "1dfg",
            categorieProduit: "Cleaning",
            typeProduit: "Household",
            venteSeule: true,
            typeVente: "Online",
            tarifSpecial: "Discounted",
            typeTarif: "Regular",
            produitVirtuel: false,
            produitTelechargeable: false,
            event: true,
            dateDebutEvent: new Date("2024-02-01"),
            dateFinEvent: new Date("2024-02-10"),
            slogan: "Keep it Clean!",
            translations: {
              language: '',
              designationProduit: "Premium Cleaning Solution",
              slogan: 'string',
              descriptifProduit: 'Premium Cleaning Solution to perfectly clean you house',
              messageAachat: 'you have to provide',
              tags: [],
            },
            imageProduit: "assets/images/product.jpg",
            madeInProduit: "USA",
            productTAG: "Premium",
            unityProduit: "Bottle",
            affichageTarif: "code_8382",
            tarifUHTpardefaut: 10,
            monnaiePays: "MAD",
            tVApardefaut: 7.5,
            paysTVAdefaut: "United States",
            ordreAffichageProduit: 1,
            messageAfficherAchat: "Order Now for a Sparkling Home!",
            commandeQuantiteReglementee: false,
            qteMaxParCommande: 100000,
            qteMinParCommande: 3,
            urlSiExterne: 0,
            messageBoutonSiExterne: 'Please enter',
            afficherAvis: true,
            affichagePublic: true,
            indicationEtatStock: true,
            relationavecGestionSock: true,
            etatPublicationProduit: "Published",
            refProduitServiceSolPropre2: ["related_product_1", "related_product_2"],
            caracteristiques: [],
            distinctions: [],
            contenuMedia: [],
            socialMedia: [],
            acteur: '1'
          },
          {
            id: "13ertg",
            categorieProduit: "Cleaning",
            typeProduit: "Household",
            venteSeule: true,
            typeVente: "Online",
            tarifSpecial: "Discounted",
            typeTarif: "Regular",
            produitVirtuel: false,
            produitTelechargeable: false,
            event: true,
            dateDebutEvent: new Date("2024-02-01"),
            dateFinEvent: new Date("2024-02-10"),
            slogan: "Keep it Clean!",
            translations: {
              language: '',
              designationProduit: "Premium Cleaning Solution",
              slogan: 'string',
              descriptifProduit: 'Premium Cleaning Solution to perfectly clean you house',
              messageAachat: 'you have to provide',
              tags: [],
            },
            imageProduit: "assets/images/product.jpg",
            madeInProduit: "USA",
            productTAG: "Premium",
            unityProduit: "Bottle",
            affichageTarif: "code_8382",
            tarifUHTpardefaut: 10,
            monnaiePays: "USD",
            tVApardefaut: 7.5,
            paysTVAdefaut: "United States",
            ordreAffichageProduit: 1,
            messageAfficherAchat: "Order Now for a Sparkling Home!",
            commandeQuantiteReglementee: false,
            qteMaxParCommande: 5,
            qteMinParCommande: 1,
            urlSiExterne: 0,
            messageBoutonSiExterne: 'Please enter',
            afficherAvis: true,
            affichagePublic: true,
            indicationEtatStock: true,
            relationavecGestionSock: true,
            etatPublicationProduit: "Published",
            refProduitServiceSolPropre2: ["related_product_1", "related_product_2"],
            caracteristiques: [],
            distinctions: [],
            contenuMedia: [],
            socialMedia: [],
            acteur: '1'
          },
          {
            id: "eqrtet1",
            categorieProduit: "Cleaning",
            typeProduit: "Household",
            venteSeule: true,
            typeVente: "Online",
            tarifSpecial: "Discounted",
            typeTarif: "Regular",
            produitVirtuel: false,
            produitTelechargeable: false,
            event: true,
            dateDebutEvent: new Date("2024-02-01"),
            dateFinEvent: new Date("2024-02-10"),
            slogan: "Keep it Clean!",
            translations: {
              language: '',
              designationProduit: "Premium Cleaning Solution",
              slogan: 'string',
              descriptifProduit: 'Premium Cleaning Solution to perfectly clean you house',
              messageAachat: 'you have to provide',
              tags: [],
            },
            imageProduit: "assets/images/product.jpg",
            madeInProduit: "USA",
            productTAG: "Premium",
            unityProduit: "Bottle",
            affichageTarif: "code_8382",
            tarifUHTpardefaut: 10,
            monnaiePays: "USD",
            tVApardefaut: 7.5,
            paysTVAdefaut: "United States",
            ordreAffichageProduit: 1,
            messageAfficherAchat: "Order Now for a Sparkling Home!",
            commandeQuantiteReglementee: false,
            qteMaxParCommande: 5,
            qteMinParCommande: 1,
            urlSiExterne: 0,
            messageBoutonSiExterne: 'Please enter',
            afficherAvis: true,
            affichagePublic: true,
            indicationEtatStock: true,
            relationavecGestionSock: true,
            etatPublicationProduit: "Published",
            refProduitServiceSolPropre2: ["related_product_1", "related_product_2"],
            caracteristiques: [],
            distinctions: [],
            contenuMedia: [],
            socialMedia: [],
            acteur: '1'
          },
          {
            id: "1eqrtqert",
            categorieProduit: "Cleaning",
            typeProduit: "Household",
            venteSeule: true,
            typeVente: "Online",
            tarifSpecial: "Discounted",
            typeTarif: "Regular",
            produitVirtuel: false,
            produitTelechargeable: false,
            event: true,
            dateDebutEvent: new Date("2024-02-01"),
            dateFinEvent: new Date("2024-02-10"),
            slogan: "Keep it Clean!",
            translations: {
              language: '',
              designationProduit: "Premium Cleaning Solution",
              slogan: 'string',
              descriptifProduit: 'Premium Cleaning Solution to perfectly clean you house',
              messageAachat: 'you have to provide',
              tags: [],
            },
            imageProduit: "assets/images/product.jpg",
            madeInProduit: "USA",
            productTAG: "Premium",
            unityProduit: "Bottle",
            affichageTarif: "code_8382",
            tarifUHTpardefaut: 10,
            monnaiePays: "USD",
            tVApardefaut: 7.5,
            paysTVAdefaut: "United States",
            ordreAffichageProduit: 1,
            messageAfficherAchat: "Order Now for a Sparkling Home!",
            commandeQuantiteReglementee: false,
            qteMaxParCommande: 5,
            qteMinParCommande: 1,
            urlSiExterne: 0,
            messageBoutonSiExterne: 'Please enter',
            afficherAvis: true,
            affichagePublic: true,
            indicationEtatStock: true,
            relationavecGestionSock: true,
            etatPublicationProduit: "Published",
            refProduitServiceSolPropre2: ["related_product_1", "related_product_2"],
            caracteristiques: [],
            distinctions: [],
            contenuMedia: [],
            socialMedia: [],
            acteur: '1'
          },
          {
            id: "etrtqqre1",
            categorieProduit: "Cleaning",
            typeProduit: "Household",
            venteSeule: true,
            typeVente: "Online",
            tarifSpecial: "Discounted",
            typeTarif: "Regular",
            produitVirtuel: false,
            produitTelechargeable: false,
            event: true,
            dateDebutEvent: new Date("2024-02-01"),
            dateFinEvent: new Date("2024-02-10"),
            slogan: "Keep it Clean!",
            translations: {
              language: '',
              designationProduit: "Premium Cleaning Solution",
              slogan: 'string',
              descriptifProduit: 'Premium Cleaning Solution to perfectly clean you house',
              messageAachat: 'you have to provide',
              tags: [],
            },
            imageProduit: "assets/images/product.jpg",
            madeInProduit: "USA",
            productTAG: "Premium",
            unityProduit: "Bottle",
            affichageTarif: "code_8382",
            tarifUHTpardefaut: 10,
            monnaiePays: "USD",
            tVApardefaut: 7.5,
            paysTVAdefaut: "United States",
            ordreAffichageProduit: 1,
            messageAfficherAchat: "Order Now for a Sparkling Home!",
            commandeQuantiteReglementee: false,
            qteMaxParCommande: 5,
            qteMinParCommande: 1,
            urlSiExterne: 0,
            messageBoutonSiExterne: 'Please enter',
            afficherAvis: true,
            affichagePublic: true,
            indicationEtatStock: true,
            relationavecGestionSock: true,
            etatPublicationProduit: "Published",
            refProduitServiceSolPropre2: ["related_product_1", "related_product_2"],
            caracteristiques: [],
            distinctions: [],
            contenuMedia: [],
            socialMedia: [],
            acteur: '1'
          },
        ],
        catalogue: [
          {
            referenceCataloge: "CAT-2024-001",
            classCatalogue: "Household",
            typeDestinatiare: "Customers",
            translations: {
              titreCatalogue: "IMMOBILIER",
              descriptionCatalogue: "Explore our latest cleaning products for a fresh and clean home.",
            },
            image: "spring_cleaning_catalogue.jpg",
            sloganCatalogue: "Revitalize Your Home This Spring!",
            editionCatalogue: "2024 Edition",
            dateEtPeriodeDeCatalogue: new Date("2024-03-01"),
            documentAssocie: "catalogue_document.pdf",
            etatPublicationCatalogue: "Published",
            produiService: [
              // You can use the previously defined 'sampleProduit' object or create more products here.
              {
                id: "1",
                categorieProduit: "Cleaning",
                typeProduit: "Household",
                venteSeule: true,
                typeVente: "Online",
                tarifSpecial: "Discounted",
                typeTarif: "Regular",
                produitVirtuel: false,
                produitTelechargeable: false,
                event: true,
                dateDebutEvent: new Date("2024-02-01"),
                dateFinEvent: new Date("2024-02-10"),
                slogan: "Keep it Clean!",
                translations: {
                  language: '',
                  designationProduit: "Premium Cleaning Solution",
                  slogan: 'string',
                  descriptifProduit: 'Premium Cleaning Solution to perfectly clean you house',
                  messageAachat: 'you have to provide',
                  tags: [],
                },
                imageProduit: "assets/images/product.jpg",
                madeInProduit: "USA",
                productTAG: "Premium",
                unityProduit: "Bottle",
                affichageTarif: "code_8382",
                tarifUHTpardefaut: 19,
                monnaiePays: "USD",
                tVApardefaut: 7.5,
                paysTVAdefaut: "United States",
                ordreAffichageProduit: 1,
                messageAfficherAchat: "Order Now for a Sparkling Home!",
                commandeQuantiteReglementee: false,
                qteMaxParCommande: 5,
                qteMinParCommande: 1,
                urlSiExterne: 0,
                messageBoutonSiExterne: 'Please enter',
                afficherAvis: true,
                affichagePublic: true,
                indicationEtatStock: true,
                relationavecGestionSock: true,
                etatPublicationProduit: "Published",
                refProduitServiceSolPropre2: ["related_product_1", "related_product_2"],
                caracteristiques: [],
                distinctions: [],
                contenuMedia: [],
                socialMedia: [],
                acteur: '1'
              }, {
                id: "1",
                categorieProduit: "Cleaning",
                typeProduit: "Household",
                venteSeule: true,
                typeVente: "Online",
                tarifSpecial: "Discounted",
                typeTarif: "Regular",
                produitVirtuel: false,
                produitTelechargeable: false,
                event: true,
                dateDebutEvent: new Date("2024-02-01"),
                dateFinEvent: new Date("2024-02-10"),
                slogan: "Keep it Clean!",
                translations: {
                  language: '',
                  designationProduit: "Premium Cleaning Solution",
                  slogan: 'string',
                  descriptifProduit: 'Premium Cleaning Solution to perfectly clean you house',
                  messageAachat: 'you have to provide',
                  tags: [],
                },
                imageProduit: "assets/images/product.jpg",
                madeInProduit: "USA",
                productTAG: "Premium",
                unityProduit: "Bottle",
                affichageTarif: "code_8382",
                tarifUHTpardefaut: 19,
                monnaiePays: "USD",
                tVApardefaut: 7.5,
                paysTVAdefaut: "United States",
                ordreAffichageProduit: 1,
                messageAfficherAchat: "Order Now for a Sparkling Home!",
                commandeQuantiteReglementee: false,
                qteMaxParCommande: 5,
                qteMinParCommande: 1,
                urlSiExterne: 0,
                messageBoutonSiExterne: 'Please enter',
                afficherAvis: true,
                affichagePublic: true,
                indicationEtatStock: true,
                relationavecGestionSock: true,
                etatPublicationProduit: "Published",
                refProduitServiceSolPropre2: ["related_product_1", "related_product_2"],
                caracteristiques: [],
                distinctions: [],
                contenuMedia: [],
                socialMedia: [],
                acteur: '1'
              }, {
                id: "1",
                categorieProduit: "Cleaning",
                typeProduit: "Household",
                venteSeule: true,
                typeVente: "Online",
                tarifSpecial: "Discounted",
                typeTarif: "Regular",
                produitVirtuel: false,
                produitTelechargeable: false,
                event: true,
                dateDebutEvent: new Date("2024-02-01"),
                dateFinEvent: new Date("2024-02-10"),
                slogan: "Keep it Clean!",
                translations: {
                  language: '',
                  designationProduit: "Premium Cleaning Solution",
                  slogan: 'string',
                  descriptifProduit: 'Premium Cleaning Solution to perfectly clean you house',
                  messageAachat: 'you have to provide',
                  tags: [],
                },
                imageProduit: "assets/images/product.jpg",
                madeInProduit: "USA",
                productTAG: "Premium",
                unityProduit: "Bottle",
                affichageTarif: "code_8382",
                tarifUHTpardefaut: 19,
                monnaiePays: "USD",
                tVApardefaut: 7.5,
                paysTVAdefaut: "United States",
                ordreAffichageProduit: 1,
                messageAfficherAchat: "Order Now for a Sparkling Home!",
                commandeQuantiteReglementee: false,
                qteMaxParCommande: 5,
                qteMinParCommande: 1,
                urlSiExterne: 0,
                messageBoutonSiExterne: 'Please enter',
                afficherAvis: true,
                affichagePublic: true,
                indicationEtatStock: true,
                relationavecGestionSock: true,
                etatPublicationProduit: "Published",
                refProduitServiceSolPropre2: ["related_product_1", "related_product_2"],
                caracteristiques: [],
                distinctions: [],
                contenuMedia: [],
                socialMedia: [],
                acteur: '1'
              },
              // Add more products as needed...
            ],
          },
          {
            referenceCataloge: "CAT-2024-001",
            classCatalogue: "Household",
            typeDestinatiare: "Customers",
            translations: {
              titreCatalogue: "TOMOBILE",
              descriptionCatalogue: "Explore our latest cleaning products for a fresh and clean home.",
            },
            image: "spring_cleaning_catalogue.jpg",
            sloganCatalogue: "Revitalize Your Home This Spring!",
            editionCatalogue: "2024 Edition",
            dateEtPeriodeDeCatalogue: new Date("2024-03-01"),
            documentAssocie: "catalogue_document.pdf",
            etatPublicationCatalogue: "Published",
            produiService: [
              // You can use the previously defined 'sampleProduit' object or create more products here.
              {
                id: "1",
                categorieProduit: "Cleaning",
                typeProduit: "Household",
                venteSeule: true,
                typeVente: "Online",
                tarifSpecial: "Discounted",
                typeTarif: "Regular",
                produitVirtuel: false,
                produitTelechargeable: false,
                event: true,
                dateDebutEvent: new Date("2024-02-01"),
                dateFinEvent: new Date("2024-02-10"),
                slogan: "Keep it Clean!",
                translations: {
                  language: '',
                  designationProduit: "Premium Cleaning Solution",
                  slogan: 'string',
                  descriptifProduit: 'Premium Cleaning Solution to perfectly clean you house',
                  messageAachat: 'you have to provide',
                  tags: [],
                },
                imageProduit: "assets/images/product.jpg",
                madeInProduit: "USA",
                productTAG: "Premium",
                unityProduit: "Bottle",
                affichageTarif: "code_8382",
                tarifUHTpardefaut: 19,
                monnaiePays: "USD",
                tVApardefaut: 7.5,
                paysTVAdefaut: "United States",
                ordreAffichageProduit: 1,
                messageAfficherAchat: "Order Now for a Sparkling Home!",
                commandeQuantiteReglementee: false,
                qteMaxParCommande: 5,
                qteMinParCommande: 1,
                urlSiExterne: 0,
                messageBoutonSiExterne: 'Please enter',
                afficherAvis: true,
                affichagePublic: true,
                indicationEtatStock: true,
                relationavecGestionSock: true,
                etatPublicationProduit: "Published",
                refProduitServiceSolPropre2: ["related_product_1", "related_product_2"],
                caracteristiques: [],
                distinctions: [],
                contenuMedia: [],
                socialMedia: [],
                acteur: '1'
              }, {
                id: "1",
                categorieProduit: "Cleaning",
                typeProduit: "Household",
                venteSeule: true,
                typeVente: "Online",
                tarifSpecial: "Discounted",
                typeTarif: "Regular",
                produitVirtuel: false,
                produitTelechargeable: false,
                event: true,
                dateDebutEvent: new Date("2024-02-01"),
                dateFinEvent: new Date("2024-02-10"),
                slogan: "Keep it Clean!",
                translations: {
                  language: '',
                  designationProduit: "Premium Cleaning Solution",
                  slogan: 'string',
                  descriptifProduit: 'Premium Cleaning Solution to perfectly clean you house',
                  messageAachat: 'you have to provide',
                  tags: [],
                },
                imageProduit: "assets/images/product.jpg",
                madeInProduit: "USA",
                productTAG: "Premium",
                unityProduit: "Bottle",
                affichageTarif: "code_8382",
                tarifUHTpardefaut: 19,
                monnaiePays: "USD",
                tVApardefaut: 7.5,
                paysTVAdefaut: "United States",
                ordreAffichageProduit: 1,
                messageAfficherAchat: "Order Now for a Sparkling Home!",
                commandeQuantiteReglementee: false,
                qteMaxParCommande: 5,
                qteMinParCommande: 1,
                urlSiExterne: 0,
                messageBoutonSiExterne: 'Please enter',
                afficherAvis: true,
                affichagePublic: true,
                indicationEtatStock: true,
                relationavecGestionSock: true,
                etatPublicationProduit: "Published",
                refProduitServiceSolPropre2: ["related_product_1", "related_product_2"],
                caracteristiques: [],
                distinctions: [],
                contenuMedia: [],
                socialMedia: [],
                acteur: '1'
              }, {
                id: "1",
                categorieProduit: "Cleaning",
                typeProduit: "Household",
                venteSeule: true,
                typeVente: "Online",
                tarifSpecial: "Discounted",
                typeTarif: "Regular",
                produitVirtuel: false,
                produitTelechargeable: false,
                event: true,
                dateDebutEvent: new Date("2024-02-01"),
                dateFinEvent: new Date("2024-02-10"),
                slogan: "Keep it Clean!",
                translations: {
                  language: '',
                  designationProduit: "Premium Cleaning Solution",
                  slogan: 'string',
                  descriptifProduit: 'Premium Cleaning Solution to perfectly clean you house',
                  messageAachat: 'you have to provide',
                  tags: [],
                },
                imageProduit: "assets/images/product.jpg",
                madeInProduit: "USA",
                productTAG: "Premium",
                unityProduit: "Bottle",
                affichageTarif: "code_8382",
                tarifUHTpardefaut: 19,
                monnaiePays: "USD",
                tVApardefaut: 7.5,
                paysTVAdefaut: "United States",
                ordreAffichageProduit: 1,
                messageAfficherAchat: "Order Now for a Sparkling Home!",
                commandeQuantiteReglementee: false,
                qteMaxParCommande: 5,
                qteMinParCommande: 1,
                urlSiExterne: 0,
                messageBoutonSiExterne: 'Please enter',
                afficherAvis: true,
                affichagePublic: true,
                indicationEtatStock: true,
                relationavecGestionSock: true,
                etatPublicationProduit: "Published",
                refProduitServiceSolPropre2: ["related_product_1", "related_product_2"],
                caracteristiques: [],
                distinctions: [],
                contenuMedia: [],
                socialMedia: [],
                acteur: '1'
              },
              // Add more products as needed...
            ],
          },
          {
            referenceCataloge: "CAT-2024-001",
            classCatalogue: "INFORMATIQUE",
            typeDestinatiare: "Customers",
            translations: {
              titreCatalogue: "Spring Cleaning Specials",
              descriptionCatalogue: "Explore our latest cleaning products for a fresh and clean home.",
            },
            image: "spring_cleaning_catalogue.jpg",
            sloganCatalogue: "Revitalize Your Home This Spring!",
            editionCatalogue: "2024 Edition",
            dateEtPeriodeDeCatalogue: new Date("2024-03-01"),
            documentAssocie: "catalogue_document.pdf",
            etatPublicationCatalogue: "Published",
            produiService: [
              // You can use the previously defined 'sampleProduit' object or create more products here.
              {
                id: "1",
                categorieProduit: "Cleaning",
                typeProduit: "Household",
                venteSeule: true,
                typeVente: "Online",
                tarifSpecial: "Discounted",
                typeTarif: "Regular",
                produitVirtuel: false,
                produitTelechargeable: false,
                event: true,
                dateDebutEvent: new Date("2024-02-01"),
                dateFinEvent: new Date("2024-02-10"),
                slogan: "Keep it Clean!",
                translations: {
                  language: '',
                  designationProduit: "Premium Cleaning Solution",
                  slogan: 'string',
                  descriptifProduit: 'Premium Cleaning Solution to perfectly clean you house',
                  messageAachat: 'you have to provide',
                  tags: [],
                },
                imageProduit: "assets/images/product.jpg",
                madeInProduit: "USA",
                productTAG: "Premium",
                unityProduit: "Bottle",
                affichageTarif: "code_8382",
                tarifUHTpardefaut: 19,
                monnaiePays: "USD",
                tVApardefaut: 7.5,
                paysTVAdefaut: "United States",
                ordreAffichageProduit: 1,
                messageAfficherAchat: "Order Now for a Sparkling Home!",
                commandeQuantiteReglementee: false,
                qteMaxParCommande: 5,
                qteMinParCommande: 1,
                urlSiExterne: 0,
                messageBoutonSiExterne: 'Please enter',
                afficherAvis: true,
                affichagePublic: true,
                indicationEtatStock: true,
                relationavecGestionSock: true,
                etatPublicationProduit: "Published",
                refProduitServiceSolPropre2: ["related_product_1", "related_product_2"],
                caracteristiques: [],
                distinctions: [],
                contenuMedia: [],
                socialMedia: [],
                acteur: '1'
              }, {
                id: "1",
                categorieProduit: "Cleaning",
                typeProduit: "Household",
                venteSeule: true,
                typeVente: "Online",
                tarifSpecial: "Discounted",
                typeTarif: "Regular",
                produitVirtuel: false,
                produitTelechargeable: false,
                event: true,
                dateDebutEvent: new Date("2024-02-01"),
                dateFinEvent: new Date("2024-02-10"),
                slogan: "Keep it Clean!",
                translations: {
                  language: '',
                  designationProduit: "Premium Cleaning Solution",
                  slogan: 'string',
                  descriptifProduit: 'Premium Cleaning Solution to perfectly clean you house',
                  messageAachat: 'you have to provide',
                  tags: [],
                },
                imageProduit: "assets/images/product.jpg",
                madeInProduit: "USA",
                productTAG: "Premium",
                unityProduit: "Bottle",
                affichageTarif: "code_8382",
                tarifUHTpardefaut: 19,
                monnaiePays: "USD",
                tVApardefaut: 7.5,
                paysTVAdefaut: "United States",
                ordreAffichageProduit: 1,
                messageAfficherAchat: "Order Now for a Sparkling Home!",
                commandeQuantiteReglementee: false,
                qteMaxParCommande: 5,
                qteMinParCommande: 1,
                urlSiExterne: 0,
                messageBoutonSiExterne: 'Please enter',
                afficherAvis: true,
                affichagePublic: true,
                indicationEtatStock: true,
                relationavecGestionSock: true,
                etatPublicationProduit: "Published",
                refProduitServiceSolPropre2: ["related_product_1", "related_product_2"],
                caracteristiques: [],
                distinctions: [],
                contenuMedia: [],
                socialMedia: [],
                acteur: '1'
              }, {
                id: "1",
                categorieProduit: "Cleaning",
                typeProduit: "Household",
                venteSeule: true,
                typeVente: "Online",
                tarifSpecial: "Discounted",
                typeTarif: "Regular",
                produitVirtuel: false,
                produitTelechargeable: false,
                event: true,
                dateDebutEvent: new Date("2024-02-01"),
                dateFinEvent: new Date("2024-02-10"),
                slogan: "Keep it Clean!",
                translations: {
                  language: '',
                  designationProduit: "Premium Cleaning Solution",
                  slogan: 'string',
                  descriptifProduit: 'Premium Cleaning Solution to perfectly clean you house',
                  messageAachat: 'you have to provide',
                  tags: [],
                },
                imageProduit: "assets/images/product.jpg",
                madeInProduit: "USA",
                productTAG: "Premium",
                unityProduit: "Bottle",
                affichageTarif: "code_8382",
                tarifUHTpardefaut: 19,
                monnaiePays: "USD",
                tVApardefaut: 7.5,
                paysTVAdefaut: "United States",
                ordreAffichageProduit: 1,
                messageAfficherAchat: "Order Now for a Sparkling Home!",
                commandeQuantiteReglementee: false,
                qteMaxParCommande: 5,
                qteMinParCommande: 1,
                urlSiExterne: 0,
                messageBoutonSiExterne: 'Please enter',
                afficherAvis: true,
                affichagePublic: true,
                indicationEtatStock: true,
                relationavecGestionSock: true,
                etatPublicationProduit: "Published",
                refProduitServiceSolPropre2: ["related_product_1", "related_product_2"],
                caracteristiques: [],
                distinctions: [],
                contenuMedia: [],
                socialMedia: [],
                acteur: '1'
              },
              // Add more products as needed...
            ],
          }
        ],
        enregistrementLegale: [
          {
            taconomieEnregistrementLegal: "Some Economy Type",
            paysEnregistrement: "Some Country",
            dateEnregistrement: "2022-02-05",
            labelEnregistrement: "Some Label",
            numeroEnregistrement: "123456",
            acteur: '1'
          },
          {
            taconomieEnregistrementLegal: "Some Economy Type",
            paysEnregistrement: "Some Country",
            dateEnregistrement: "2022-02-05",
            labelEnregistrement: "Some Label",
            numeroEnregistrement: "123456",
            acteur: '1'
          },
          {
            taconomieEnregistrementLegal: "Some Economy Type",
            paysEnregistrement: "Some Country",
            dateEnregistrement: "2022-02-05",
            labelEnregistrement: "Some Label",
            numeroEnregistrement: "123456",
            acteur: '1'
          }
        ],
        tags: [
          {
            id: "123456789",
            etatDePublication: "published",
            etatobjet: "active",
            refExpression: "REF-123",
            langue: "French",
            translations: { language: "English", expression: "Hello" },
            dateEnregistrement: new Date("2023-01-15"),
            dateValidation: new Date("2023-01-20"),
            datePublication: new Date("2023-01-25"),
            motscle: "programming",
            acteur: "OpenAI"
          },
          {
            id: "123456789",
            etatDePublication: "published",
            etatobjet: "active",
            refExpression: "REF-123",
            langue: "French",
            translations: { language: "English", expression: "Hello word" },
            dateEnregistrement: new Date("2023-01-15"),
            dateValidation: new Date("2023-01-20"),
            datePublication: new Date("2023-01-25"),
            motscle: "programming",
            acteur: "OpenAI"
          },
          {
            id: "123456789",
            etatDePublication: "published",
            etatobjet: "active",
            refExpression: "REF-123",
            langue: "French",
            translations: { language: "English", expression: "francais" },
            dateEnregistrement: new Date("2023-01-15"),
            dateValidation: new Date("2023-01-20"),
            datePublication: new Date("2023-01-25"),
            motscle: "programming",
            acteur: "OpenAI"
          },
          {
            id: "123456789",
            etatDePublication: "published",
            etatobjet: "active",
            refExpression: "REF-123",
            langue: "French",
            translations: { language: "English", expression: "arab" },
            dateEnregistrement: new Date("2023-01-15"),
            dateValidation: new Date("2023-01-20"),
            datePublication: new Date("2023-01-25"),
            motscle: "programming",
            acteur: "OpenAI"
          },
          {
            id: "123456789",
            etatDePublication: "published",
            etatobjet: "active",
            refExpression: "REF-123",
            langue: "French",
            translations: { language: "English", expression: "english" },
            dateEnregistrement: new Date("2023-01-15"),
            dateValidation: new Date("2023-01-20"),
            datePublication: new Date("2023-01-25"),
            motscle: "programming",
            acteur: "OpenAI"
          },
          {
            id: "123456789",
            etatDePublication: "published",
            etatobjet: "active",
            refExpression: "REF-123",
            langue: "French",
            translations: { language: "English", expression: "spanish" },
            dateEnregistrement: new Date("2023-01-15"),
            dateValidation: new Date("2023-01-20"),
            datePublication: new Date("2023-01-25"),
            motscle: "programming",
            acteur: "OpenAI"
          },
          {
            id: "123456789",
            etatDePublication: "published",
            etatobjet: "active",
            refExpression: "REF-123",
            langue: "French",
            translations: { language: "English", expression: "informatique" },
            dateEnregistrement: new Date("2023-01-15"),
            dateValidation: new Date("2023-01-20"),
            datePublication: new Date("2023-01-25"),
            motscle: "programming",
            acteur: "OpenAI"
          },
          {
            id: "123456789",
            etatDePublication: "published",
            etatobjet: "active",
            refExpression: "REF-123",
            langue: "French",
            translations: { language: "English", expression: "it" },
            dateEnregistrement: new Date("2023-01-15"),
            dateValidation: new Date("2023-01-20"),
            datePublication: new Date("2023-01-25"),
            motscle: "programming",
            acteur: "OpenAI"
          },
          {
            id: "123456789",
            etatDePublication: "published",
            etatobjet: "active",
            refExpression: "REF-123",
            langue: "French",
            translations: { language: "English", expression: "devloppment" },
            dateEnregistrement: new Date("2023-01-15"),
            dateValidation: new Date("2023-01-20"),
            datePublication: new Date("2023-01-25"),
            motscle: "programming",
            acteur: "OpenAI"
          },
          {
            id: "123456789",
            etatDePublication: "published",
            etatobjet: "active",
            refExpression: "REF-123",
            langue: "French",
            translations: { language: "English", expression: "artificial inteligent" },
            dateEnregistrement: new Date("2023-01-15"),
            dateValidation: new Date("2023-01-20"),
            datePublication: new Date("2023-01-25"),
            motscle: "programming",
            acteur: "OpenAI"
          },
          {
            id: "123456789",
            etatDePublication: "published",
            etatobjet: "active",
            refExpression: "REF-123",
            langue: "French",
            translations: { language: "English", expression: "team" },
            dateEnregistrement: new Date("2023-01-15"),
            dateValidation: new Date("2023-01-20"),
            datePublication: new Date("2023-01-25"),
            motscle: "programming",
            acteur: "OpenAI"
          },
          {
            id: "123456789",
            etatDePublication: "published",
            etatobjet: "active",
            refExpression: "REF-123",
            langue: "French",
            translations: { language: "English", expression: "team work" },
            dateEnregistrement: new Date("2023-01-15"),
            dateValidation: new Date("2023-01-20"),
            datePublication: new Date("2023-01-25"),
            motscle: "programming",
            acteur: "OpenAI"
          },
          {
            id: "123456789",
            etatDePublication: "published",
            etatobjet: "active",
            refExpression: "REF-123",
            langue: "French",
            translations: { language: "English", expression: "angular" },
            dateEnregistrement: new Date("2023-01-15"),
            dateValidation: new Date("2023-01-20"),
            datePublication: new Date("2023-01-25"),
            motscle: "programming",
            acteur: "OpenAI"
          },
          {
            id: "123456789",
            etatDePublication: "published",
            etatobjet: "active",
            refExpression: "REF-123",
            langue: "French",
            translations: { language: "English", expression: "angular team" },
            dateEnregistrement: new Date("2023-01-15"),
            dateValidation: new Date("2023-01-20"),
            datePublication: new Date("2023-01-25"),
            motscle: "programming",
            acteur: "OpenAI"
          },

          {
            id: "123456789",
            etatDePublication: "published",
            etatobjet: "active",
            refExpression: "REF-123",
            langue: "French",
            translations: { language: "English", expression: "smart automation" },
            dateEnregistrement: new Date("2023-01-15"),
            dateValidation: new Date("2023-01-20"),
            datePublication: new Date("2023-01-25"),
            motscle: "programming",
            acteur: "OpenAI"
          },
        ],
        agendaEvent: [
          {
            id: "1",
            etatEvent: "active",
            etatobjet: "en_cours",
            referenceEvent: "REF123",
            categorieEvent: "conference",
            presentielEnligne: "presentiel",
            translations: {
              language: "en",
              designation: "Here's what we announced. Here's what we announced",
              slogan: "Event Slogan",
              description: "MacBook Pro blasts forward with the M3, M3 Pro, and M3 Max chips. Built on 3‑nanometer technology and featuring an all-new GPU architecture, they’re the most advanced chips ever built for a personal computer. And each one brings more pro performance and capability. And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability"
            },
            images: ["assets/images/event1.jpg", "assets/images/event2.jpg", "assets/images/event3.jpg", "assets/images/event4.jpg", 'assets/images/longpub2.jpg'],
            dateDebut: new Date("01-01-2023"),
            dateFin: new Date("2-11-2029"),
            multiSessions: true,
            multisites: false,
            accessibilite: "accessible",
            avecDistribution: true,
            RecompensesPrix: false,
            reservationObligatoire: true,
            relationInterEventParent: "parentEventID",
            relationInterEventAssocie: ["relatedEventID1", "relatedEventID2"],
            programmeEvent: [
              {
                _id: "1",
                etatobjet: "active",
                categorieProgramme: "Workshop",
                translations: {
                  language: "en",
                  designation: "Introduction to Angular f kiinoooooooooooooo ooooooooo oooooooooo oooooooo ooooooooo oooo oooooov",
                  description: "This workshop provides an overview of Angular framework. This workshop provides an overview of Angular framework. This workshop provides an overview of Angular framework.",
                },
                dateHeureDebut: new Date("2022-02-10T13:30:00"),
                dateHeureFin: new Date("2022-02-10T15:00:00"),
                accesibilite: true,
                programmeEventParent: "",
                programmeEventChildren: [
                  {
                    _id: "gh345",
                    etatobjet: "active",
                    categorieProgramme: "Workshop",
                    translations: {
                      language: "en",
                      designation: "Introduction to Angular",
                      description: "This workshop provides an overview of Angular framework.",
                    },
                    dateHeureDebut: new Date("2024-02-10T13:30:00"),
                    dateHeureFin: new Date("2024-02-10T15:00:00"),
                    accesibilite: true,
                    programmeEventParent: "1",
                    programmeEventChildren: [
                      {
                        _id: "734676234",
                        etatobjet: "active",
                        categorieProgramme: "Workshop",
                        translations: {
                          language: "en",
                          designation: "Introduction to Angular",
                          description: "This workshop provides an overview of Angular framework.",
                        },
                        dateHeureDebut: new Date("2024-02-10T13:30:00"),
                        dateHeureFin: new Date("2024-02-10T15:00:00"),
                        accesibilite: true,
                        programmeEventParent: "1",
                        programmeEventChildren: [],
                        agendaEvent: "agendaEventID",
                        lieuConcerne: [],
                        protagonistePotentiel: [],
                      },
                      {
                        _id: "734676234",
                        etatobjet: "active",
                        categorieProgramme: "Workshop",
                        translations: {
                          language: "en",
                          designation: "Introduction to Angular",
                          description: "This workshop provides an overview of Angular framework.",
                        },
                        dateHeureDebut: new Date("2024-02-10T13:30:00"),
                        dateHeureFin: new Date("2024-02-10T15:00:00"),
                        accesibilite: true,
                        programmeEventParent: "1",
                        programmeEventChildren: [],
                        agendaEvent: "agendaEventID",
                        lieuConcerne: [],
                        protagonistePotentiel: [],
                      },
                    ],
                    agendaEvent: "agendaEventID",
                    lieuConcerne: [],
                    protagonistePotentiel: [],
                  },
                  {
                    _id: "1746476476476476",
                    etatobjet: "active",
                    categorieProgramme: "Workshop",
                    translations: {
                      language: "en",
                      designation: "Introduction to Angular",
                      description: "This workshop provides an overview of Angular framework.",
                    },
                    dateHeureDebut: new Date("2024-02-10T13:30:00"),
                    dateHeureFin: new Date("2024-02-10T15:00:00"),
                    accesibilite: true,
                    programmeEventParent: "1",
                    programmeEventChildren: [],
                    agendaEvent: "agendaEventID",
                    lieuConcerne: [],
                    protagonistePotentiel: [],
                  },
                ],
                agendaEvent: "agendaEventID",
                lieuConcerne: [
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: false,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -5.8129,
                      latitude: 45.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 2 asdfasdfasf",
                    interneExterne: false,
                    personneAContacte: "Jane Smith hamid",
                    telPersonne: "+987654321",
                    emailPersonne: "jane@example.com",
                    RemplacementLienInitial: true,
                    raisonRemplacement: "Replacement reason",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 2",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -5.7584,
                      latitude: 37.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -6.9000,
                      latitude: 38.8833,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },

                ],
                protagonistePotentiel: [
                  {
                    taxoProtagonist: "Some Taxonomy",
                    translations: {
                      language: "en",
                      label: "jane doe",
                      description: "Description of the protagonist"
                    },
                    photo: 'assets/images/profile1.png',
                    ordreAffichage: "1",
                    ProtagonsiteInitiateurOuFondateur: true,
                    etatProtagonsit: "active"
                  },
                  {
                    taxoProtagonist: "Some Taxonomy",
                    translations: {
                      language: "en",
                      label: "jasmine jhon",
                      description: "Description of the protagonist"
                    },
                    photo: 'assets/images/profile2.png',
                    ordreAffichage: "2",
                    ProtagonsiteInitiateurOuFondateur: true,
                    etatProtagonsit: "active"
                  }
                ],
              },
              {
                _id: "3451",
                etatobjet: "active",
                categorieProgramme: "Workshop",
                translations: {
                  language: "en",
                  designation: "Introduction to Angular",
                  description: "This workshop provides an overview of Angular framework.",
                },
                dateHeureDebut: new Date("2024-02-10T13:30:00"),
                dateHeureFin: new Date("2024-02-10T15:00:00"),
                accesibilite: true,
                programmeEventParent: "parentEventID",
                programmeEventChildren: [],
                agendaEvent: "agendaEventID",
                lieuConcerne: [],
                protagonistePotentiel: [],
              },
              {
                _id: "3asd451",
                etatobjet: "active",
                categorieProgramme: "Workshop",
                translations: {
                  language: "en",
                  designation: "Introduction to Angular",
                  description: "This workshop provides an overview of Angular framework.",
                },
                dateHeureDebut: new Date("2024-02-10T13:30:00"),
                dateHeureFin: new Date("2024-02-10T15:00:00"),
                accesibilite: true,
                programmeEventParent: "parentEventID",
                programmeEventChildren: [],
                agendaEvent: "agendaEventID",
                lieuConcerne: [],
                protagonistePotentiel: [],
              },
              {
                _id: "34asd53451",
                etatobjet: "active",
                categorieProgramme: "Workshop",
                translations: {
                  language: "en",
                  designation: "Introduction to Angular",
                  description: "This workshop provides an overview of Angular framework.",
                },
                dateHeureDebut: new Date("2024-02-10T13:30:00"),
                dateHeureFin: new Date("2024-02-10T15:00:00"),
                accesibilite: true,
                programmeEventParent: "parentEventID",
                programmeEventChildren: [],
                agendaEvent: "agendaEventID",
                lieuConcerne: [],
                protagonistePotentiel: [],
              },
            ],
            instanceElementAssocie: [
              {
                id: "1",
                etatobjet: "active",
                phaseEvenement: "phase1",
                translations: {
                  language: "en",
                  designation: "Associated Element 1",
                  description: "Description of Associated Element 1"
                },
                agendaEvent: '1',
                lieuConcerne: [
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -5.8129,
                      latitude: 35.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 2",
                    interneExterne: false,
                    personneAContacte: "Jane Smith",
                    telPersonne: "+987654321",
                    emailPersonne: "jane@example.com",
                    RemplacementLienInitial: true,
                    raisonRemplacement: "Replacement reason",
                    EtatEtulisation: false,
                    commentaireInterne: "This is a comment about Location 2",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -5.7584,
                      latitude: 35.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -6.9000,
                      latitude: 32.8833,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                ],
                objetAssocie: ["Object 1", "Object 2"],
                referenceDocumentsAppuisPreuve: ["Document 1", "Document 2"],
                createdAt: new Date("2024-02-07T10:00:00"),
                updatedAt: new Date("2024-02-07T12:00:00")
              },
              {
                id: "1",
                etatobjet: "active",
                phaseEvenement: "phase1",
                translations: {
                  language: "en",
                  designation: "Associated Element 1",
                  description: "Description of Associated Element 1"
                },
                agendaEvent: '1',
                lieuConcerne: [
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -2.8129,
                      latitude: 35.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 2",
                    interneExterne: false,
                    personneAContacte: "Jane Smith",
                    telPersonne: "+987654321",
                    emailPersonne: "jane@example.com",
                    RemplacementLienInitial: true,
                    raisonRemplacement: "Replacement reason",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 2",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -2.7584,
                      latitude: 35.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -4.9000,
                      latitude: 32.8833,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                ],
                objetAssocie: ["Object 1", "Object 2"],
                referenceDocumentsAppuisPreuve: ["Document 1", "Document 2"],
                createdAt: new Date("2024-02-07T10:00:00"),
                updatedAt: new Date("2024-02-07T12:00:00")
              },
              {
                id: "1",
                etatobjet: "active",
                phaseEvenement: "phase1",
                translations: {
                  language: "en",
                  designation: "Associated Element 1",
                  description: "Description of Associated Element 1"
                },
                agendaEvent: '1',
                lieuConcerne: [
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -5.8129,
                      latitude: 45.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 2",
                    interneExterne: false,
                    personneAContacte: "Jane Smith",
                    telPersonne: "+987654321",
                    emailPersonne: "jane@example.com",
                    RemplacementLienInitial: true,
                    raisonRemplacement: "Replacement reason",
                    EtatEtulisation: false,
                    commentaireInterne: "This is a comment about Location 2",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -5.7584,
                      latitude: 37.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -6.9000,
                      latitude: 38.8833,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                ],
                objetAssocie: ["Object 1", "Object 2"],
                referenceDocumentsAppuisPreuve: ["Document 1", "Document 2"],
                createdAt: new Date("2024-02-07T10:00:00"),
                updatedAt: new Date("2024-02-07T12:00:00")
              },
            ],
            probleme: ["issue1", "issue2"],
            reservation: ["reservation1", "reservation2"],
            faq: ["faq1", "faq2"],
            produitServices: ["product1", "product2"],
            indicationTarifaire: ["priceIndication1", "priceIndication2"],
            protagonistePotentiel: ["participant1", "participant2"],
            recompence: ["reward1", "reward2"],
            rapportBilan: ["report1", "report2"],
            echangeCommunication: ["communication1", "communication2"],
            instructions: ["instruction1", "instruction2"],
            etatDeObjet: ["objectState1", "objectState2"],
            statistiquesDirectes: ["statistic1", "statistic2"],
            conditions: ["condition1", "condition2"],
            instanceCarateristique: ["characteristic1", "characteristic2"],
            acteur: '',
          },
          {
            id: "1",
            etatEvent: "active",
            etatobjet: "en_cours",
            referenceEvent: "REF123",
            categorieEvent: "conference",
            presentielEnligne: "presentiel",
            translations: {
              language: "en",
              designation: "Here's what we announced. Here's what we announced",
              slogan: "Event Slogan",
              description: "MacBook Pro blasts forward with the M3, M3 Pro, and M3 Max chips. Built on 3‑nanometer technology and featuring an all-new GPU architecture, they’re the most advanced chips ever built for a personal computer. And each one brings more pro performance and capability. And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability"
            },
            images: ["assets/images/event1.jpg", "assets/images/event2.jpg", "assets/images/event3.jpg", "assets/images/event4.jpg"],
            dateDebut: new Date("01-01-2023"),
            dateFin: new Date("2-11-2029"),
            multiSessions: true,
            multisites: false,
            accessibilite: "accessible",
            avecDistribution: true,
            RecompensesPrix: false,
            reservationObligatoire: true,
            relationInterEventParent: "parentEventID",
            relationInterEventAssocie: ["relatedEventID1", "relatedEventID2"],
            programmeEvent: [],
            instanceElementAssocie: [
              {
                id: "1",
                etatobjet: "active",
                phaseEvenement: "phase1",
                translations: {
                  language: "en",
                  designation: "Associated Element 1",
                  description: "Description of Associated Element 1"
                },
                agendaEvent: '1',
                lieuConcerne: [
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -5.8129,
                      latitude: 35.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 2",
                    interneExterne: false,
                    personneAContacte: "Jane Smith",
                    telPersonne: "+987654321",
                    emailPersonne: "jane@example.com",
                    RemplacementLienInitial: true,
                    raisonRemplacement: "Replacement reason",
                    EtatEtulisation: false,
                    commentaireInterne: "This is a comment about Location 2",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -5.7584,
                      latitude: 35.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -6.9000,
                      latitude: 32.8833,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                ],
                objetAssocie: ["Object 1", "Object 2"],
                referenceDocumentsAppuisPreuve: ["Document 1", "Document 2"],
                createdAt: new Date("2024-02-07T10:00:00"),
                updatedAt: new Date("2024-02-07T12:00:00")
              },
              {
                id: "1",
                etatobjet: "active",
                phaseEvenement: "phase1",
                translations: {
                  language: "en",
                  designation: "Associated Element 1",
                  description: "Description of Associated Element 1"
                },
                agendaEvent: '1',
                lieuConcerne: [
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -2.8129,
                      latitude: 35.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 2",
                    interneExterne: false,
                    personneAContacte: "Jane Smith",
                    telPersonne: "+987654321",
                    emailPersonne: "jane@example.com",
                    RemplacementLienInitial: true,
                    raisonRemplacement: "Replacement reason",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 2",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -2.7584,
                      latitude: 35.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -4.9000,
                      latitude: 32.8833,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                ],
                objetAssocie: ["Object 1", "Object 2"],
                referenceDocumentsAppuisPreuve: ["Document 1", "Document 2"],
                createdAt: new Date("2024-02-07T10:00:00"),
                updatedAt: new Date("2024-02-07T12:00:00")
              },
              {
                id: "1",
                etatobjet: "active",
                phaseEvenement: "phase1",
                translations: {
                  language: "en",
                  designation: "Associated Element 1",
                  description: "Description of Associated Element 1"
                },
                agendaEvent: '1',
                lieuConcerne: [
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -5.8129,
                      latitude: 45.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 2",
                    interneExterne: false,
                    personneAContacte: "Jane Smith",
                    telPersonne: "+987654321",
                    emailPersonne: "jane@example.com",
                    RemplacementLienInitial: true,
                    raisonRemplacement: "Replacement reason",
                    EtatEtulisation: false,
                    commentaireInterne: "This is a comment about Location 2",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -5.7584,
                      latitude: 37.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -6.9000,
                      latitude: 38.8833,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                ],
                objetAssocie: ["Object 1", "Object 2"],
                referenceDocumentsAppuisPreuve: ["Document 1", "Document 2"],
                createdAt: new Date("2024-02-07T10:00:00"),
                updatedAt: new Date("2024-02-07T12:00:00")
              },
            ],
            probleme: ["issue1", "issue2"],
            reservation: ["reservation1", "reservation2"],
            faq: ["faq1", "faq2"],
            produitServices: ["product1", "product2"],
            indicationTarifaire: ["priceIndication1", "priceIndication2"],
            protagonistePotentiel: ["participant1", "participant2"],
            recompence: ["reward1", "reward2"],
            rapportBilan: ["report1", "report2"],
            echangeCommunication: ["communication1", "communication2"],
            instructions: ["instruction1", "instruction2"],
            etatDeObjet: ["objectState1", "objectState2"],
            statistiquesDirectes: ["statistic1", "statistic2"],
            conditions: ["condition1", "condition2"],
            instanceCarateristique: ["characteristic1", "characteristic2"],
            acteur: ''
          },
          {
            id: "1",
            etatEvent: "active",
            etatobjet: "en_cours",
            referenceEvent: "REF123",
            categorieEvent: "conference",
            presentielEnligne: "presentiel",
            translations: {
              language: "en",
              designation: "Here's what we announced. Here's what we announced",
              slogan: "Event Slogan",
              description: "MacBook Pro blasts forward with the M3, M3 Pro, and M3 Max chips. Built on 3‑nanometer technology and featuring an all-new GPU architecture, they’re the most advanced chips ever built for a personal computer. And each one brings more pro performance and capability. And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability"
            },
            images: ["assets/images/event1.jpg", "assets/images/event2.jpg", "assets/images/event3.jpg", "assets/images/event4.jpg"],
            dateDebut: new Date("01-01-2023"),
            dateFin: new Date("2-11-2029"),
            multiSessions: true,
            multisites: false,
            accessibilite: "accessible",
            avecDistribution: true,
            RecompensesPrix: false,
            reservationObligatoire: true,
            relationInterEventParent: "parentEventID",
            relationInterEventAssocie: ["relatedEventID1", "relatedEventID2"],
            programmeEvent: [],
            instanceElementAssocie: [],
            probleme: ["issue1", "issue2"],
            reservation: ["reservation1", "reservation2"],
            faq: ["faq1", "faq2"],
            produitServices: ["product1", "product2"],
            indicationTarifaire: ["priceIndication1", "priceIndication2"],
            protagonistePotentiel: ["participant1", "participant2"],
            recompence: ["reward1", "reward2"],
            rapportBilan: ["report1", "report2"],
            echangeCommunication: ["communication1", "communication2"],
            instructions: ["instruction1", "instruction2"],
            etatDeObjet: ["objectState1", "objectState2"],
            statistiquesDirectes: ["statistic1", "statistic2"],
            conditions: ["condition1", "condition2"],
            instanceCarateristique: ["characteristic1", "characteristic2"],
            acteur: '',

          },
          {
            id: "1",
            etatEvent: "active",
            etatobjet: "en_cours",
            referenceEvent: "REF123",
            categorieEvent: "conference",
            presentielEnligne: "presentiel",
            translations: {
              language: "en",
              designation: "Here's what we announced. Here's what we announced",
              slogan: "Event Slogan",
              description: "MacBook Pro blasts forward with the M3, M3 Pro, and M3 Max chips. Built on 3‑nanometer technology and featuring an all-new GPU architecture, they’re the most advanced chips ever built for a personal computer. And each one brings more pro performance and capability. And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability"
            },
            images: ["assets/images/event1.jpg", "assets/images/event2.jpg", "assets/images/event3.jpg", "assets/images/event4.jpg"],
            dateDebut: new Date("01-01-2023"),
            dateFin: new Date("2-11-2029"),
            multiSessions: true,
            multisites: false,
            accessibilite: "accessible",
            avecDistribution: true,
            RecompensesPrix: false,
            reservationObligatoire: true,
            relationInterEventParent: "parentEventID",
            relationInterEventAssocie: ["relatedEventID1", "relatedEventID2"],
            programmeEvent: [],
            instanceElementAssocie: [],
            probleme: ["issue1", "issue2"],
            reservation: ["reservation1", "reservation2"],
            faq: ["faq1", "faq2"],
            produitServices: ["product1", "product2"],
            indicationTarifaire: ["priceIndication1", "priceIndication2"],
            protagonistePotentiel: ["participant1", "participant2"],
            recompence: ["reward1", "reward2"],
            rapportBilan: ["report1", "report2"],
            echangeCommunication: ["communication1", "communication2"],
            instructions: ["instruction1", "instruction2"],
            etatDeObjet: ["objectState1", "objectState2"],
            statistiquesDirectes: ["statistic1", "statistic2"],
            conditions: ["condition1", "condition2"],
            instanceCarateristique: ["characteristic1", "characteristic2"],
            acteur: '',
          },
          {
            id: "2",
            etatEvent: "active",
            etatobjet: "en_cours",
            referenceEvent: "REF123",
            categorieEvent: "conference",
            presentielEnligne: "presentiel",
            translations: {
              language: "en",
              designation: "Event Designation 1",
              slogan: "Event Slogan MacBook Pro blasts forward with the M3, M3 Pro, and M3 Max chips. Built on 3‑nanometer technology and featuring an all-new GPU architecture,",
              description: "MacBook Pro blasts forward with the M3, M3 Pro, and M3 Max chips. Built on 3‑nanometer technology and featuring an all-new GPU architecture, they’re the most advanced chips ever built for a personal computer. And each one brings more pro performance and capability. And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability And each one brings more pro performance and capability"
            },
            images: ["assets/images/event1.jpg", "assets/images/event2.jpg", "assets/images/event3.jpg", "assets/images/event4.jpg"],
            dateDebut: new Date('01-02-2023'),
            dateFin: new Date('10-30-2023'),
            multiSessions: true,
            multisites: true,
            accessibilite: "prive",
            avecDistribution: true,
            RecompensesPrix: false,
            reservationObligatoire: true,
            relationInterEventParent: "parentEventID",
            relationInterEventAssocie: ["relatedEventID1", "relatedEventID2"],
            programmeEvent: [
              {
                _id: "1",
                etatobjet: "active",
                categorieProgramme: "Workshop",
                translations: {
                  language: "en",
                  designation: "Introduction to Angular",
                  description: "This workshop provides an overview of Angular framework.",
                },
                dateHeureDebut: new Date("2024-02-10T13:30:00"),
                dateHeureFin: new Date("2024-02-10T15:00:00"),
                accesibilite: true,
                programmeEventParent: "parentEventID",
                programmeEventChildren: [],
                agendaEvent: "agendaEventID",
                lieuConcerne: [],
                protagonistePotentiel: [],
              },
              {
                _id: "2",
                etatobjet: "active",
                categorieProgramme: "Panel Discussion",
                translations: {
                  language: "en",
                  designation: "Future of AI",
                  description: "Join industry experts as they discuss the future of artificial intelligence.",
                },
                dateHeureDebut: new Date("2024-02-10T09:40:00"),
                dateHeureFin: new Date("2024-02-10T12:00:00"),
                accesibilite: true,
                programmeEventParent: "parentEventID",
                programmeEventChildren: [],
                agendaEvent: "agendaEventID",
                lieuConcerne: [],
                protagonistePotentiel: [],
              },
              {
                _id: "3",
                etatobjet: "active",
                categorieProgramme: "Seminar",
                translations: {
                  language: "en",
                  designation: "Introduction to Machine Learning",
                  description: "Join us for an informative seminar on the basics of machine learning and its applications."
                },
                dateHeureDebut: new Date("2024-01-30T14:00:00"),
                dateHeureFin: new Date("2024-02-09T16:00:00"),
                accesibilite: true,
                programmeEventParent: "parentEventID",
                programmeEventChildren: [],
                agendaEvent: "agendaEventID",
                lieuConcerne: [],
                protagonistePotentiel: []
              },
              {
                _id: "3",
                etatobjet: "active",
                categorieProgramme: "Seminar",
                translations: {
                  language: "en",
                  designation: "Introduction to Machine Learning zaka",
                  description: "Join us for an informative seminar on the basics of machine learning and its applications."
                },
                dateHeureDebut: new Date("2024-02-09T12:00:00"),
                dateHeureFin: new Date("2024-02-09T16:00:00"),
                accesibilite: true,
                programmeEventParent: "parentEventID",
                programmeEventChildren: [],
                agendaEvent: "agendaEventID",
                lieuConcerne: [],
                protagonistePotentiel: []
              }

            ],
            instanceElementAssocie: [
              {
                id: "1",
                etatobjet: "active",
                phaseEvenement: "phase1",
                translations: {
                  language: "en",
                  designation: "Associated Element 1",
                  description: "Description of Associated Element 1"
                },
                agendaEvent: '1',
                lieuConcerne: [
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -5.8129,
                      latitude: 35.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 2",
                    interneExterne: false,
                    personneAContacte: "Jane Smith",
                    telPersonne: "+987654321",
                    emailPersonne: "jane@example.com",
                    RemplacementLienInitial: true,
                    raisonRemplacement: "Replacement reason",
                    EtatEtulisation: false,
                    commentaireInterne: "This is a comment about Location 2",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -5.7584,
                      latitude: 35.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -6.9000,
                      latitude: 32.8833,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                ],
                objetAssocie: ["Object 1", "Object 2"],
                referenceDocumentsAppuisPreuve: ["Document 1", "Document 2"],
                createdAt: new Date("2024-02-07T10:00:00"),
                updatedAt: new Date("2024-02-07T12:00:00")
              },
              {
                id: "1",
                etatobjet: "active",
                phaseEvenement: "phase1",
                translations: {
                  language: "en",
                  designation: "Associated Element 1",
                  description: "Description of Associated Element 1"
                },
                agendaEvent: '1',
                lieuConcerne: [
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -2.8129,
                      latitude: 35.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 2",
                    interneExterne: false,
                    personneAContacte: "Jane Smith",
                    telPersonne: "+987654321",
                    emailPersonne: "jane@example.com",
                    RemplacementLienInitial: true,
                    raisonRemplacement: "Replacement reason",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 2",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -2.7584,
                      latitude: 35.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -4.9000,
                      latitude: 32.8833,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                ],
                objetAssocie: ["Object 1", "Object 2"],
                referenceDocumentsAppuisPreuve: ["Document 1", "Document 2"],
                createdAt: new Date("2024-02-07T10:00:00"),
                updatedAt: new Date("2024-02-07T12:00:00")
              },
              {
                id: "1",
                etatobjet: "active",
                phaseEvenement: "phase1",
                translations: {
                  language: "en",
                  designation: "Associated Element 1",
                  description: "Description of Associated Element 1"
                },
                agendaEvent: '1',
                lieuConcerne: [
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -5.8129,
                      latitude: 45.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 2",
                    interneExterne: false,
                    personneAContacte: "Jane Smith",
                    telPersonne: "+987654321",
                    emailPersonne: "jane@example.com",
                    RemplacementLienInitial: true,
                    raisonRemplacement: "Replacement reason",
                    EtatEtulisation: false,
                    commentaireInterne: "This is a comment about Location 2",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -5.7584,
                      latitude: 37.7595,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                  {
                    reflieu: "Location 1",
                    interneExterne: true,
                    personneAContacte: "John Doe",
                    telPersonne: "+123456789",
                    emailPersonne: "john@example.com",
                    RemplacementLienInitial: false,
                    raisonRemplacement: "",
                    EtatEtulisation: true,
                    commentaireInterne: "This is a comment about Location 1",
                    cordonne: {
                      _id: "60a8b9c4f5e4d32f8c9f4d67",
                      refCordonne: "C001",
                      pays: "Morocco",
                      region: "Tanger-Tetouan-Al Hoceima",
                      ZoneUrbaineRurale: "Urbaine",
                      villePrincipale: "Tangier",
                      commune: "Tanger-Assilah",
                      quartier: "Boukhalef",
                      cp: "90000",
                      adress: "Avenue Mohamed VI sahat al madina , majd drissia , dar assalam , boukhalef , majd , ",
                      longitude: -6.9000,
                      latitude: 38.8833,
                      translations: {
                        description: "This is the coordinate of the Tangier Ibn Battouta Airport"
                      },
                      planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
                      tel: "+212 5393-93940",
                      Mobile: "+212 661-223344",
                      fax: "+212 5393-93941",
                      email: "contact@tangierairport.ma",
                      web: "https://www.tangierairport.ma/",
                      EtatCoord: 1
                    }
                  },
                ],
                objetAssocie: ["Object 1", "Object 2"],
                referenceDocumentsAppuisPreuve: ["Document 1", "Document 2"],
                createdAt: new Date("2024-02-07T10:00:00"),
                updatedAt: new Date("2024-02-07T12:00:00")
              },
            ],
            probleme: ["issue1", "issue2"],
            reservation: ["reservation1", "reservation2"],
            faq: ["faq1", "faq2"],
            produitServices: ["product1", "product2"],
            indicationTarifaire: ["priceIndication1", "priceIndication2"],
            protagonistePotentiel: ["participant1", "participant2"],
            recompence: ["reward1", "reward2"],
            rapportBilan: ["report1", "report2"],
            echangeCommunication: ["communication1", "communication2"],
            instructions: ["instruction1", "instruction2"],
            etatDeObjet: ["objectState1", "objectState2"],
            statistiquesDirectes: ["statistic1", "statistic2"],
            conditions: ["condition1", "condition2"],
            instanceCarateristique: ["characteristic1", "characteristic2"],
            acteur: '',
          },
          {
            id: "3",
            etatEvent: "active",
            etatobjet: "en_cours",
            referenceEvent: "REF123",
            categorieEvent: "conference",
            presentielEnligne: "presentiel",
            translations: {
              language: "en",
              designation: "Event Designation 2",
              slogan: "Event Slogan",
              description: "Event Description"
            },
            images: ["assets/images/event1.jpg", "assets/images/event2.jpg", "assets/images/event3.jpg", "assets/images/event4.jpg"],
            dateDebut: new Date(),
            dateFin: new Date(),
            multiSessions: true,
            multisites: false,
            accessibilite: "accessible",
            avecDistribution: true,
            RecompensesPrix: false,
            reservationObligatoire: true,
            relationInterEventParent: "parentEventID",
            relationInterEventAssocie: ["relatedEventID1", "relatedEventID2"],
            programmeEvent: [],
            instanceElementAssocie: [],
            probleme: ["issue1", "issue2"],
            reservation: ["reservation1", "reservation2"],
            faq: ["faq1", "faq2"],
            produitServices: ["product1", "product2"],
            indicationTarifaire: ["priceIndication1", "priceIndication2"],
            protagonistePotentiel: ["participant1", "participant2"],
            recompence: ["reward1", "reward2"],
            rapportBilan: ["report1", "report2"],
            echangeCommunication: ["communication1", "communication2"],
            instructions: ["instruction1", "instruction2"],
            etatDeObjet: ["objectState1", "objectState2"],
            statistiquesDirectes: ["statistic1", "statistic2"],
            conditions: ["condition1", "condition2"],
            instanceCarateristique: ["characteristic1", "characteristic2"],
            acteur: ''
          },
          {
            id: "4",
            etatEvent: "active",
            etatobjet: "en_cours",
            referenceEvent: "REF123",
            categorieEvent: "conference",
            presentielEnligne: "presentiel",
            translations: {
              language: "en",
              designation: "Event Designation 3",
              slogan: "Event Slogan",
              description: "Event Description"
            },
            images: ["assets/images/event1.jpg", "assets/images/event2.jpg", "assets/images/event3.jpg", "assets/images/event4.jpg"],
            dateDebut: new Date(),
            dateFin: new Date(),
            multiSessions: true,
            multisites: false,
            accessibilite: "accessible",
            avecDistribution: true,
            RecompensesPrix: false,
            reservationObligatoire: true,
            relationInterEventParent: "parentEventID",
            relationInterEventAssocie: ["relatedEventID1", "relatedEventID2"],
            programmeEvent: [],
            instanceElementAssocie: [],
            probleme: ["issue1", "issue2"],
            reservation: ["reservation1", "reservation2"],
            faq: ["faq1", "faq2"],
            produitServices: ["product1", "product2"],
            indicationTarifaire: ["priceIndication1", "priceIndication2"],
            protagonistePotentiel: ["participant1", "participant2"],
            recompence: ["reward1", "reward2"],
            rapportBilan: ["report1", "report2"],
            echangeCommunication: ["communication1", "communication2"],
            instructions: ["instruction1", "instruction2"],
            etatDeObjet: ["objectState1", "objectState2"],
            statistiquesDirectes: ["statistic1", "statistic2"],
            conditions: ["condition1", "condition2"],
            instanceCarateristique: ["characteristic1", "characteristic2"],
            acteur: '',
          },
          {
            id: "5",
            etatEvent: "active",
            etatobjet: "en_cours",
            referenceEvent: "REF123",
            categorieEvent: "conference",
            presentielEnligne: "presentiel",
            translations: {
              language: "en",
              designation: "Event Designation 4",
              slogan: "Event Slogan",
              description: "Event Description"
            },
            images: ["assets/images/event1.jpg", "assets/images/event2.jpg", "assets/images/event3.jpg", "assets/images/event4.jpg"],
            dateDebut: new Date(),
            dateFin: new Date(),
            multiSessions: true,
            multisites: false,
            accessibilite: "accessible",
            avecDistribution: true,
            RecompensesPrix: false,
            reservationObligatoire: true,
            relationInterEventParent: "parentEventID",
            relationInterEventAssocie: ["relatedEventID1", "relatedEventID2"],
            programmeEvent: [],
            instanceElementAssocie: [],
            probleme: ["issue1", "issue2"],
            reservation: ["reservation1", "reservation2"],
            faq: ["faq1", "faq2"],
            produitServices: ["product1", "product2"],
            indicationTarifaire: ["priceIndication1", "priceIndication2"],
            protagonistePotentiel: ["participant1", "participant2"],
            recompence: ["reward1", "reward2"],
            rapportBilan: ["report1", "report2"],
            echangeCommunication: ["communication1", "communication2"],
            instructions: ["instruction1", "instruction2"],
            etatDeObjet: ["objectState1", "objectState2"],
            statistiquesDirectes: ["statistic1", "statistic2"],
            conditions: ["condition1", "condition2"],
            instanceCarateristique: ["characteristic1", "characteristic2"],
            acteur: '',
          },
        ],
        TransactionCommerciale: [],
        conditionPaiment: [
          {
            order: 1,
            ordreDeTranche: 2,
            pourcentage: 50,
            labelPeriode: 'Second installment',
            vleur: 500,
            uniteDeValeur: 'MAD',
            montantHtAssocie: 10000,
            tauxTVAassocie: 20,
            acteur: 'Supplier B',
            modePaiment: 'par vierment'
          },
          {
            order: 0,
            ordreDeTranche: 2,
            pourcentage: 50,
            labelPeriode: 'a la livraison',
            vleur: 500,
            uniteDeValeur: 'MAD',
            montantHtAssocie: 10000,
            tauxTVAassocie: 20,
            acteur: 'Supplier B',
            modePaiment: 'par vierment'
          }
        ],
        eService: [
          {
            _id: "1",
            etatobjet: "active",
            taxonomieEService: {
              _id: "2",
              translations: {
                language: "en",
                designation: "Reservation",
                description: "taxo",
              },
              logo: "assets/images/reservation.jpg",
              code: "T1",
              parent: null,
              children: [],
              domain: "",
              caracteristique: [],
              hasTaxonomies: false,
              etatObjet: "code-1",
              etatCreation: "created",
              dateEnregistrement: new Date().toISOString(),
            },
            moduleConcerne: "module_1",
            translations: {
              language: "en",
              designationEService: "eService designation",
              descriptif: "A reservation can refer to various situations where something is set aside or withheld for a specific purpose. For example, in the context of hotels or restaurants, a reservation is an arrangement made in advance to secure a room or table for one's use. It ensures that the desired accommodation or dining space will be available upon arrival. Additionally, reservations can also involve the designation of land for a particular purpose, such as Native American reservations in the United States. In a different sense, ",
            },
            imageRepresentative: "assets/images/reservation.jpg",
            eServicePrincipal: null,
            eServiceAssocie: [],
            conditions: [
              {
                _id: "1",
                etatobjet: "active",
                conditions: [
                  {
                    _id: "144",
                    etatobjet: "active",
                    groupe: "group1",
                    caracteristique: "characteristic1",
                    translations: {
                      language: "en",
                      label: "Label 1",
                      valeurChar: "Value 1"
                    },
                    valeurNotChar: null,
                    unite: "kg",
                    operateur: "+",
                    imageAssocie: "assets/images/checkIn.jpeg",
                  },
                  {
                    _id: "211",
                    etatobjet: "inactive",
                    groupe: "group2",
                    caracteristique: "characteristic2",
                    translations: {
                      language: "en",
                      label: "Label 2",
                      valeurChar: "Value 2"
                    },
                    valeurNotChar: 20,
                    unite: "cm",
                    operateur: "-",
                    imageAssocie: "image2.jpg",

                  },
                  {
                    _id: "663",
                    etatobjet: "pending",
                    groupe: "group3",
                    caracteristique: "characteristic3",
                    translations: {
                      language: "en",
                      label: "Label 3",
                      valeurChar: "Value 3"
                    },
                    valeurNotChar: 30,
                    unite: "m",
                    operateur: "*",
                    imageAssocie: "image3.jpg",
                  }
                ],
                acteurProfessionnelAssocie: [],
                eService: [],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
              }
            ],
            docEtReference: ["doc1.pdf", "doc2.pdf"],
            objetAssocie: ["object1", "object2"],
            caracteristique: [
              {
                _id: "113425325235",
                etatobjet: "active",
                reference: "ref002",
                translations: {
                  language: "en",
                  label: "Characteristic 1111",
                  defautleuchar: "Default Char"
                },
                natureInfo: "code_542",
                typeInfo: "type",
                defaultValeurNotChar: null,
                minVal: 0,
                maxVal: 100,
                unite: "unit",
                operateur: "operator",
                taxonomie: '1',
                groupe: '46',
                valeurs: [
                  {
                    _id: "11133",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 1 zakariae"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                  {
                    _id: "11144",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 2 anas"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                  {
                    _id: "11155",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 3 test"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                  {
                    _id: "11166",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 4"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                ],
                etatValidation: "val_idated",
                imageAssocie: "image.png",
                instanceCaracteristiques: []
              },
              {
                _id: "121",
                etatobjet: "active",
                reference: "ref002",
                translations: {
                  language: "en",
                  label: "Characteristic 123232",
                  defautleuchar: "Default Char"
                },
                natureInfo: "code_542",
                typeInfo: "type",
                defaultValeurNotChar: 'valeur 1',
                minVal: 0,
                maxVal: 100,
                unite: "unit",
                operateur: "operator",
                taxonomie: '2',
                groupe: '46',
                valeurs: [
                  {
                    _id: "1465711",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 1"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                  {
                    _id: "1154671",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 2"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                  {
                    _id: "1145671",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 3"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                  {
                    _id: "115471",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 4"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                ],
                etatValidation: "val_idated",
                imageAssocie: "image.png",
                instanceCaracteristiques: []
              },
              {
                _id: "117777",
                etatobjet: "active",
                reference: "ref002",
                translations: {
                  language: "en",
                  label: "Characteristic 112",
                  defautleuchar: "Default Char"
                },
                natureInfo: "code_542",
                typeInfo: "type",
                defaultValeurNotChar: 'valeur 1',
                minVal: 0,
                maxVal: 100,
                unite: "unit",
                operateur: "operator",
                taxonomie: '3',
                groupe: '1',
                valeurs: [
                  {
                    _id: "11567541",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 1"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                  {
                    _id: "145674511",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 2"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                  {
                    _id: "15675411",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 3"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                  {
                    _id: "11456741",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 4"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                ],
                etatValidation: "val_idated",
                imageAssocie: "image.png",
                instanceCaracteristiques: []
              },
              {
                _id: "1123433333",
                etatobjet: "active",
                reference: "ref002",
                translations: {
                  language: "en",
                  label: "Characteristic 5555 test",
                  defautleuchar: "Default Char"
                },
                natureInfo: "code_542",
                typeInfo: "type",
                defaultValeurNotChar: 'valeur 1',
                minVal: 0,
                maxVal: 100,
                unite: "unit",
                operateur: "operator",
                taxonomie: '1',
                groupe: '1',
                valeurs: [
                  {
                    _id: "1115467474",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 1"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                  {
                    _id: "1157547567371",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 2"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                  {
                    _id: "11356735765673571",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 3"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                  {
                    _id: "1135675765731",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 4"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                ],
                etatValidation: "val_idated",
                imageAssocie: "image.png",
                instanceCaracteristiques: []
              },
              {
                _id: "1123433333",
                etatobjet: "active",
                reference: "ref002",
                translations: {
                  language: "en",
                  label: "Characteristic 5555 test",
                  defautleuchar: "Default Char"
                },
                natureInfo: "code_542",
                typeInfo: "type",
                defaultValeurNotChar: 'valeur 1',
                minVal: 0,
                maxVal: 100,
                unite: "unit",
                operateur: "operator",
                taxonomie: '1',
                groupe: '46',
                valeurs: [
                  {
                    _id: "1115467474",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 1"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                  {
                    _id: "1157547567371",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 2"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                  {
                    _id: "11356735765673571",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 3"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                  {
                    _id: "1135675765731",
                    etatobjet: "active",
                    reference: "ref003",
                    translations: {
                      language: "en",
                      valeur: "Value 4"
                    },
                    default: false,
                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                    imageAssocie: "image.png",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                  },
                ],
                etatValidation: "val_idated",
                imageAssocie: "image.png",
                instanceCaracteristiques: []
              },
              {
                _id: "888979797",
                etatobjet: "active",
                reference: "ref002",
                translations: {
                  language: "en",
                  label: "Characteristic",
                  defautleuchar: "Default Char value"
                },
                natureInfo: "code_540",
                typeInfo: "code_1305",
                defaultValeurNotChar: 'val de string',
                minVal: 0,
                maxVal: 100,
                unite: "unit",
                operateur: "operator",
                taxonomie: '123',
                groupe: '46',
                valeurs: [],
                etatValidation: "val_idated",
                imageAssocie: "image.png",
                instanceCaracteristiques: []
              },
            ],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          {
            _id: "2",
            etatobjet: "active",
            taxonomieEService: {
              _id: "3",
              translations: {
                language: "en",
                designation: "Invitation",
                description: "taxo",
              },
              logo: "assets/images/invitation.jpg",
              code: "T2",
              parent: null,
              children: [
                {
                  _id: "312312312313",
                  translations: {
                    language: "en",
                    designation: "Invitation to a party",
                    description: "taxo",
                  },
                  logo: "assets/images/invitation.jpg",
                  code: "T2",
                  parent: null,
                  children: [],
                  domain: "",
                  caracteristique: [],
                  hasTaxonomies: false,
                  etatObjet: "code-1",
                  etatCreation: "created",
                  dateEnregistrement: new Date().toISOString(),
                },
                // Add more specific types of invitations if needed
              ],
              domain: "",
              caracteristique: [],
              hasTaxonomies: false,
              etatObjet: "code-1",
              etatCreation: "created",
              dateEnregistrement: new Date().toISOString(),
            },
            moduleConcerne: "module_1",
            translations: {
              language: "en",
              designationEService: "Invitation Service",
              descriptif: "Description of Invitation Service",
            },
            imageRepresentative: "image_url.jpg",
            eServicePrincipal: null,
            eServiceAssocie: [],
            conditions: [
              {
                _id: "1",
                etatobjet: "active",
                conditions: [
                  {
                    _id: "335351",
                    etatobjet: "active",
                    groupe: "group1",
                    caracteristique: "characteristic1",
                    translations: {
                      language: "en",
                      label: "Label 1",
                      valeurChar: "Value 1"
                    },
                    valeurNotChar: 10,
                    unite: "kg",
                    operateur: "+",
                    imageAssocie: "image1.jpg",
                    Donnee: "data1",
                    distiction: "distinction1",
                    acteur: "actor1",
                    histoire: "story1"
                  },
                  {
                    _id: "2345324532",
                    etatobjet: "inactive",
                    groupe: "group2",
                    caracteristique: "characteristic2",
                    translations: {
                      language: "en",
                      label: "Label 2",
                      valeurChar: "Value 2"
                    },
                    valeurNotChar: 20,
                    unite: "cm",
                    operateur: "-",
                    imageAssocie: "image2.jpg",
                    Donnee: "data2",
                    distiction: "distinction2",
                    acteur: "actor2",
                    histoire: "story2"
                  },
                  {
                    _id: "3453",
                    etatobjet: "pending",
                    groupe: "group3",
                    caracteristique: "characteristic3",
                    translations: {
                      language: "en",
                      label: "Label 3",
                      valeurChar: "Value 3"
                    },
                    valeurNotChar: 30,
                    unite: "m",
                    operateur: "*",
                    imageAssocie: "image3.jpg",
                    Donnee: "data3",
                    distiction: "distinction3",
                    acteur: "actor3",
                    histoire: "story3"
                  }
                ],
                acteurProfessionnelAssocie: [],
                eService: [],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
              }
            ],
            docEtReference: ["doc1.pdf", "doc2.pdf"],
            objetAssocie: ["object1", "object2"],
            caracteristique: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          {
            _id: "3",
            etatobjet: "active",
            taxonomieEService: {
              _id: "4",
              translations: {
                language: "en",
                designation: "RDV Et Rencontre",
                description: "taxo",
              },
              logo: "assets/images/rdv.jpg",
              code: "T3",
              parent: null,
              children: [
                {
                  _id: "412312312313",
                  translations: {
                    language: "en",
                    designation: "RDV for Business Meeting",
                    description: "taxo",
                  },
                  logo: "assets/images/rdv.jpg",
                  code: "T3",
                  parent: null,
                  children: [],
                  domain: "",
                  caracteristique: [],
                  hasTaxonomies: false,
                  etatObjet: "code-1",
                  etatCreation: "created",
                  dateEnregistrement: new Date().toISOString(),
                },
                // Add more specific types of RDV if needed
              ],
              domain: "",
              caracteristique: [],
              hasTaxonomies: false,
              etatObjet: "code-1",
              etatCreation: "created",
              dateEnregistrement: new Date().toISOString(),
            },
            moduleConcerne: "module_1",
            translations: {
              language: "en",
              designationEService: "RDV Service",
              descriptif: "Description of RDV Service",
            },
            imageRepresentative: "image_url.jpg",
            eServicePrincipal: null,
            eServiceAssocie: [],
            conditions: [

              {
                _id: "4351",
                etatobjet: "active",
                conditions: [
                  {
                    _id: "23451",
                    etatobjet: "active",
                    groupe: "group1",
                    caracteristique: "characteristic1",
                    translations: {
                      language: "en",
                      label: "Label 1",
                      valeurChar: "Value 1"
                    },
                    valeurNotChar: 10,
                    unite: "kg",
                    operateur: "+",
                    imageAssocie: "image1.jpg",
                    Donnee: "data1",
                    distiction: "distinction1",
                    acteur: "actor1",
                    histoire: "story1"
                  },
                  {
                    _id: "22345",
                    etatobjet: "inactive",
                    groupe: "group2",
                    caracteristique: "characteristic2",
                    translations: {
                      language: "en",
                      label: "Label 2",
                      valeurChar: "Value 2"
                    },
                    valeurNotChar: 20,
                    unite: "cm",
                    operateur: "-",
                    imageAssocie: "image2.jpg",
                    Donnee: "data2",
                    distiction: "distinction2",
                    acteur: "actor2",
                    histoire: "story2"
                  },
                  {
                    _id: "324523543",
                    etatobjet: "pending",
                    groupe: "group3",
                    caracteristique: "characteristic3",
                    translations: {
                      language: "en",
                      label: "Label 3",
                      valeurChar: "Value 3"
                    },
                    valeurNotChar: 30,
                    unite: "m",
                    operateur: "*",
                    imageAssocie: "image3.jpg",
                    Donnee: "data3",
                    distiction: "distinction3",
                    acteur: "actor3",
                    histoire: "story3"
                  }
                ],
                acteurProfessionnelAssocie: [],
                eService: [],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
              }
            ],
            docEtReference: ["doc1.pdf", "doc2.pdf"],
            objetAssocie: ["object1", "object2"],
            caracteristique: [

            ],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          }
        ]
      },
      // {
      //   _id: '2',
      //   RefSocioEco: 'Education Center',
      //   TypeStructure: 'Organization',
      //   StatutStructure: 'Inactive',
      //   SecteurActivitePrincipal: 'Education',
      //   ActivitePrincipale: 'Training Center',
      //   translations: {
      //     nomStructure: 'LearnTech Institute',
      //     Descriptif:
      //       'Leading education provider with a focus on technology and innovation.',
      //     Slogan: 'Empowering Minds, Enriching Lives',
      //     CommeentaireInterne:
      //       'Currently not operational. Undergoing renovations.',
      //   },
      //   Logo: '../../../assets/pictures/pic22.jpg',
      //   Pays_Origine: 'CountryABC',
      //   AnneeCreation: new Date('2015-08-01'),
      //   Notation: 3.8,
      //   Effectif_global: '100',
      //   telephone: '0123456789',
      //   fax: '0987654321',
      //   email: 'info@learntech.com',
      //   SiteWeb: 'https://www.google.com',
      //   CordonneeGeographique: [
      //     {
      //       _id: "60a8b9c4f5e4d32f8c9f4d67",
      //       refCordonne: "C001",
      //       pays: "Morocco",
      //       region: "Tanger-Tetouan-Al Hoceima",
      //       ZoneUrbaineRurale: "Urbaine",
      //       villePrincipale: "Tangier",
      //       commune: "Tanger-Assilah",
      //       quartier: "Boukhalef",
      //       cp: "90000",
      //       adress: "Avenue Mohamed VI, Tangier 90000, Morocco",
      //       longitude: -5.8129,
      //       latitude: 35.7595,
      //       translations: {
      //         description: "This is the coordinate of the Tangier Ibn Battouta Airport"
      //       },
      //       planAcces: "https://www.google.com/maps/dir//Tangier+Ibn+Battouta+Airport,+Tangier+90000,+Morocco",
      //       tel: "+212 5393-93940",
      //       Mobile: "+212 661-223344",
      //       fax: "+212 5393-93941",
      //       email: "contact@tangierairport.ma",
      //       web: "https://www.tangierairport.ma/",
      //       EtatCoord: 1
      //     }

      //     // Add more CordonneeGeographique objects as needed
      //   ],
      //   Horaire: [
      //     {
      //       _id: '5',
      //       CordonneeGeographique: '4',
      //       DayDebut: 'Lundi',
      //       Dayfin: 'Jeudi',
      //       heurDebut: '6 AM',
      //       heurFin: '10 PM',
      //       DateDebut: new Date('2023-02-01T09:00:00'),
      //       DateFin: new Date('2023-02-01T18:00:00'),
      //     },
      //     {
      //       _id: '5',
      //       CordonneeGeographique: '4',
      //       DayDebut: 'Vendredi',
      //       Dayfin: 'Samedi',
      //       heurDebut: '8 AM',
      //       heurFin: '1 PM',
      //       DateDebut: new Date('2023-02-01T09:00:00'),
      //       DateFin: new Date('2023-02-01T18:00:00'),
      //     },
      //   ],
      //   distinction: [
      //     {
      //       typeDistinction: 'Award',
      //       dateDistinction: new Date(),
      //       translations: {
      //         language: 'en',
      //         designation: 'Best in Category',
      //         description: 'This is a description for the award in English'
      //       },
      //       image: 'path/to/distinction_image.jpg',
      //       institutionResponsable: 'XYZ Organization',
      //       logoInstitution: 'path/to/logo.jpg',
      //       acteur: '1'
      //     }
      //   ],
      //   histoire: [
      //     {
      //       date: new Date(),
      //       translation: {
      //         language: 'en',
      //         titre: 'Title in English',
      //         commenteire: 'Comment in English'
      //       },
      //       image: 'path/to/image.jpg',
      //       acteur: '1',
      //       distinction: [
      //         {
      //           typeDistinction: 'Award',
      //           dateDistinction: new Date(),
      //           translations: {
      //             language: 'en',
      //             designation: 'Best in Category',
      //             description: 'This is a description for the award in English'
      //           },
      //           image: 'path/to/distinction_image.jpg',
      //           institutionResponsable: 'XYZ Organization',
      //           logoInstitution: 'path/to/logo.jpg',
      //           acteur: '1'
      //         }
      //       ],
      //       instanceCaracteristique: [
      //         {
      //           familleCaracteristique: 'Category',
      //           labelCaracteristique: 'Award Category',
      //           Operateur: 'Equals',
      //           valeurs: 'First Place',
      //           uniteDeValeur: 'Position',
      //           Donnee: '1',
      //           distiction: '1',
      //           acteur: '1',
      //           histoire: '1'
      //         }
      //       ]

      //     }
      //   ],
      //   instanceCaracteristique: [
      //     {
      //       familleCaracteristique: 'Category',
      //       labelCaracteristique: 'Award Category',
      //       Operateur: 'Equals',
      //       valeurs: 'First Place',
      //       uniteDeValeur: 'Position',
      //       Donnee: '1',
      //       distiction: '1',
      //       acteur: '1',
      //       histoire: '1'
      //     }
      //   ],
      //   nationaliteEtLongue: [
      //     {
      //       nationalite: 'maroc',
      //       imageDrapeaau: 'arabe',
      //       acteur: '1'
      //     }
      //   ],
      //   organigramePersonnel: [
      //     {
      //       _id : '56',
      //       civilite: 'Mr',
      //       nom: 'Doe',
      //       prenom: 'John',
      //       fonction: 'CEO',
      //       Presentation: 'An experienced leader with a vision for growth.',
      //       mission: 'To steer the company towards success and innovation.',
      //       departement: 'Executive',
      //       service: 'Leadership',
      //       photo: 'assets/images/team_01.jpg',
      //       telFix: '123-456-7890',
      //       gsm: '987-654-3210',
      //       email: 'john.doe@example.com',
      //       enActive: 'Yes',
      //       organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
      //       organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
      //       organigramePersonnelAsso: [
      //         {
      //           _id : '134',
      //           civilite: 'Mr',
      //           nom: 'Doe',
      //           prenom: 'John',
      //           fonction: 'designer',
      //           Presentation: 'An experienced leader with a vision for growth.',
      //           mission: 'To steer the company towards success and innovation.',
      //           departement: 'Executive',
      //           service: 'Leadership',
      //           photo: 'assets/images/team_01.jpg',
      //           telFix: '123-456-7890',
      //           gsm: '987-654-3210',
      //           email: 'john.doe@example.com',
      //           enActive: 'Yes',
      //           organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
      //           organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
      //           organigramePersonnelAsso: [
      //             {
      //               _id : '1123',
      //               civilite: 'Mr',
      //               nom: 'Doe',
      //               prenom: 'John',
      //               fonction: 'video editer',
      //               Presentation: 'An experienced leader with a vision for growth.',
      //               mission: 'To steer the company towards success and innovation.',
      //               departement: 'Executive',
      //               service: 'Leadership',
      //               photo: 'assets/images/team_01.jpg',
      //               telFix: '123-456-7890',
      //               gsm: '987-654-3210',
      //               email: 'john.doe@example.com',
      //               enActive: 'Yes',
      //               organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
      //               organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
      //               organigramePersonnelAsso: [],
      //               acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
      //             }
      //           ],
      //           acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
      //         },
      //         {
      //           _id : '2234',
      //           civilite: 'Mr',
      //           nom: 'Doe',
      //           prenom: 'John',
      //           fonction: 'devloper',
      //           Presentation: 'An experienced leader with a vision for growth.',
      //           mission: 'To steer the company towards success and innovation.',
      //           departement: 'Executive',
      //           service: 'Leadership',
      //           photo: 'assets/images/team_01.jpg',
      //           telFix: '123-456-7890',
      //           gsm: '987-654-3210',
      //           email: 'john.doe@example.com',
      //           enActive: 'Yes',
      //           organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
      //           organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
      //           organigramePersonnelAsso: [
      //             {
      //               _id : '12341',
      //               civilite: 'Mr',
      //               nom: 'Doe',
      //               prenom: 'John',
      //               fonction: 'beginner',
      //               Presentation: 'An experienced leader with a vision for growth.',
      //               mission: 'To steer the company towards success and innovation.',
      //               departement: 'Executive',
      //               service: 'Leadership',
      //               photo: 'assets/images/team_01.jpg',
      //               telFix: '123-456-7890',
      //               gsm: '987-654-3210',
      //               email: 'john.doe@example.com',
      //               enActive: 'Yes',
      //               organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
      //               organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
      //               organigramePersonnelAsso: [],
      //               acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
      //             }
      //           ],
      //           acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
      //         }
      //       ],
      //       acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
      //     },
      //     {
      //       _id : '42134',
      //       civilite: 'Mr',
      //       nom: 'Doe',
      //       prenom: 'John',
      //       fonction: 'CEO',
      //       Presentation: 'An experienced leader with a vision for growth.',
      //       mission: 'To steer the company towards success and innovation.',
      //       departement: 'Executive',
      //       service: 'Leadership',
      //       photo: 'assets/images/team_01.jpg',
      //       telFix: '123-456-7890',
      //       gsm: '987-654-3210',
      //       email: 'john.doe@example.com',
      //       enActive: 'Yes',
      //       organigrammeStructure: '1',  // Assuming '1' is the ID of the corresponding OrganigrameStructure
      //       organigramePersonnelPrincipale: '2',  // Assuming '2' is the ID of the parent organigramePersonnel
      //       organigramePersonnelAsso: [],
      //       acteur: '3',  // Assuming '3' is the ID of the corresponding acteur
      //     }
      //   ]


      // },
    ];
  }

  getActeurById(id: string): Observable<acteurSocioEcanomique | undefined> {
    console.log('Fetching petiteAnnonce by ID:', id);
    const selectedacteur = this.getActeur().find(
      (acteur) => acteur._id === id
    );
    console.log('Selected petiteAnnonce:', selectedacteur);
    return of(selectedacteur);
  }


  public filteredData: any; // Replace 'any' with your data type


  setFilteredData(data: any) {
    this.filteredData = data;
  }

  getFilteredData() {
    return this.filteredData;
  }


}
