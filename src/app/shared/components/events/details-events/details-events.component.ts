import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouseleComponent } from '../../carousele/carousele.component';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { TimelineModule } from 'primeng/timeline';
import { TranslateModule } from '@ngx-translate/core';
import { TimelineComponent } from '../timeline/timeline.component';
import { LocalisationsComponent } from '../../localisations/localisations.component';
import { TabViewModule } from 'primeng/tabview';
@Component({
  selector: 'app-details-events',
  standalone: true,
  imports: [CommonModule,CarouseleComponent,TabViewModule,TimelineModule,TranslateModule,TimelineComponent,LocalisationsComponent],
  templateUrl: './details-events.component.html',
  styleUrls: ['./details-events.component.scss']
})
export class DetailsEventsComponent {
@Input() event  : any
@Input() eventData : any [] = []
constructor(
  private config : DynamicDialogConfig,
){
  if(this.config?.data){
    this.event = this.config.data?.event
    this.eventData = this.config.data?.eventData
  }
}
















}
