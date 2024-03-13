import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NavbarComponent } from "./shared/components/navbar-journal/navbar.component";
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from "./shared/components/footerolod/footer.component";
import { FooterComponent as footernew } from "./shared/components/footer/footer.component";

import { DialogModule } from 'primeng/dialog';
import { PostcardsComponent } from "./shared/components/cards/postcards/postcards.component";
import { LongClassicCardComponent } from "./shared/components/cards/long-classic-card/long-classic-card.component";
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import {
  DynamicDialogConfig,
  DynamicDialogRef,
  DialogService,
} from 'primeng/dynamicdialog';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { MapComponent } from './shared/components/map/map.component';
import { ClipboardModule } from 'ngx-clipboard';
import { ButtonModule } from 'primeng/button'; 
import { ToastModule } from 'primeng/toast'; 
import { RippleModule } from 'primeng/ripple'; 
import { ImageModule } from 'primeng/image'; 
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { SubmenuComponent } from './shared/components/submenu/submenu.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  providers: [DialogService, DynamicDialogConfig, DynamicDialogRef,
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey,
    },
  ],

  bootstrap: [AppComponent],
  imports: [
    SubmenuComponent,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NavbarComponent,
    MapComponent,
    SideBarComponent,
    DialogModule,
    ButtonModule,
    ToastModule,
    RippleModule,
    ImageModule,
    FormsModule,
    RecaptchaV3Module,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClipboardModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),

    TranslateModule.forRoot({
      defaultLanguage: localStorage.getItem('lang') || 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) =>
          new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient],
      },
    }),
    FooterComponent,
    PostcardsComponent,
    LongClassicCardComponent,
    footernew,
    HeaderComponent
  ],
})
export class AppModule {}
