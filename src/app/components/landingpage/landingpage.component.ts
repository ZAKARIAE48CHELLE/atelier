import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from 'src/app/shared/components/categories/categories.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ReactiveFormsModule , FormsModule, FormBuilder, FormGroup} from '@angular/forms';
import { acteurSocioEcanomique } from 'src/app/shared/models/acteurSocioRcanomique.model';
import { ActeurService } from 'src/app/shared/services/Acteur.service';
import { Router } from '@angular/router';
import { AnnuaireCardComponent } from '../gestion-annuaire/list-annuaire/annuaire-card.component';
import { SearchbarComponent } from 'src/app/shared/components/searchbar/searchbar.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { CommentPipe } from 'src/app/shared/pipes/innerFormat.pipe';
@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule,CategoriesComponent,CommentPipe,RadioButtonModule,ReactiveFormsModule,FormsModule,AnnuaireCardComponent,SearchbarComponent,HeaderComponent],
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {

  creation = '<p><br></p><h3><span style="color: rgb(0, 102, 204);">Ajouter votre entreprise sur DalilPro<sub>(B2B)</sub></span></h3><p>Plus de 4,5 millions de consommateurs effectuent une recherche chaque mois sur pagesdor.be.</p><p>Votre entreprise figure-t-elle déjà dans le plus grand répertoire d’entreprises en Belgique?</p>'
  






}
