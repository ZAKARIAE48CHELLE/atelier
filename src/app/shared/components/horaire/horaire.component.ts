import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-horaire',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './horaire.component.html',
  styleUrls: ['./horaire.component.scss'],
})
export class HoraireComponent {
  @Input() DayDebut: string = '';
  @Input() Dayfin: string = '';
  @Input() heurDebut: string = '';
  @Input() heurFin: string = '';

  // Assuming you have a work time object structure with keys as days
   workTime: any = {};

  ngOnInit() {
    this.workTime = {
      DayDebut: this.DayDebut,
      Dayfin: this.Dayfin,
      heurDebut: this.heurDebut.toString(),
      heurFin: this.heurFin.toString(),
    };
  }

   getDaysArray(): string[] {
    const days = [
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
      'Dimanche',
    ];

    const startIndex = days.indexOf(this.workTime.DayDebut);
    const endIndex = days.indexOf(this.workTime.Dayfin);

    if (startIndex !== -1 && endIndex !== -1) {
      return days.slice(startIndex, endIndex + 1);
    } else {
      return [];
    }
  }

   getDayLabel(day: string): string {
    const dayLabels: { [key: string]: string } = {
      Dimanche: 'Dimanche',
      Lundi: 'Lundi',
      Mardi: 'Mardi',
      Mercredi: 'Mercredi',
      Jeudi: 'Jeudi',
      Vendredi: 'Vendredi',
      Samedi: 'Samedi',
    };

    return dayLabels[day] || '';
  }
}
