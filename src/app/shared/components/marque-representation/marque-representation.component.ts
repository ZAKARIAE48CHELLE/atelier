import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-marque-representation',
  standalone: true,
  imports: [CommonModule,AvatarModule],
  templateUrl: './marque-representation.component.html',
  styleUrls: ['./marque-representation.component.scss']
})
export class MarqueRepresentationComponent {
  @Input() marquetopresent : any[] = []
  constructor(){
    console.log('-+-+-+-+-+-+-+-+-+-',this.marquetopresent);
    
  }
}
