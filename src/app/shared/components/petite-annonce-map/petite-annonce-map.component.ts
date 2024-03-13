import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { AdressesUtilesService } from '../../services/AdressesUtiles.service';

@Component({
  selector: 'app-petite-annonce-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './petite-annonce-map.component.html',
  styleUrls: ['./petite-annonce-map.component.scss']
})
export class PetiteAnnonceMApComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() latitude: any;
    @Input() longitude: any;
    @Input() id: any;
    map: any;
    marker: any;
    @ViewChild('mapContainer') mapContainer!: ElementRef;
  
    constructor(private addressService: AdressesUtilesService) {}
  
    ngOnInit(): void {
      // Fetch data or perform operations if needed
      console.log(this.latitude);
      console.log(this.longitude);
      console.log(this.id);
    }
  
    ngAfterViewInit(): void {
      this.initMap();
      this.addMarker();
    }
  
    ngOnDestroy(): void {
      if (this.map) {
        this.map.remove(); // Cleanup the map instance when the component is destroyed
      }
    }
  
    ngOnChanges(changes: SimpleChanges): void {
      console.log('Changes:', changes);
  
      if (this.map && (changes['latitude'] || changes['longitude'])) {
        console.log('Updating marker position');
        this.updateMarkerPosition();
      }
    }
  
    private initMap(): void {
      const defaultLatitude = 0;
      const defaultLongitude = 0;
      const defaultZoom = 12;
  
      this.map = L.map(this.mapContainer.nativeElement).setView(
        [defaultLatitude, defaultLongitude],
        defaultZoom
      );
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
        this.map
      );
    }
  
    private addMarker(): void {
      if (this.isValidLocation()) {
        const markerLatLng = [
          parseFloat(this.latitude as string),
          parseFloat(this.longitude as string),
        ];
        const zoomLevel = 15;
        this.map.setView(markerLatLng, zoomLevel);
        this.marker = L.marker([
          parseFloat(this.latitude as string),
          parseFloat(this.longitude as string),
        ]).addTo(this.map);
        this.marker.bindPopup(
          `<b>Location</b><br>Latitude: ${this.latitude}<br>Longitude: ${this.longitude}`
        );
      }
    }
  
    private isValidLocation(): boolean {
      return (
        this.latitude !== undefined &&
        this.longitude !== undefined &&
        (typeof this.latitude === 'string' ||
          typeof this.latitude === 'number') &&
        (typeof this.longitude === 'string' || typeof this.longitude === 'number')
      );
    }
  
    private updateMarkerPosition(): void {
      if (this.isValidLocation()) {
        console.log('Removing existing marker:', this.marker);
        if (this.marker) {
          this.marker.remove(); // Remove existing marker
        }
        this.addMarker(); // Add a new marker with updated position
      }
    }
  }
  
