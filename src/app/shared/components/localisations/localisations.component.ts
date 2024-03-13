import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdressesUtilesService } from '../../services/AdressesUtiles.service';
import * as L from 'leaflet';
import { AdressesUtiles } from '../../models/adresseUtil.model';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import 'leaflet-fullscreen';

declare module 'leaflet' {
  interface MapOptions {
    fullscreenControl?: boolean;
  }
}
@Component({
  selector: 'app-localisations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './localisations.component.html',
  styleUrls: ['./localisations.component.scss']
})
export class LocalisationsComponent {
  @Input() locations: any[] = []; // Accepts either a single location or an array of locations
  map: any;
  markers: any[] = [];
  @ViewChild('mapContainer') mapContainer!: ElementRef;
  lieu : any[] = []
  cordonne : any[] = []
  constructor() {}

  ngOnInit(): void {
    // Fetch data or perform operations if needed
    // console.log( 'this.locations',this.locations);
    // this.locations.forEach(instance => {
    //    this.lieu.push(instance.lieuConcerne)  ;
    // });
    // console.log('hada lieu' , this.lieu);
    // this.lieu.forEach(location => {
    //   const { cordonne } = location; 
    //   if (cordonne) {
    //   this.cordonne.push(cordonne);
    //     console.log('cordonne:', this.cordonne);
        
    //   }
    // });

    
      // Fetch data or perform operations if needed
      this.locations.forEach(instance => {
        instance.lieuConcerne.forEach((location: any) => {
          const { cordonne } = location;
          if (cordonne) {
            const { latitude, longitude } = cordonne;
            console.log(cordonne);
            this.addMarker(location); // Add marker for each location
          }
        });
      });
    
    

  }
  
  ngAfterViewInit(): void {
    this.initMap();
    this.displayLocations();
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove(); // Cleanup the map instance when the component is destroyed
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes:', changes);

    if (this.map && changes['locations']) {
      console.log('Updating markers');
      this.clearMarkers();
      this.displayLocations();
    }
  }

  private initMap(): void {
    const defaultLatitude = 0;
    const defaultLongitude = 0;
    const defaultZoom = 12;
  
    this.map = L.map(this.mapContainer.nativeElement, {
      fullscreenControl: true,
    });
  
    // Create an empty bounds object to encompass all markers
    const bounds = L.latLngBounds([]);
  
    // Iterate over each location and extend the bounds
    this.locations.forEach(instance => {
      instance.lieuConcerne.forEach((location: any) => {
        const { cordonne } = location;
        if (cordonne) {
          const { latitude, longitude } = cordonne;
          bounds.extend([parseFloat(latitude), parseFloat(longitude)]);
        }
      });
    });
  
    // Set the map view to fit the bounds with a padding
    this.map.fitBounds(bounds, { padding: [50, 50] });
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  }
  
  
  private displayLocations(): void {
    this.locations.forEach(instance => {
      instance.lieuConcerne.forEach((location : any) => {
        const { cordonne } = location;
        if(location.EtatEtulisation)
        if (cordonne) {
          const { latitude, longitude } = cordonne;
          const marker = L.marker([latitude, longitude]).addTo(this.map);
          marker.bindPopup(`<b>${location.personneAContacte}</b> </br> <p>${location. telPersonne}</p>  <p>${location.emailPersonne}</p> `); // Customize popup content as needed
          this.markers.push(marker);
        }
      });
    });
  }
  
  private addMarker(cordonne: any): void {
    if (cordonne && cordonne.latitude && cordonne.longitude) {
      const { latitude, longitude } = cordonne;
      const markerLatLng: L.LatLngTuple = [parseFloat(latitude), parseFloat(longitude)];
      const marker = L.marker(markerLatLng).addTo(this.map);
      // Customize the marker popup as needed
      marker.bindPopup(`<b>Location</b><br>Latitude: ${latitude}<br>Longitude: ${longitude}`);
      this.markers.push(marker);
    }
  }
  

  private clearMarkers(): void {
    this.markers.forEach(marker => {
      marker.remove();
    });
    this.markers = [];
  }
}

