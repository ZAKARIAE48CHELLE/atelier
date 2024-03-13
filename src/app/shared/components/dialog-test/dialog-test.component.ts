import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganisationtreeComponent } from '../organisationtree/organisationtree.component';

@Component({
  selector: 'app-dialog-test',
  standalone: true,
  imports: [CommonModule,OrganisationtreeComponent],
  templateUrl: './dialog-test.component.html',
  styleUrls: ['./dialog-test.component.scss']
})
export class DialogTestComponent {
@Input() acteur :any[]=[]
}
