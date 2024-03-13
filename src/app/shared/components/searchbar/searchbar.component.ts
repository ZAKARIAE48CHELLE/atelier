import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AnnuaireCardComponent } from 'src/app/components/gestion-annuaire/list-annuaire/annuaire-card.component';

import { trackByHourSegment } from 'angular-calendar/modules/common/util/util';
import { ActeurService } from '../../services/Acteur.service';
import { acteurSocioEcanomique } from '../../models/acteurSocioRcanomique.model';
import { CategoriesComponent } from '../categories/categories.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [CommonModule,CategoriesComponent,RadioButtonModule,ReactiveFormsModule,FormsModule,TranslateModule,AnnuaireCardComponent],
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

@Output() search = new EventEmitter<any>()
secteurActivite : any
localisation : any


  affichage!:string
  searchForm !: FormGroup 
  filteredActeurs : any[] = []
  constructor(private fb : FormBuilder , 
    private acteur : ActeurService,
    private router : Router
    ){
    this.searchForm = this.fb.group({
      secteurActivite : [null, []],
      localisation: [null , []]
    })
  }


  filterActeurs(): acteurSocioEcanomique[] {
    const secteurActiviteInput = this.searchForm.get('secteurActivite')?.value;
    const localisationInput = this.searchForm.get('localisation')?.value;
  
    // Convert input values to lowercase
     this.secteurActivite = secteurActiviteInput ? secteurActiviteInput.toLowerCase() : null;
     this.localisation = localisationInput ? localisationInput.toLowerCase() : null;
  
    return this.acteur.getActeur().filter(acteur => {
      const matchesSecteurActivite = this.secteurActivite ? acteur.SecteurActivitePrincipal.toLowerCase().includes(this.secteurActivite) : true;
      const matchesLocalisation = this.localisation ? acteur.CordonneeGeographique.some(geo => geo.villePrincipale.toLowerCase().includes(this.localisation)) : true;
  
      return matchesSecteurActivite && matchesLocalisation;
    });
  }
  onSearch() : any {

    console.log(this.searchForm.valid);
    

    if(this.searchForm.valid){
      console.log('heeeeeloooooo');
      
      this.filteredActeurs = this.filterActeurs();
     // Do something with the filtered data, like displaying it
     this.acteur.setFilteredData(this.filteredActeurs);
     console.log('searchForm ===========',this.searchForm);
 
     console.log('filteredActeurs ===========',this.filteredActeurs);
     this.navigateto(this.secteurActivite)
     this.navigateto(this.localisation)
    }

  }

    navigateto(secteur : any ){
      this.router.navigateByUrl('/' , {skipLocationChange : true}).then(() =>
      this.router.navigate(['/annuList' , secteur]));
    }







}
