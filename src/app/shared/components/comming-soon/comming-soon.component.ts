import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comming-soon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.scss']
})
export class CommingSoonComponent {

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
  private interval: any;

  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }

  private startTimer(): void {
    this.interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.countDownDate - now;

      if (distance < 0) {
        clearInterval(this.interval);
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      } else {
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
