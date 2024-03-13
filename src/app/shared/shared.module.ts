import { HttpClientModule, HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { FlatpickrModule } from "angularx-flatpickr";
import { DialogModule } from "primeng/dialog";
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { AppRoutingModule } from "../app-routing.module";
import { AppComponent } from "../app.component";

import { LongClassicCardComponent } from "./components/cards/long-classic-card/long-classic-card.component";
import { PostcardsComponent } from "./components/cards/postcards/postcards.component";
import { FooterComponent } from "./components/footerolod/footer.component";
import { NavbarComponent } from "./components/navbar-journal/navbar.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { ElapsedTimePipe } from "./pipes/elapsedTime.pipe";
import { LayoutComponent } from "./components/layout/layout.component";

@NgModule({
  declarations: [LayoutComponent, AppComponent],
  providers: [DialogService, DynamicDialogConfig, DynamicDialogRef],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NavbarComponent,
    SideBarComponent,
    DialogModule,
    BrowserAnimationsModule,
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
  ],
  exports: [SideBarComponent, LayoutComponent, FooterComponent],
})
export class sharedModule {}
