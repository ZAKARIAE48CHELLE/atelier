import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ads-card',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './ads-card.component.html',
  styleUrls: ['./ads-card.component.scss']
})
export class AdsCardComponent {

}
