import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Parallax from 'parallax-js';
@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component {
  @ViewChild('scene') sceneElement!: ElementRef;

  ngAfterViewInit() {
    // Ensure the element is available

      if (this.sceneElement.nativeElement) {
        new Parallax(this.sceneElement.nativeElement);
      }
    }
  
}
