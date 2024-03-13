import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model'
import { Eservice } from '../models/eservice.model';
@Injectable({
    providedIn: 'root',
})
export class EserviceService {
    getEservices(): Eservice[] {
    return [
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
        ];
    }
}
