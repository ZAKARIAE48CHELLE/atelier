import { Injectable } from '@angular/core';
import { GroupeCaracteristique } from '../models/GroupeCaracteristique.model';




@Injectable({
    providedIn: 'root',
})
export class GroupeCaracteristiqueService {

    classeAnnonce: any = [
        "code_8806",
        "code_8807",
        "code_8808",
        "code_8809",
        "code_8810",
        "code_8811",
        "code_8812",
        "code_8813",
        "code_8814",
    ];


    ville: any = [
        "Afourar",
        "Agadir",
        "Agdz",
        "Aghbala",
        "Agni Izimmer",
        "Agourai",
        "Ahfir",
        "Ain El Aouda",
        "Ain Taoujdate",
        "Ait Daoud",
        "Ajdir",
        "Akchour",
        "Akka",
        "Aklim",
        "Aknoul",
        "Al Aroui",
        "Al Hoceïma",
        "Alnif",
        "Amalou Ighriben",
        "Amizmiz",
        "Anzi",
        "Aoufous",
        "Aoulouz",
        "Aourir",
        "Arazane",
        "Arbaoua",
        "Arfoud",
        "Assa",
        "Assahrij",
        "Assilah",
        "Awsard",
        "Azemmour",
        "Azilal",
        "Azrou",
        "Aïn Bni Mathar",
        "Aïn Cheggag",
        "Aïn Dorij",
        "Aïn Erreggada",
        "Aïn Harrouda",
        "Aïn Jemaa",
        "Aïn Karma",
        "Aïn Leuh",
        "Aït Attab",
        "Aït Baha",
        "Aït Boubidmane",
        "Aït Hichem",
        "Aït Iaâza",
        "Aït Ishaq",
        "Aït Majden",
        "Aït Melloul",
        "Aït Ourir",
        "Aït Yalla",
        "Bab Berred",
        "Bab Taza",
        "Bejaâd",
        "Ben Ahmed",
        "Ben Guerir",
        "Ben Sergao",

        "Ben Taïeb",

        "Ben Yakhlef",

        "Beni Ayat",

        "Benslimane",

        "Berkane",

        "Berrechid",

        "Bhalil",


        "Bin elouidane",

        "Biougra",

        "Bir Jdid",

        "Bni Ansar",

        "Bni Bouayach",

        "Bni Chiker",

        "Bni Drar",

        "Bni Hadifa",

        "Bni Tadjite",

        "Bouanane",

        "Bouarfa",

        "Boudnib",

        "Boufakrane",

        "Bouguedra",
        "Bouhdila",
        "Bouizakarne",
        "Boujdour",
        "Boujniba",
        "Boulanouare",
        "Boulemane",
        "Boumalne-Dadès",
        "Boumia",
        "Bouskoura",
        "Bouznika",
        "Bradia",
        "Brikcha",
        "Bzou",
        "Béni Mellal",
        "Casablanca",
        "Chefchaouen",
        "Chichaoua",
        "Dar Bni Karrich",
        "Dar Chaoui",
        "Dar El Kebdani",
        "Dar Gueddari",
        "Dar Oulad Zidouh",
        "Dcheira El Jihadia",
        "Debdou",
        "Demnate",
        "Deroua",
        "Douar Kannine",
        "Dra'a",
        "Drargua",
        "Driouch",
        "Echemmaia",
        "El Aïoun Sidi Mellouk",
        "El Borouj",
        "El Gara",
        "El Guerdane",
        "El Hajeb",
        "El Hanchane",
        "El Jadida",
        "El Kelaâ des Sraghna",
        "El Ksiba",
        "El Marsa",
        "El Menzel",
        "El Ouatia",
        "Elkbab",
        "Er-Rich",
        "Errachidia",
        "Es-Semara",
        "Essaouira",
        "Fam El Hisn",
        "Farkhana",
        "Figuig",
        "Fnideq",
        "Foum Jamaa",
        "Foum Zguid",
        "Fquih Ben Salah",
        "Fraïta",
        "Fès",
        "Gardmit",
        "Ghafsai",
        "Ghmate",
        "Goulmima",
        "Gourrama",
        "Guelmim",
        "Guercif",
        "Gueznaia",
        "Guigou",
        "Guisser",
        "Had Bouhssoussen",
        "Had Kourt",
        "Haj Kaddour",
        "Harhoura",
        "Harte Lyamine",
        "Hattane",
        "Hrara",
        "Ida Ougnidif",
        "Ifrane",
        "Ifri",
        "Igdamen",
        "Ighil n'Oumgoun",
        "Ighoud",
        "Ighounane",
        "Ihddaden",
        "Imassine",
        "Imintanoute",
        "Imouzzer Kandar",
        "Imouzzer Marmoucha",
        "Imzouren",
        "Inahnahen",
        "Inezgane",
        "Irherm",
        "Issaguen (Ketama)",
        "Itzer",
        "Jamâat Shaim",
        "Jaâdar",
        "Jebha",
        "Jerada",
        "Jorf",
        "Jorf El Melha",
        "Jorf Lasfar",
        "Karia",
        "Karia (El Jadida)",
        "Karia Ba Mohamed",
        "Kariat Arekmane",
        "Kasba Tadla",
        "Kassita",
        "Kattara",
        "Kehf Nsour",
        "Kelaat-M'Gouna",
        "Kerouna",
        "Kerrouchen",
        "Khemis Zemamra",
        "Khenichet",
        "Khouribga",
        "Khémis Sahel",
        "Khémisset",
        "Khénifra",
        "Ksar El Kébir",
        "Kénitra",
        "Laaounate",
        "Laayoune",
        "Lakhsas",
        "Lakhsass",
        "Lalla Mimouna",
        "Lalla Takerkoust",
        "Larache",
        "Laâtamna",
        "Loudaya",
        "Loulad",
        "Lqliâa",
        "Lâattaouia",
        "M'diq",
        "M'haya",
        "M'rirt",
        "M'semrir",
        "Madagh",
        "Marrakech",
        "Martil",
        "Massa (Maroc)",
        "Mechra Bel Ksiri",
        "Megousse",
        "Mehdia",
        "Meknès",
        "Midar",
        "Midelt",
        "Missour",
        "Mohammadia",
        "Moqrisset",
        "Moulay Abdallah",
        "Moulay Ali Cherif",
        "Moulay Bouazza",
        "Moulay Bousselham",
        "Moulay Brahim",
        "Moulay Idriss Zerhoun",
        "Moulay Yaâcoub",
        "Moussaoua",
        "MyAliCherif",
        "Mzouda",
        "Médiouna",
        "N'Zalat Bni Amar",
        "Nador",
        "Naima",
        "Oualidia",
        "Ouaouizeght",
        "Ouaoumana",
        "Ouarzazate",
        "Ouazzane",
        "Oued Amlil",
        "Oued Heimer",
        "Oued Ifrane",
        "Oued Laou",
        "Oued Rmel",
        "Oued Zem",
        "Oued-Eddahab",
        "Oujda",
        "Oulad Abbou",
        "Oulad Amrane",
        "Oulad Ayad",
        "Oulad Berhil",
        "Oulad Frej",
        "Oulad Ghadbane",
        "Oulad H'Riz Sahel",
        "Oulad M'Barek",
        "Oulad M'rah",
        "Oulad Saïd",
        "Oulad Sidi Ben Daoud",
        "Oulad Teïma",
        "Oulad Yaich",
        "Oulad Zbair",
        "Ouled Tayeb",
        "Oulmès",
        "Ounagha",
        "Outat El Haj",
        "Point Cires",
        "Rabat",
        "Ras El Aïn",
        "Ras El Ma",
        "Ribate El Kheir",

        "Rissani",
        "Rommani",
        "Sabaa Aiyoun",
        "Safi",
        "Salé",
        "Sarghine",
        "Saïdia",
        "Sebt El Maârif",
        "Sebt Gzoula",
        "Sebt Jahjouh",
        "Selouane",


        "Settat",

        "Sid L'Mokhtar",

        "Sid Zouin",

        "Sidi Abdallah Ghiat",

        "Sidi Addi",


        "Sidi Ahmed",

        "Sidi Ali Ban Hamdouche",

        "Sidi Allal El Bahraoui",


        "Sidi Allal Tazi",


        "Sidi Bennour",

        "Sidi Bou Othmane",

        "Sidi Boubker",


        "Sidi Bouknadel",


        "Sidi Bouzid",

        "Sidi Ifni",

        "Sidi Jaber",

        "Sidi Kacem",


        "Sidi Lyamani",


        "Sidi Mohamed ben Abdallah el-Raisuni",


        "Sidi Rahhal",

        "Sidi Rahhal Chataï",

        "Sidi Slimane",


        "Sidi Slimane Echcharaa",


        "Sidi Smaïl",

        "Sidi Taibi",


        "Sidi Yahya El Gharb",


        "Skhinate",


        "Skhirate",


        "Skhour Rehamna",

        "Skoura",

        "Smimou",

        "Soualem",

        "Souk El Arbaa",


        "Souk Sebt Oulad Nemma",

        "Stehat",


        "Séfrou",


        "Tabounte",

        "Tafajight",


        "Tafetachte",

        "Tafraout",

        "Taghjijt",

        "Taghzout",


        "Tagzen",

        "Tahannaout",

        "Tahla",


        "Tala Tazegwaght",


        "Taliouine",

        "Talmest",

        "Talsint",


        "Tamallalt",

        "Tamanar",

        "Tamansourt",

        "Tamassint",


        "Tamegroute",

        "Tameslouht",

        "Tamesna",


        "Tamraght",

        "Tan-Tan",

        "Tanalt",

        "Tanger",


        "Tanoumrite Nkob Zagora",

        "Taounate",


        "Taourirt",


        "Taourirt ait zaghar",

        "Tarfaya",


        "Targuist",


        "Taroudannt",

        "Tata",

        "Taza",


        "Taïnaste",


        "Temsia",

        "Tendrara",


        "Thar Es-Souk",


        "Tichoute",

        "Tiddas",


        "Tiflet",


        "Tifnit",

        "Tighassaline",

        "Tighza",

        "Timahdite",


        "Tinejdad",

        "Tisgdal",

        "Tissa",


        "Tit Mellil",

        "Tizguite",


        "Tizi Ouasli",


        "Tiznit",

        "Tiztoutine",


        "Touarga",


        "Touima",


        "Touissit",


        "Toulal",


        "Toundoute",

        "Tounfite",

        "Témara",


        "Tétouan",


        "Youssoufia",

        "Zag",

        "Zagora",

        "Zaouia d'Ifrane",


        "Zaouïat Cheikh",

        "Zaïda",

        "Zaïo",


        "Zeghanghane",


        "Zeubelemok",

        "Zinat",
    ]

    getGroupe(): GroupeCaracteristique[] {
        return [
            {
                _id: "1",
                ordre : 1,
                etatobjet: "active",
                reference: "ref001",
                translations: {
                    language: "en",
                    designation: "Group 1",
                    description: "This is Group 1"
                },
                etatValidation: "validated",
                    caracteristiques: [
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
                            groupe: '1',
                            valeurs: [
                                {
                                    _id: "11133",
                                    etatobjet: "active",
                                    reference: "ref003",
                                    translations: {
                                        language: "en",
                                        valeur: "Value 1 zakariae"
                                    },
                                    default: true,
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
                                    default: true,
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
                                    default:false,
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
                                    default:false,
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
                            groupe: '1',
                            valeurs: [
                                {
                                    _id: "1465711",
                                    etatobjet: "active",
                                    reference: "ref003",
                                    translations: {
                                        language: "en",
                                        valeur: "Value 1"
                                    },
                                    default:false,
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
                                    default:false,
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
                                    default:false,
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
                                    default:false,
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
                                    default:false,
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
                                    default:false,
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
                                    default:false,
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
                                    default:false,
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
                            _id: "112344433333",
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
                                    _id: "111534467474",
                                    etatobjet: "active",
                                    reference: "ref003",
                                    translations: {
                                        language: "en",
                                        valeur: "Value 1"
                                    },
                                    default:false,
                                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                                    imageAssocie: "image.png",
                                    createdAt: new Date().toISOString(),
                                    updatedAt: new Date().toISOString()
                                },
                                {
                                    _id: "11575475sdeg67371",
                                    etatobjet: "active",
                                    reference: "ref003",
                                    translations: {
                                        language: "en",
                                        valeur: "Value 2"
                                    },
                                    default:false,
                                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                                    imageAssocie: "image.png",
                                    createdAt: new Date().toISOString(),
                                    updatedAt: new Date().toISOString()
                                },
                                {
                                    _id: "11356735gr765673571",
                                    etatobjet: "active",
                                    reference: "ref003",
                                    translations: {
                                        language: "en",
                                        valeur: "Value 3"
                                    },
                                    default:false,
                                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                                    imageAssocie: "image.png",
                                    createdAt: new Date().toISOString(),
                                    updatedAt: new Date().toISOString()
                                },
                                {
                                    _id: "1135675aedgv765731",
                                    etatobjet: "active",
                                    reference: "ref003",
                                    translations: {
                                        language: "en",
                                        valeur: "Value 4"
                                    },
                                    default:false,
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
                    ],
                icon: 'fa-sol_id fa-chess-rook',
                parent: null,
                sousGroupe: [],
                domain: '12387928742877',
                CreatedAt : new Date('2001/2/3')
            },
            {
                _id: "46",
                ordre : 1,
                etatobjet: "active",
                reference: "ref001",
                translations: { 
                    language: "en",
                    designation: "Group cloned 1111",
                    description: "This is Group 1"
                },
                etatValidation: "validated",
                    caracteristiques: [
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
                            taxonomie: '132',
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
                                    default:false,
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
                                    default:false,
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
                            taxonomie: '243',
                            groupe: '1',
                            valeurs: [
                                {
                                    _id: "1465711",
                                    etatobjet: "active",
                                    reference: "ref003",
                                    translations: {
                                        language: "en",
                                        valeur: "Value 1"
                                    },
                                    default:false,
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
                                    default:false,
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
                                    default:false,
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
                                    default:false,
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
                            taxonomie: '243',
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
                                    default:false,
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
                                    default:false,
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
                                    default:false,
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
                                    default:false,
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
                            taxonomie: '123',
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
                                    default:false,
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
                                    default:false,
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
                                    default:false,
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
                                    default:false,
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
                                label: "Characteristic zakariae",
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
                        {
                            _id: "1122343433333",
                            etatobjet: "active",
                            reference: "ref002",
                            translations: {
                                language: "en",
                                label: "Characteristic 5555 ead zidta",
                                defautleuchar: "Default Char"
                            },
                            natureInfo: "code_542",
                            typeInfo: "type",
                            defaultValeurNotChar: 'valeur 1',
                            minVal: 0,
                            maxVal: 100,
                            unite: "unit",
                            operateur: "operator",
                            taxonomie: '132',
                            groupe: '46',
                            valeurs: [
                                {
                                    _id: "11135467474",
                                    etatobjet: "active",
                                    reference: "ref003",
                                    translations: {
                                        language: "en",
                                        valeur: "Value 1"
                                    },
                                    default:false,
                                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                                    imageAssocie: "image.png",
                                    createdAt: new Date().toISOString(),
                                    updatedAt: new Date().toISOString()
                                },
                                {
                                    _id: "11575472567371",
                                    etatobjet: "active",
                                    reference: "ref003",
                                    translations: {
                                        language: "en",
                                        valeur: "Value 2"
                                    },
                                    default:false,
                                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                                    imageAssocie: "image.png",
                                    createdAt: new Date().toISOString(),
                                    updatedAt: new Date().toISOString()
                                },
                                {
                                    _id: "1135673576545673571",
                                    etatobjet: "active",
                                    reference: "ref003",
                                    translations: {
                                        language: "en",
                                        valeur: "Value 3"
                                    },
                                    default:false,
                                    caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                                    imageAssocie: "image.png",
                                    createdAt: new Date().toISOString(),
                                    updatedAt: new Date().toISOString()
                                },
                                {
                                    _id: "1135675234765731",
                                    etatobjet: "active",
                                    reference: "ref003",
                                    translations: {
                                        language: "en",
                                        valeur: "Value 4"
                                    },
                                    default:false,
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
                    ],
                icon: 'fa-sol_id fa-chess-rook',
                parent: null,
                sousGroupe: [],
                domain: '12387928742877',
                CreatedAt : new Date('2001/2/3')
            },
            {
                _id: "2",
                ordre : 2,
                etatobjet: "active",
                reference: "ref001",
                translations: {
                    language: "en",
                    designation: "Group 2",
                    description: "This is Group 1"
                },
                etatValidation: "validated",
                caracteristiques: [
                    {
                        _id: "11sdfgdsg353",
                        etatobjet: "active",
                        reference: "ref002",
                        translations: {
                            language: "en",
                            label: "Characteristic 1",
                            defautleuchar: "Default Char value"
                        },
                        natureInfo: "code_540",
                        typeInfo: "code_1305",
                        defaultValeurNotChar: 'val de string',
                        minVal: 0,
                        maxVal: 100,
                        unite: "unit",
                        operateur: "operator",
                        taxonomie: '1',
                        groupe: '2',
                        valeurs: [],
                        etatValidation: "val_idated",
                        imageAssocie: "image.png",
                        instanceCaracteristiques: []
                    },
                    {
                        _id: "11sdfgd4sg353",
                        etatobjet: "active",
                        reference: "ref002",
                        translations: {
                            language: "en",
                            label: "Characteristic 1 for test string",
                            defautleuchar: null
                        },
                        natureInfo: "code_540",
                        typeInfo: "code_1305",
                        defaultValeurNotChar: null,
                        minVal: 0,
                        maxVal: 100,
                        unite: "unit",
                        operateur: "operator",
                        taxonomie: '1',
                        groupe: '2',
                        valeurs: [],
                        etatValidation: "val_idated",
                        imageAssocie: "image.png",
                        instanceCaracteristiques: []
                    },
                    {
                        _id: "113sdfg53",
                        etatobjet: "active",
                        reference: "ref002",
                        translations: {
                            language: "en",
                            label: "Characteristic 1",
                            defautleuchar: "Default Char"
                        },
                        natureInfo: "code_540",
                        typeInfo: "code_1306",
                        defaultValeurNotChar: 99,
                        minVal: 20,
                        maxVal: 100,
                        unite: "unit",
                        operateur: "operator",
                        taxonomie: '1',
                        groupe: '2',
                        valeurs: [],
                        etatValidation: "val_idated",
                        imageAssocie: "image.png",
                        instanceCaracteristiques: []
                    },
                    {
                        _id: "113dsfadgafgdcvdavdavg53",
                        etatobjet: "active",
                        reference: "ref002",
                        translations: {
                            language: "en",
                            label: "Characteristic 1",
                            defautleuchar: "Default Char"
                        },
                        natureInfo: "code_540",
                        typeInfo: "code_1307",
                        defaultValeurNotChar: new Date('2024-08-17'),
                        minVal: new Date('2024-01-16'),
                        maxVal: new Date('2028-08-27'),
                        unite: "unit",
                        operateur: "operator",
                        taxonomie: '1',
                        groupe: '2',
                        valeurs: [],
                        etatValidation: "val_idated",
                        imageAssocie: "image.png",
                        instanceCaracteristiques: []
                    },
                    {
                        _id: "113sdfgretetge53",
                        etatobjet: "active",
                        reference: "ref002",
                        translations: {
                            language: "en",
                            label: "Characteristic of switch",
                            defautleuchar: "Default Char"
                        },
                        natureInfo: "code_540",
                        typeInfo: "code_1308",
                        defaultValeurNotChar: true,
                        minVal: 0,
                        maxVal: 100,
                        unite: "unit",
                        operateur: "operator",
                        taxonomie: '1',
                        groupe: '2',
                        valeurs: [],
                        etatValidation: "val_idated",
                        imageAssocie: "image.png",
                        instanceCaracteristiques: []
                    },
                    {
                        _id: "113adfgagregdfagasgdG53",
                        etatobjet: "active",
                        reference: "ref002",
                        translations: {
                            language: "en",
                            label: "Characteristic 1",
                            defautleuchar: "Default Char"
                        },
                        natureInfo: "code_541",
                        typeInfo: "code_1308",
                        defaultValeurNotChar: null,
                        minVal: 0,
                        maxVal: 100,
                        unite: "unit",
                        operateur: "operator",
                        taxonomie: '1',
                        groupe: '2',
                        valeurs: [
                            {
                                _id: "115TRGHBR1",
                                etatobjet: "active",
                                reference: "ref003",
                                translations: {
                                    language: "en",
                                    valeur: "Value zakariae"
                                },
                                default:false,
                                caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                                imageAssocie: "image.png",
                                createdAt: new Date().toISOString(),
                                updatedAt: new Date().toISOString()
                            },
                            {
                                _id: "1345Y545ETFE11",
                                etatobjet: "active",
                                reference: "ref003",
                                translations: {
                                    language: "en",
                                    valeur: "Value anas"
                                },
                                default: false,
                                caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                                imageAssocie: "image.png",
                                createdAt: new Date().toISOString(),
                                updatedAt: new Date().toISOString()
                            },
                            {
                                _id: "1EDRFGBHYE45Y5411",
                                etatobjet: "active",
                                reference: "ref003",
                                translations: {
                                    language: "en",
                                    valeur: "Value brahim"
                                },
                                default: false,
                                caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                                imageAssocie: "image.png",
                                createdAt: new Date().toISOString(),
                                updatedAt: new Date().toISOString()
                            },
                            {
                                _id: "11E4DTRGHR54Y54Y1",
                                etatobjet: "active",
                                reference: "ref003",
                                translations: {
                                    language: "en",
                                    valeur: "Value iman"
                                },
                                default: true,
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
                ],
                icon: 'fa-sol_id fa-chess-rook',
                parent: null,
                sousGroupe: [],
                domain: '12387928742877',
                CreatedAt : new Date('2005/2/3')

            },
            {
                _id: "34534",
                ordre : 3,
                etatobjet: "active",
                reference: "ref001",
                translations: {
                    language: "en",
                    designation: "Group de test de autre e-service",
                    description: "This is Group 1"
                },
                etatValidation: "validated",
                caracteristiques: [
                    {
                        _id: "tyutyuytuetyuteu",
                        etatobjet: "active",
                        reference: "ref002",
                        translations: {
                            language: "en",
                            label: "Characteristic 1",
                            defautleuchar: "Default Char value"
                        },
                        natureInfo: "code_540",
                        typeInfo: "code_1305",
                        defaultValeurNotChar: 'val de string',
                        minVal: 0,
                        maxVal: 100,
                        unite: "unit",
                        operateur: "operator",
                        taxonomie: '4441',
                        groupe: '34534',
                        valeurs: [],
                        etatValidation: "val_idated",
                        imageAssocie: "image.png",
                        instanceCaracteristiques: []
                    },
                    {
                        _id: "113wsdfg53",
                        etatobjet: "active",
                        reference: "ref002",
                        translations: {
                            language: "en",
                            label: "Characteristic 1",
                            defautleuchar: "Default Char"
                        },
                        natureInfo: "code_540",
                        typeInfo: "code_1306",
                        defaultValeurNotChar: 99,
                        minVal: 20,
                        maxVal: 100,
                        unite: "unit",
                        operateur: "operator",
                        taxonomie: '4441',
                        groupe: '34534',
                        valeurs: [],
                        etatValidation: "val_idated",
                        imageAssocie: "image.png",
                        instanceCaracteristiques: []
                    },
                    {
                        _id: "113dsfadga5435345fdfdffgrdcvdavdavg53",
                        etatobjet: "active",
                        reference: "ref002",
                        translations: {
                            language: "en",
                            label: "Characteristic 1",
                            defautleuchar: "Default Char"
                        },
                        natureInfo: "code_540",
                        typeInfo: "code_1307",
                        defaultValeurNotChar: new Date('2024-08-17'),
                        minVal: new Date('2024-08-16'),
                        maxVal: new Date('2028-08-27'),
                        unite: "unit",
                        operateur: "operator",
                        taxonomie: '44443',
                        groupe: '34534',
                        valeurs: [],
                        etatValidation: "val_idated",
                        imageAssocie: "image.png",
                        instanceCaracteristiques: []
                    },
                    {
                        _id: "113sdfgrete244233232ffrefa<fwetge53",
                        etatobjet: "active",
                        reference: "ref002",
                        translations: {
                            language: "en",
                            label: "Characteristic 1",
                            defautleuchar: "Default Char"
                        },
                        natureInfo: "code_540",
                        typeInfo: "code_1308",
                        defaultValeurNotChar: true,
                        minVal: 0,
                        maxVal: 100,
                        unite: "unit",
                        operateur: "operator",
                        taxonomie: '1',
                        groupe: '34534',
                        valeurs: [],
                        etatValidation: "val_idated",
                        imageAssocie: "image.png",
                        instanceCaracteristiques: []
                    },
                    {
                        _id: "113adfgagregwefwefafwerdfagasgdG53",
                        etatobjet: "active",
                        reference: "ref002",
                        translations: {
                            language: "en",
                            label: "Characteristic 1",
                            defautleuchar: "Default Char"
                        },
                        natureInfo: "code_541",
                        typeInfo: "code_1308",
                        defaultValeurNotChar: null,
                        minVal: 0,
                        maxVal: 100,
                        unite: "unit",
                        operateur: "operator",
                        taxonomie: '1',
                        groupe: '34534',
                        valeurs: [
                            {
                                _id: "115TRGHasdfsadfBewR1",
                                etatobjet: "active",
                                reference: "ref003",
                                translations: {
                                    language: "en",
                                    valeur: "Value zakariae"
                                },
                                default:false,
                                caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                                imageAssocie: "image.png",
                                createdAt: new Date().toISOString(),
                                updatedAt: new Date().toISOString()
                            },
                            {
                                _id: "1345Y54wsadfsdfsdfsfe5ETFE11",
                                etatobjet: "active",
                                reference: "ref003",
                                translations: {
                                    language: "en",
                                    valeur: "Value anas"
                                },
                                default: false,
                                caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                                imageAssocie: "image.png",
                                createdAt: new Date().toISOString(),
                                updatedAt: new Date().toISOString()
                            },
                            {
                                _id: "1EDRFGweBHsdfasfwefewf3YE45Y5411",
                                etatobjet: "active",
                                reference: "ref003",
                                translations: {
                                    language: "en",
                                    valeur: "Value brahim"
                                },
                                default: false,
                                caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                                imageAssocie: "image.png",
                                createdAt: new Date().toISOString(),
                                updatedAt: new Date().toISOString()
                            },
                            {
                                _id: "11E4DTRGwe23r42rfHR54Y54Y1",
                                etatobjet: "active",
                                reference: "ref003",
                                translations: {
                                    language: "en",
                                    valeur: "Value iman"
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
                ],
                icon: 'fa-sol_id fa-chess-rook',
                parent: null,
                sousGroupe: [],
                domain: '123879287428774334',
                CreatedAt : new Date('2020/2/3')

            },
            {
                _id: "3453444",
                ordre : 3,
                etatobjet: "active",
                reference: "ref001",
                translations: {
                    language: "en",
                    designation: "Group 2",
                    description: "This is Group 1"
                },
                etatValidation: "validated",
                caracteristiques: [
                    {
                        _id: "tyutyuytuetyuteu",
                        etatobjet: "active",
                        reference: "ref002",
                        translations: {
                            language: "en",
                            label: "Characteristic 1",
                            defautleuchar: "Default Char value"
                        },
                        natureInfo: "code_540",
                        typeInfo: "code_1305",
                        defaultValeurNotChar: 'val de string',
                        minVal: 0,
                        maxVal: 100,
                        unite: "unit",
                        operateur: "operator",
                        taxonomie: '1weefwf',
                        groupe: '3453444',
                        valeurs: [],
                        etatValidation: "val_idated",
                        imageAssocie: "image.png",
                        instanceCaracteristiques: []
                    },
                    {
                        _id: "113wsdfg53",
                        etatobjet: "active",
                        reference: "ref002",
                        translations: {
                            language: "en",
                            label: "Characteristic 1",
                            defautleuchar: "Default Char"
                        },
                        natureInfo: "code_540",
                        typeInfo: "code_1306",
                        defaultValeurNotChar: 99,
                        minVal: 20,
                        maxVal: 100,
                        unite: "unit",
                        operateur: "operator",
                        taxonomie: '2sgfdghgfh',
                        groupe: '3453444',
                        valeurs: [],
                        etatValidation: "val_idated",
                        imageAssocie: "image.png",
                        instanceCaracteristiques: []
                    },
                    {
                        _id: "113dsfadga5435345fdfdffgrdcvdavdavg53",
                        etatobjet: "active",
                        reference: "ref002",
                        translations: {
                            language: "en",
                            label: "Characteristic 1",
                            defautleuchar: "Default Char"
                        },
                        natureInfo: "code_540",
                        typeInfo: "code_1307",
                        defaultValeurNotChar: new Date('2024-08-17'),
                        minVal: new Date('2024-08-16'),
                        maxVal: new Date('2028-08-27'),
                        unite: "unit",
                        operateur: "operator",
                        taxonomie: '3fsghsfgt',
                        groupe: '3453444',
                        valeurs: [],
                        etatValidation: "val_idated",
                        imageAssocie: "image.png",
                        instanceCaracteristiques: []
                    },
                    {
                        _id: "113sdfgrete244233232ffrefa<fwetge53",
                        etatobjet: "active",
                        reference: "ref002",
                        translations: {
                            language: "en",
                            label: "Characteristic 1",
                            defautleuchar: "Default Char"
                        },
                        natureInfo: "code_540",
                        typeInfo: "code_1308",
                        defaultValeurNotChar: true,
                        minVal: 0,
                        maxVal: 100,
                        unite: "unit",
                        operateur: "operator",
                        taxonomie: '1weefwf',
                        groupe: '3453444',
                        valeurs: [],
                        etatValidation: "val_idated",
                        imageAssocie: "image.png",
                        instanceCaracteristiques: []
                    },
                    {
                        _id: "113adfgagregwefwefafwerdfagasgdG53",
                        etatobjet: "active",
                        reference: "ref002",
                        translations: {
                            language: "en",
                            label: "Characteristic 1",
                            defautleuchar: "Default Char"
                        },
                        natureInfo: "code_541",
                        typeInfo: "code_1308",
                        defaultValeurNotChar: null,
                        minVal: 0,
                        maxVal: 100,
                        unite: "unit",
                        operateur: "operator",
                        taxonomie: '1weefwf',
                        groupe: '3453444',
                        valeurs: [
                            {
                                _id: "115TRGHasdfsadfBewR1",
                                etatobjet: "active",
                                reference: "ref003",
                                translations: {
                                    language: "en",
                                    valeur: "Value zakariae"
                                },
                                default:false,
                                caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                                imageAssocie: "image.png",
                                createdAt: new Date().toISOString(),
                                updatedAt: new Date().toISOString()
                            },
                            {
                                _id: "1345Y54wsadfsdfsdfsfe5ETFE11",
                                etatobjet: "active",
                                reference: "ref003",
                                translations: {
                                    language: "en",
                                    valeur: "Value anas"
                                },
                                default: false,
                                caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                                imageAssocie: "image.png",
                                createdAt: new Date().toISOString(),
                                updatedAt: new Date().toISOString()
                            },
                            {
                                _id: "1EDRFGweBHsdfasfwefewf3YE45Y5411",
                                etatobjet: "active",
                                reference: "ref003",
                                translations: {
                                    language: "en",
                                    valeur: "Value brahim"
                                },
                                default: false,
                                caracteriristique: null,  // This would be an instance of CaracteristiqueDemandable
                                imageAssocie: "image.png",
                                createdAt: new Date().toISOString(),
                                updatedAt: new Date().toISOString()
                            },
                            {
                                _id: "11E4DTRGwe23r42rfHR54Y54Y1",
                                etatobjet: "active",
                                reference: "ref003",
                                translations: {
                                    language: "en",
                                    valeur: "Value iman"
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
                ],
                icon: 'fa-sol_id fa-chess-rook',
                parent: null,
                sousGroupe: [],
                domain: '24',
                CreatedAt : new Date('2020/2/3')
            },
        ]
    }


    getGroupeByDomain(domainId: string) {
        return this.getGroupe().filter(group => group.domain === domainId).sort((a : any, b : any) => (a.CreatedAt) - b.CreatedAt)
    }

}
