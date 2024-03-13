import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { TranslateModule } from '@ngx-translate/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, TimelineModule, TranslateModule, AvatarModule, AvatarGroupModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  @Input() event: any
  @Input() eventsData: any[] = []
  events: any[] = [];
  children: any[] = []
  protagoniste: any[] = []
  selectedEvent: any;
  lieuConcerne: any[] = []
  coordone: any
  ngOnInit() {
    this.events = this.transformData(this.event.programmeEvent);
    console.log('eveeeent', this.events);
    console.log('this.eventsData/*/*/*/*/*/*/*//*-*/-*/-*/-*/-*/-*/-*/-*/-*/+98+98798798', this.eventsData);
  }

  buttonClicked: boolean = false;



  transformData(eventData: any[]): any[] {
    eventData.sort((a, b) => new Date(a.dateHeureDebut).getTime() - new Date(b.dateHeureDebut).getTime());
    const transform = (events: any, parent: any) => {
      let items :any= []
      for (let event of events) {
        let item :any= {
          _id : event._id ,
          descriptif: event.translations.description,
          status: event.translations.designation || event.translations.titre || event.translations.title,
          date: event.dateHeureDebut,
          icon: 'pi pi-box' ,
          color: '#fff',
          protagoniste :event.protagonistePotentiel,
          lieuConcerne : event.lieuConcerne,
          children: []  
        }
        if (event.programmeEventChildren?.length) {
          item.children = transform(event.programmeEventChildren, item)
        }
        if(parent )
        item.parent = parent
        items.push(item)
      }
      return items;
    }
    let data = transform(this.event.programmeEvent, null)
    console.log({data});
    return data


  }
  toggleButtonClicked() {
    this.buttonClicked = !this.buttonClicked;
  }

  clickedButtonId: any | null = null;

    // Show details logic
    // Set the ID of the clicked button
    showDetails(event: any) {
      this.selectedEvent = event;
      
      if(!event.parent){
        this.clickedButtonId = event._id;
        this.toggleButtonClicked();
      }

      console.log('haaaaaaaaaaaaaaaaaaaaaaaaaada id', this.selectedEvent);
      
    console.log('this.lieuConcerne/*/*/*/*/*/*/*/*/*/*/', this.selectedEvent)
  }

  cleardetails() {
    this.selectedEvent = null;
    this.protagoniste = []
    this.children = []
    this.clickedButtonId = null;

  }


  
}
