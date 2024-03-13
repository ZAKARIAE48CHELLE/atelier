import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { acteurSocioEcanomique } from 'src/app/shared/models/acteurSocioRcanomique.model';
import { ActeurService } from 'src/app/shared/services/Acteur.service';
import { ActivatedRoute } from '@angular/router';
import { RatingModule } from 'primeng/rating';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { AnnuaireContactFormComponent } from 'src/app/shared/components/forum/annuaire-contact-form/annuaire-contact-form.component';
import { DialogService } from 'primeng/dynamicdialog';
import { MapComponent } from 'src/app/shared/components/map/map.component';
import { MapDialogComponent } from 'src/app/shared/components/map-dialog/map-dialog.component';
import { MenuItem, TreeNode } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';

import { TabPanel, TabView, TabViewModule } from 'primeng/tabview';
import { HoraireComponent } from 'src/app/shared/components/horaire/horaire.component';
import { QuestionReponseComponent } from 'src/app/shared/components/question-reponse/question-reponse.component';
import { ForumReviewsComponent } from "../../../shared/components/forum/forum-reviews/forum-reviews.component";
import { CommentPipe } from 'src/app/shared/pipes/innerFormat.pipe';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { organigramePersonnel } from 'src/app/shared/models/organigramePersonnel.model';
import { OrganigrameStructure } from 'src/app/shared/models/organigrameStructure.model';
import { OrganisationtreeComponent } from 'src/app/shared/components/organisationtree/organisationtree.component';
import { TemoignageComponent } from '../../temoignage/temoignage.component';
import { MarqueRepresentationComponent } from 'src/app/shared/components/marque-representation/marque-representation.component';
import { SocialMediaComponent } from 'src/app/shared/components/social-media/social-media.component';
import { CarouseleComponent } from 'src/app/shared/components/carousele/carousele.component';
import { PetiteAnnonceBigCarouselComponent } from 'src/app/shared/components/petite-annonce-big-carousel/petite-annonce-big-carousel.component';
import { CatalogueComponent } from 'src/app/shared/components/catalogue/catalogue.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TagsComponent } from 'src/app/shared/components/tags/tags.component';
import { SliderCarateristiqueComponent } from 'src/app/shared/components/slider-carateristique/slider-carateristique.component';
import { EvenmentComponent } from 'src/app/shared/components/events/evenment/evenment.component';
import { SingleEventComponent } from 'src/app/shared/components/events/single-event/single-event.component';
import { EservicesteperComponent } from 'src/app/shared/components/e-service/devis-steper/eservicesteper/eservicesteper.component';
import { ReclamationStepComponent } from 'src/app/shared/components/e-service/reclamation/reclamation-step/reclamation-step.component';
import { SteperComponent } from 'src/app/shared/components/e-service/autre Eservice/steper/steper.component';
@Component({
    selector: 'app-annuaire-details',
    standalone: true,
    templateUrl: './details-annuaire.component.html',
    styleUrls: ['./details-annuaire.component.scss'],
    imports: [
        CommonModule,
        TabViewModule,
        RatingModule,
        ReactiveFormsModule,
        FormsModule,
        ButtonModule,
        MapComponent,
        TranslateModule,
        HoraireComponent,
        QuestionReponseComponent,
        ForumReviewsComponent,
        AvatarModule,
        CommentPipe,
        OrganizationChartModule,
        OrganisationtreeComponent,
        TemoignageComponent,
        MarqueRepresentationComponent,
        QuestionReponseComponent,
        SocialMediaComponent,
        CarouseleComponent,
        PetiteAnnonceBigCarouselComponent,
        CatalogueComponent,
        BreadcrumbModule,
        TagsComponent,
        SliderCarateristiqueComponent,
        EvenmentComponent,
        SingleEventComponent,
        EservicesteperComponent,
        ReclamationStepComponent,
        SteperComponent

    ]
})
export class AnnuaireDetailsComponent {

  activeIndex: number = 0;
  node: TreeNode[] = [];

  acteur: acteurSocioEcanomique | undefined;
  ref: any;
  gearIcon = 'bi bi-gear';

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;
  document : any[]= []

  constructor(
    private acteurService: ActeurService,
    private route: ActivatedRoute,
    private dialogService: DialogService,
    private translate: TranslateService,

  ) {}
  ngOnInit() {
    // console.log('Component initialized');
    this.route.params.subscribe((params) => {
      const id = params['id'];
      // console.log('ID from route params:', id);

      this.acteurService.getActeurById(id).subscribe((acteur) => {
        // console.log('Received petiteAnnonce:', acteur);
        this.acteur = acteur;
      });
    });

    this.items = [{ label: 'categories' }, { label: 'restaurant' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
    
  // console.log('nooode',this.node);
    //@ts-ignore
  this.document = this.acteur?.contennuMMedia.filter(doc =>{
    return doc.typeContenu === 'document'
  })



  }


  logToConsole(message: string, data: any): void {
    // console.log(message, JSON.stringify(data));
  }

  DiaOpen() {
    this.ref = this.dialogService.open(AnnuaireContactFormComponent, {
      header: 'Contact US',
      width: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {
        ActeurEmail: this.acteur?.email,
        longitude : this.acteur?.CordonneeGeographique[0]?.longitude,
        latitude : this.acteur?.CordonneeGeographique[0]?.latitude,
        telephone : this.acteur?.telephone,
        whatsapp : this.acteur?.fax
      },
    });
  }


  navigateToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  downloadDocument(media: any) {
    // Assuming media.url contains the URL of the document file
    const downloadUrl = media.file;
    // Create an anchor element
    const anchor = document.createElement('a');
    anchor.href = downloadUrl;
    anchor.target = media.file; // Open in a new tab
    anchor.download = media.translations.titreDoc; // Set the downloaded file's name
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }



}