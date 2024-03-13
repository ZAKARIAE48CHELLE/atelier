import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CarouselModule } from 'primeng/carousel'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { DetailsEventsComponent } from '../details-events/details-events.component'
import { CalendarComponent } from '../../calendar/calendar.component'
import { TranslateModule } from '@ngx-translate/core'
@Component({
  selector: 'app-evenment',
  standalone: true,
  imports: [CommonModule, CarouselModule, TranslateModule],
  templateUrl: './evenment.component.html',
  styleUrls: ['./evenment.component.scss']
})
export class EvenmentComponent {
  @Input() events: any[] = []
  responsiveOptions: any[] = []
  currentEvents: any[] = []
  oldevents: any[] = []
  ref!: DynamicDialogRef

  constructor (private dialogService: DialogService) {}

  ngOnInit () {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ]
    this.currentEvents = this.events.filter(event => {
      return event.dateFin >= new Date()
    })

    this.oldevents = this.events.filter(event => {
      return event.dateFin < new Date()
    })
  }
  Details (event: any) {
    this.ref = this.dialogService.open(DetailsEventsComponent, {
      header: event.translations.designation,
      width: '90%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {
        event: event , 
        eventData: this.events
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
