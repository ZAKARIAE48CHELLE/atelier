import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-caracteristiques',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-caracteristiques.component.html',
  styleUrls: ['./details-caracteristiques.component.scss']
})
export class DetailsCaracteristiquesComponent {
@Input() caracteristiques :any[] = []
@Input() groupe : any[] = []
@Input() selectedCaracteristiques : any[] =[]
@Input() groupesCaracteristiques : any[] = []
@Input() Values : any[] = []
ngOnInit(){
  console.log();
  
  console.log('========>',{caracteristiques :this.caracteristiques});
  
  this.caracteristiques.filter((c : any) => c.value)
  this.groupCaracteristique()
  console.log(this.caracteristiques);
  
}

groupCaracteristique() {
  console.log({ selectedCharacteristics: this.caracteristiques });
  this.groupesCaracteristiques = [];

  for (let c of this.caracteristiques) {
    const groupId = c.groupe._id;
    const characteristicId = c.characteristic._id;

    // Check if the group with the same ID already exists in groupesCaracteristiques
    let groupIndex = this.groupesCaracteristiques.findIndex(group => group._id === groupId);

    if (groupIndex === -1) {
      // If the group doesn't exist, create it and add the full group object along with the characteristic
      this.groupesCaracteristiques.push({
        ...c.groupe, // Full group object
        selectedCharacteristics: [{
          characteristic: c.characteristic,
          values: [c.value]  // Store the value as an array
        }]
      });
    } else {
      // If the group already exists, check if the characteristic exists in selectedCharacteristics array
      let characteristicIndex = this.groupesCaracteristiques[groupIndex].selectedCharacteristics.findIndex((charac : any) => charac.characteristic._id === characteristicId);

      if (characteristicIndex === -1) {
        // If the characteristic doesn't exist, add it to selectedCharacteristics array with its value as an array
        this.groupesCaracteristiques[groupIndex].selectedCharacteristics.push({
          characteristic: c.characteristic,
          values: [c.value]  // Store the value as an array
        });
      } else {
        // If the characteristic already exists, push its value to the existing values array
        this.groupesCaracteristiques[groupIndex].selectedCharacteristics[characteristicIndex].values.push(c.value);
      }
    }
  }

  console.log({ groupesCaracteristiques: this.groupesCaracteristiques });
}













}
