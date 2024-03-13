import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../map/map.component';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-map-dialog',
  standalone: true,
  imports: [CommonModule, MapComponent],
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.scss'],
})
export class MapDialogComponent {
  @Input() latitude: any;
  @Input() longitude: any;
  @Input() id: any;
  constructor(private config: DynamicDialogConfig) {
    this.latitude = this.config.data.latitude;
    this.longitude = this.config.data.longitude;
    this.id = this.config.data.id;
  }
}
