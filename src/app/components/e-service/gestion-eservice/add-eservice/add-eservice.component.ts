import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EserviceService } from 'src/app/shared/services/eservice.service';

@Component({
  selector: 'app-add-eservice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-eservice.component.html',
  styleUrls: ['./add-eservice.component.scss']
})
export class AddEserviceComponent {
  data: any[]=[]
constructor(private EserviceService : EserviceService) {}

ngOnInit(){
  this.data = this.EserviceService.getEservices();
  

  console.log('======>>>>>',this.data);



}




}
