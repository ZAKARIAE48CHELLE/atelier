import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './shared/components/footerolod/footer.component';
import { FAQsComponent } from './components/faqs/faqs.component';

import { QuizCardsComponent } from './shared/components/cards/quiz-cards/quiz-cards.component';
import { TemoignageComponent } from './components/temoignage/temoignage.component';

import { LayoutComponent } from './shared/components/layout/layout.component';

import { Page404Component } from './components/page404/page404.component';

import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { AnnuaireDetailsComponent } from './components/gestion-annuaire/detail-annuaire/details-annuaire.component';
import { AnnuaireCardComponent } from './components/gestion-annuaire/list-annuaire/annuaire-card.component';
import { SocialMediaComponent } from './shared/components/social-media/social-media.component';
import { CatalogueComponent } from './shared/components/catalogue/catalogue.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DevisComponent } from './shared/components/e-service/devis-steper/devis/devis.component';
import { EservicesteperComponent } from './shared/components/e-service/devis-steper/eservicesteper/eservicesteper.component';
import { ReclamationStepComponent } from './shared/components/e-service/reclamation/reclamation-step/reclamation-step.component';
import { CaracteristiqueComponent } from './shared/components/gestion-caracteristiques/add-caracteristique/caracteristique.component';
import { AddEserviceComponent } from './components/e-service/gestion-eservice/add-eservice/add-eservice.component';

const routes: Routes = [
  {
    path : '',
    component : LandingpageComponent
  },
  {
    path: 'annuList/:sercteur',
    component: AnnuaireCardComponent,
  },
  {
    path: 'faq',
    component: FAQsComponent,
  },

  {
    path: 'annudet/:id',
    component: AnnuaireDetailsComponent,
  },



  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'tem',
    component : TemoignageComponent
  },
 //to remouve 
 {
    path : 'es',
    component: AddEserviceComponent
 },

 {
  path : 'so',
  component : SocialMediaComponent
 },
 {
  path: 'log',
  component : LoginComponent
 },
 {
  path: 'reg',
  component : RegisterComponent
 },

  
  {path : '**' , component : Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule
],
})
export class AppRoutingModule {}
