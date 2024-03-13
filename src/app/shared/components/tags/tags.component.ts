import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule,TagModule,TranslateModule],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

  @Input() tags: any[] = [];
  isCollapsed: boolean = true; 

  collapsed(){
  this.isCollapsed = !this.isCollapsed
  }



}
