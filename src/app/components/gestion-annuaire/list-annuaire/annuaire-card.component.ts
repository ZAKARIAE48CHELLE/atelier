import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActeurService } from 'src/app/shared/services/Acteur.service';
import { acteurSocioEcanomique } from 'src/app/shared/models/acteurSocioRcanomique.model';
import { AnnuaireContactFormComponent } from 'src/app/shared/components/forum/annuaire-contact-form/annuaire-contact-form.component';
import { SearchbarComponent } from 'src/app/shared/components/searchbar/searchbar.component';
@Component({
  selector: 'app-annuaire-card',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RatingModule,
    ReactiveFormsModule,
    SearchbarComponent,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './annuaire-card.component.html',
  styleUrls: ['./annuaire-card.component.scss'],
})
export class AnnuaireCardComponent {
  acteurs: any;
  ref!: DynamicDialogRef;
  value = 4;

  @Input() filtredActuer :any[] = []
  filteredData: any[]=[]; // Replace 'any' with your data type




  constructor(
    private dialogService: DialogService,
    private router: Router,
    private acteurService: ActeurService
  ) {}
 

ngOnInit() {
    this.filteredData = this.acteurService.getFilteredData();

}

  DiaOpen(Acteur : acteurSocioEcanomique) {
    this.ref = this.dialogService.open(AnnuaireContactFormComponent, {
      header: 'Contact US',
      width: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data : {
        ActeurEmail : Acteur.email,
        longitude : Acteur.CordonneeGeographique[0].longitude,
        latitude : Acteur.CordonneeGeographique[0].latitude,
        telephone : Acteur.telephone,
        whatsapp : Acteur.fax
      }
    });
  }

  goToDetails(id: string) {
    console.log('Navigating to details for ID:', id);
    this.router.navigate(['/annudet', id]);
  }
}
