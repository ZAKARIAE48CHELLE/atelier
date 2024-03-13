import { Component, Input,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { Subscription } from 'rxjs';
import { FilterService } from '../../services/filter.service';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'app-filtre',
  standalone: true,
  imports: [CommonModule,DropdownModule,FormsModule,SidebarModule,SliderModule,ButtonModule,ReactiveFormsModule ],
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.scss']
})
export class FiltreComponent {
  sidebarVisible1: boolean = false;
  @Input() categoryOptions: any[] = [];
  @Input() subCategoryOptions: any[] = [];
  

  filterForm: FormGroup;
  private filterSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private filterService: FilterService) {
    this.filterForm = this.formBuilder.group({
      category: [''],
      subCategory: [''],
      minPrice: [''],
      maxPrice: [''],
      displayPrice: [null],
      
    });

    this.filterSubscription = this.filterForm.valueChanges.subscribe(value => {
      this.filterService.applyFilter(value);
    });
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    if (this.filterSubscription) {
      this.filterSubscription.unsubscribe();
    }
  }
}
