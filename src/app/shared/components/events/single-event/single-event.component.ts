import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsEventsComponent } from '../details-events/details-events.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CalendarComponent } from '../../calendar/calendar.component';

@Component({
  selector: 'app-single-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.scss']
})
export class SingleEventComponent {

  @Input() events : any[] = [];
  lastEvent : any
  image : any[] = [];
  currentEvents: any[] = []
  largestImage!: string ;
  ref!: DynamicDialogRef

  constructor (private dialogService: DialogService) {}



  ngOnInit() {
    const currentEvents = this.events.filter(event => event.dateFin >= new Date());

    this.lastEvent = currentEvents.slice(0, 1)[0];

    if (this.lastEvent && this.lastEvent.images && this.lastEvent.images.length > 0) {
      // Find the largest image URL
      const largestImageIndex = this.lastEvent.images.reduce((maxIndex: number, currentImageUrl: string, currentIndex: number, imageUrls: string[]) => {
        if (currentIndex === 0 || (currentIndex !== 0 && currentImageUrl.length > imageUrls[maxIndex].length)) {
          return currentIndex;
        } else {
          return maxIndex;
        }
      }, 0);

      this.largestImage = this.lastEvent.images[largestImageIndex];
    }

    console.log('Largest image URLjskhdfgajhskgdfjhagdjhasgfjshadgfjhsadgfjhsdafg:', this.largestImage);
  }

  Details (event: any) {
    this.ref = this.dialogService.open(DetailsEventsComponent, {
      header: 'details',
      width: '90%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {
        event: event
      }
    })
  }
  reserver(){
    this.ref = this.dialogService.open(CalendarComponent, {
      header: 'details',
      width: '90%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {
        event: event
      }
    })
  }


}