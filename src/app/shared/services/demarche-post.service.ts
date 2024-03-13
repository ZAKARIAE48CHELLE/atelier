import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { demarche } from '../models/demarche/demarche.model';

@Injectable({
  providedIn: 'root',
})
export class DemarcheService{
    private demarche: demarche[] = [
    {
      _id: '1',
      taxoGeographique: 'Tangier morocco',
      taxoDemarche: 'Tangier morocco',
      transalations : {
        designation: 'PassPort',
        description: 'Many legal guardians and schools shop around before they decide where they want to send their children to school. The purchase process begins long before prospective customers contact the institution to enquire about its offerings. Some of the spaces where potential customers find information on schools include; websites, brochures, flyers, and prospectuses.',
      },
      image_representative: 'assets/images/Pass-maroc.png',
      delai_Moyen: 3,
      uniteDelai: 'Mois',
      cout_Moyen: 0,
      monnaie : 'MAD',
      pieceDoc : [
        {
        translations : {
          Designation: 'CNIE',
          Description: 'Many legal guardians and schools shop around before they decide where they want to send their children to school. The purchase process begins long before prospective customers contact the institution to enquire about its offerings. Some of the spaces where potential customers find information on schools include; websites, brochures, flyers, and prospectuses.',
      },
      Nombre_originale: 0,
      Nombre_copie_conforme:0,
      Nombre_copie_simple : 0,
      Duree_Validite : 0,
      Indication_tarifaire : 0,
      Unite_duree : 'jours',
      monnaie : 'MAD',
      demarche: {
        _id: '1',
        taxoGeographique: '',
        taxoDemarche: '',
        transalations : {
          designation: 'CNIE',
          description: 'Many legal guardians and schools shop around before they decide where they want to send their children to school. The purchase process begins long before prospective customers contact the institution to enquire about its offerings. Some of the spaces where potential customers find information on schools include; websites, brochures, flyers, and prospectuses.',
        },
        image_representative: 'assets/images/cnie.jpg',
        delai_Moyen: 3,
        uniteDelai: 'Mois',
        cout_Moyen: 0,
        monnaie : 'MAD',
        pieceDoc : [],
      },
      },
      {
        translations : {
          Designation: 'attestation scholaire',
          Description: 'Many legal guardians and schools shop around before they decide where they want to send their children to school. The purchase process begins long before prospective customers contact the institution to enquire about its offerings. Some of the spaces where potential customers find information on schools include; websites, brochures, flyers, and prospectuses.',
      },
      Nombre_originale: 0,
      Nombre_copie_conforme:0,
      Nombre_copie_simple : 0,
      Duree_Validite : 0,
      Indication_tarifaire : 0,
      Unite_duree : 'jours',
      monnaie : 'MAD',
      demarche: {
        _id: '1',
        taxoGeographique: '',
        taxoDemarche: '',
        transalations : {
          designation: 'Demander Une Certificat Négatif',
          description: 'Many legal guardians and schools shop around before they decide where they want to send their children to school. The purchase process begins long before prospective customers contact the institution to enquire about its offerings. Some of the spaces where potential customers find information on schools include; websites, brochures, flyers, and prospectuses.',
        },
        image_representative: 'assets/images/cnie.jpg',
        delai_Moyen: 3,
        uniteDelai: 'Mois',
        cout_Moyen: 0,
        monnaie : 'MAD',
        pieceDoc : [],
      },
      },
      {
        translations : {
          Designation: 'Demander Une Certificat Négatif',
          Description: 'Many legal guardians and schools shop around before they decide where they want to send their children to school. The purchase process begins long before prospective customers contact the institution to enquire about its offerings. Some of the spaces where potential customers find information on schools include; websites, brochures, flyers, and prospectuses.',
      },
      Nombre_originale: 0,
      Nombre_copie_conforme:0,
      Nombre_copie_simple : 0,
      Duree_Validite : 0,
      Indication_tarifaire : 0,
      Unite_duree : 'jours',
      monnaie : 'MAD',
      demarche: {
        _id: '1',
        taxoGeographique: '',
        taxoDemarche: '',
        transalations : {
          designation: 'Demander Une Certificat Négatif',
          description: 'Many legal guardians and schools shop around before they decide where they want to send their children to school. The purchase process begins long before prospective customers contact the institution to enquire about its offerings. Some of the spaces where potential customers find information on schools include; websites, brochures, flyers, and prospectuses.',
        },
        image_representative: 'assets/images/cnie.jpg',
        delai_Moyen: 3,
        uniteDelai: 'Mois',
        cout_Moyen: 0,
        monnaie : 'MAD',
        pieceDoc : [],
      },
      },
      
    ]
    }
    ]
 


    getDemarchePost(): Observable<demarche[]> {
    return of(this.demarche);
  }
  getDemarchePostById(id: string): Observable<demarche| undefined> {
    console.log('Fetching demarche by ID:', id);
    const selectedDemarche = this.demarche.find((demarche) => demarche._id === id);
    console.log('Selected demarche:', selectedDemarche);
    return of(selectedDemarche);
  }


}
