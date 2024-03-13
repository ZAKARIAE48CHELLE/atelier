import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { instanceCaracteristique } from '../../../models/instanceCaracteristique.model';
import { ValeurCaracteristique } from '../../../models/ValeurCaracteristique.model';
import { CaracteristiqueDemandable } from '../../../models/CaracteristiqueDemandable.model';
@Component({
  selector: 'app-caracteristique',
  standalone: true,
  imports: [CommonModule, CheckboxModule, InputSwitchModule, RadioButtonModule, InputNumberModule, CalendarModule, ReactiveFormsModule, InputTextModule, FormsModule],
  templateUrl: './caracteristique.component.html',
  styleUrls: ['./caracteristique.component.scss']
})
export class CaracteristiqueComponent implements OnChanges {
  @Input() selectedValuesFrom: any[] = [];
  @Input() useFlex: any;
  @Input() groupFlex: any
  @Input() groupe: any[] = [];
  @Input() selectedCharacteristics: CaracteristiqueDemandable[] = [];
  @Output() selectedData = new EventEmitter<any>();
  @Input() readonly !: boolean
  condition: any
  selectedValue: any;
  checkedInput: any[] = []
  caracteristiqueDefaultValues: any[] = []
  selectedNumber: any | null = null;
  selectedInstanceDate: any | null = null;
  dateTime: any | null = null;
  oldstringValue !: string;
  form: FormGroup;
  SwitchValue: any | null = null
  DefaultredioValue: any
  groupesCaracteristiques: any = []
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedCharacteristicsArray: [[], []]
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    if (changes['selectedValuesFrom'] && changes['selectedValuesFrom'].currentValue?.length) {
     /* this.groupesCaracteristiques =[]
      this.form.get('selectedCharacteristicsArray')?.setValue([])*/
      console.log('1--------------',this.selectedValuesFrom);
      console.log('Group--------',this.groupe);
      this.handleChange(this.selectedValuesFrom)
      this.groupCaracteristique()
    }
    else if (changes['selectedCharacteristics'] && changes['selectedCharacteristics'].currentValue.length > 0) {
      this.groupesCaracteristiques =[]
      this.form.get('selectedCharacteristicsArray')?.setValue([])
      console.log('2--------------',this.selectedCharacteristics);
      this.handleChange(this.selectedCharacteristics)
      this.groupCaracteristique()
    }else{
      console.log('3--------------');
      this.groupesCaracteristiques =[]
      this.form.get('selectedCharacteristicsArray')?.setValue([])
    }
  }

  groupCaracteristique() {
    console.log({ selectedCharacteristics: this.selectedCharacteristics });
    this.groupesCaracteristiques = [];
    let groupIndex = -1;
    let groupe = null;
    let caras : any[]= []
    caras = this.selectedCharacteristics
    for (let c of caras) {
      //@ts-ignore
      groupIndex = this.groupesCaracteristiques.findIndex((g) => g._id == (c.groupe._id || c.groupe));
      //@ts-ignore
      groupe = this.groupe.find((g) => g._id == (c.groupe._id || c.groupe));
      if (groupIndex == -1) {
        this.groupesCaracteristiques.push({ ...groupe, selectedCharacteristics: [c] });
      } else {
        this.groupesCaracteristiques[groupIndex].selectedCharacteristics.push(c);
      }
      console.log({ groupesCaracteristiques: this.groupesCaracteristiques });
    }
  }
  handleChange(data: any[]) {
    this.caracteristiqueDefaultValues = []
    this.checkedInput = []
    this.DefaultredioValue = []
    if (data && data.length) {
      let defaultValues: any[] = []
      for (let item of data) {


        let values: any = item.value ? item.value : item.valeurs ? item.valeurs.filter((v: ValeurCaracteristique) => v.default) : []
        let characteristic = item.value ? item.characteristic : item
        console.log({ characteristic });
        if (values && !(values instanceof Array))
          values = [values]
        if (values.length) {
          if (characteristic.natureInfo == 'code_542') {
            this.checkedInput.push(...values);
            console.log(values);
          }
          //@ts-ignore
          const groupe = this.groupe.find(g => g._id === (characteristic.groupe._id || characteristic.groupe))
          values.map((v: any) => defaultValues.push({ characteristic, value: v, groupe }))
        }
        if (characteristic.natureInfo == 'code_540') {
          let value: any
          //@ts-ignore
          const groupe = this.groupe.find(g => g._id === (characteristic.groupe._id || characteristic.groupe))
          if (characteristic.typeInfo != 'code_1305') {
            value = { _id: characteristic._id, valeurNotChar: characteristic.defaultValeurNotChar, groupe: groupe, caracteristique: characteristic, unite: characteristic.unite, operateur: characteristic.operateur }
            if (characteristic.typeInfo == 'code_1306') {
              this.selectedNumber = value;
            } else if (characteristic.typeInfo == 'code_1307') {
              this.selectedInstanceDate = value;
            } else if (characteristic.typeInfo == 'code_1308') {
              this.SwitchValue = value;
            }
            else if (characteristic.typeInfo == 'code_1320') {
              this.dateTime = value;
            }
          } else {
            value = { _id: characteristic._id, value: characteristic.translations.defautleuchar, groupe: groupe, caracteristique: characteristic, unite: characteristic.unite, operateur: characteristic.operateur }
            this.selectedInstance = value
          }

          this.caracteristiqueDefaultValues.push({ characteristic: characteristic, groupe: groupe, value: value })
        }
        else if (characteristic.natureInfo == 'code_541') {

          this.DefaultredioValue = (values.length ? values : characteristic.valeurs.filter((v: ValeurCaracteristique) => v.default))[0]
          console.log('this.DefaultredioValue ==== :::: ', this.DefaultredioValue);

          if (this.DefaultredioValue) {
            //  if(this.selectedValuesFrom.length)
            for (let s of this.selectedCharacteristics) {
              if (s.valeurs.find((v) => v._id == this.DefaultredioValue._id)) {
                for (let v of s.valeurs) {
                  if (v._id != this.DefaultredioValue._id) {
                    v.default = false
                    v['checked'] = false
                  }
                  else v['checked'] = true
                }
              }
            }
          }
          console.log
            ('s===>', this.selectedCharacteristics)
          console.log('===>', this.DefaultredioValue);

          //this.selectedCharacteristics.find((c)=>)
        }
      }
      console.log('caracteristiqueDefaultValues---------caracteristiqueDefaultValues : ', this.caracteristiqueDefaultValues);
      let allDefaultValues = []
      if (defaultValues.length || this.caracteristiqueDefaultValues.length) {
        console.log('defaultValues:', defaultValues.length);
        console.log('caracteristiqueDefaultValues:', this.caracteristiqueDefaultValues.length);
        /*  this.caracteristiqueDefaultValues.map((c)=>{
            let value = 
            if(defaultValues.find((d)=> d.cara))
          })*/

        if (this.selectedValuesFrom.length) {
          allDefaultValues = defaultValues
        }
        else allDefaultValues = defaultValues.concat(this.caracteristiqueDefaultValues);
        console.log('Combined default values:', allDefaultValues);

      }
      console.log(this.selectedCharacteristics);


      for (let s of this.selectedCharacteristics) {
        if (!allDefaultValues.find((v) => v.characteristic._id == s._id)) {
          //@ts-ignore
          const groupe = this.groupe.find(g => g._id === (s.groupe._id || s.groupe))
          console.log({ groupe });

          allDefaultValues.push({ characteristic: s, groupe: groupe })
        }
      }

      console.log({ allDefaultValues });

      this.addToSelectedCharacteristics(allDefaultValues);
    }
  }

  clearCalendar(event: any, characteristic: any, groupe: any) {
    console.log('characteristic.defaultValeurNotChar', characteristic.defaultValeurNotChar);
    characteristic.defaultValeurNotChar = null;
    console.log('characteristic.defaultValeurNotChar', characteristic.defaultValeurNotChar);
  }

  groupConditions: any
  ngOnInit() {
    console.log('////*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/ this.groupFlex', this.groupFlex);
  }
  newObject(data: any) {
    if (!data)
      return data
    return JSON.parse(JSON.stringify(data))
  }
  handleCheckboxChange(event: any, groupe: any, characteristic: any, value: any) {
    console.log('test===>', event);
    const isSelected = event.checked.find((v: any) => v._id == value._id)
    console.log({ isSelected });

    const selectedValue = { characteristic, value, groupe };
    // const isSelected = this.isSelected(selectedValue, characteristic, groupe);

    if (isSelected) {
      // Checkbox is checked and value is not already selected, add it to the array 
      this.addToSelectedCharacteristics(selectedValue);
    } else {
      // Checkbox is unchecked and value is selected, remove it from the array
      this.removeFromSelectedCharacteristics(selectedValue);
    }
  }


  addToSelectedCharacteristics(selectedValue: any) {
    const selectedCharacteristicsArray = this.form.get('selectedCharacteristicsArray')?.value;
    console.log('in the selected character add function====>', selectedCharacteristicsArray);
    // Check if the object already exists in the array
    if (!selectedValue.length) {
      selectedValue = [selectedValue]
    }
    let existingIndex: any;
    for (let selectedVal of selectedValue) {
      existingIndex = selectedCharacteristicsArray.findIndex((item: any) => {
        if (!selectedVal.value) {
    

          // If the value is not present, check only the characteristic ID
          return item.characteristic._id === selectedVal.characteristic._id
        } else {
          // console.log({ item, selectedVal });


          // If the value is present, check both the characteristic ID and the value ID
          return item.value?._id === selectedVal.value._id;
        }
      });
      console.log('----', existingIndex);
      if (existingIndex === -1) {
        selectedCharacteristicsArray.push(selectedVal);
      } else {
        console.log('Already exists');
        console.log('selectedCharacteristicsArray[existingIndex].value', selectedCharacteristicsArray[existingIndex].value);

        selectedCharacteristicsArray[existingIndex].value = (selectedVal);
      }
    }
    console.log('form value ===>', this.form.get('selectedCharacteristicsArray')?.value);
    this.selectedData.emit(selectedCharacteristicsArray);
    console.log('form value ===>', this.form.get('selectedCharacteristicsArray')?.value);
  }

  removeFromSelectedCharacteristics(selectedValue: any) {
    const selectedCharacteristicsArray = this.form.get('selectedCharacteristicsArray')?.value;
    console.log('had selected value', selectedValue);
    const index = selectedCharacteristicsArray.findIndex((item: any) => {
      console.log('selectedValue:', selectedValue);
      console.log('item:', item);
      console.log('selectedVal:', selectedValue);
      if (!selectedValue.value) {
        // If the value is not present, check only the characteristic ID
        return item.characteristic._id === selectedValue.characteristic._id;
      } else {
        // If the value is present, check both the characteristic ID and the value ID
        return item.value?._id === selectedValue.value._id;
      }
    });
    console.log('index', index);
    if (index !== -1) {
      selectedCharacteristicsArray.splice(index, 1);
      this.selectedData.emit(selectedCharacteristicsArray);
      console.log('Removed from selectedCharacteristicsArray:', selectedValue);
      console.log(selectedCharacteristicsArray, this.form.get('selectedCharacteristicsArray')?.value);

    }
  }
  selectedInstance: any | null = null;


  handleRadioChange(event: any, groupe: any, characteristic: any, value: any) {
    console.log('********************************************************');

    const selectedCharacteristicsArray = this.form.get('selectedCharacteristicsArray')?.value;
    let index = selectedCharacteristicsArray.findIndex((d: any) => d.characteristic._id == characteristic._id)
    if (index != -1)
      selectedCharacteristicsArray.splice(index, 1)
    console.log({ selectedCharacteristicsArray });
    if (event.target.checked) {
      // Check if the value already exists in the array
      const existingIndex = selectedCharacteristicsArray.findIndex((item: any) => {
        return item.characteristic._id === characteristic._id && item.value._id === value._id;
      });

      if (existingIndex !== -1) {
        // If the value already exists, update its selection
        this.selectedCharacteristics[existingIndex].valeurs = value;
        console.log('Updated existing value:', value);
      } else {
        // If the value doesn't exist, add it to the array
        this.addToSelectedCharacteristics({ characteristic: characteristic, value: value, groupe: groupe });
        console.log('Added new value to array:', value);
      }
    } else {
      // Radio button is unchecked, remove the value from the array
      this.removeFromSelectedCharacteristics({ characteristic: characteristic, value: value, groupe: groupe });
      console.log('Removed value from array:', value);
    }
  }
  handleStringInputChange(event: any, characteristic: any, groupe: any) {
    const selectedValue = event.target.value || event;

    console.log('Selected Value:', selectedValue);
    let caracteristique = this.selectedInstance = this.groupesCaracteristiques.find((g: any) => g._id == groupe._id).selectedCharacteristics.find((c: any) => c._id == characteristic._id)
    console.log({ caracteristique });

    if (selectedValue.length) {
      let instance: any;
      if (caracteristique) {

        // If there's no selected instance, create a new one
        instance = {
          _id: Date.now().toString(),
          groupe,
          characteristic,
          value: {
            _id: Date.now().toString(),
            operateur: '=',
            translations: {
              valeurChar: selectedValue
            },
            unite: characteristic.uniteDeValeur
          }
        };
        /*  let data = this.form.get('selectedCharacteristicsArray')?.value;
          console.log({ data });
  
          let index = data.findIndex((d: any) => d.groupe._id == groupe._id && d.characteristic._id == characteristic._id)
          console.log({ index, instance, data: data[index] });
          this.form.get('selectedCharacteristicsArray')?.value.splice(index,1,instance) 
          console.log(this.form.get('selectedCharacteristicsArray')?.value);*/
        this.updateValueInForm(instance, groupe, characteristic)

        // this.selectedInstance = instance;
        // this.addToSelectedCharacteristics({ value: instance, characteristic: characteristic, groupe: groupe });
      }
    }/* else {
      if (this.selectedInstance) {
        this.removeFromSelectedCharacteristics({ value: this.selectedInstance, characteristic: characteristic, groupe: groupe });
        this.selectedInstance = null;
      }
    }*/
  }
  updateValueInForm(instance: any, groupe: any, characteristic: any) {
    let data = this.form.get('selectedCharacteristicsArray')?.value;
    console.log({ data });

    let index = data.findIndex((d: any) => d.groupe._id == groupe._id && d.characteristic._id == characteristic._id)

    if (index != -1) {
      console.log({ index, instance, data: data[index] });
      this.form.get('selectedCharacteristicsArray')?.value.splice(index, 1, instance)
      console.log(this.form.get('selectedCharacteristicsArray')?.value);
      this.selectedData.emit(this.form.get('selectedCharacteristicsArray')?.value);

    }
  }
  handleNumberInputChange(event: any, characteristic: any, groupe: any) {
    const selectedValue = parseFloat(event.target.value.replace(/,/g, '')); // Remove commas from input

    console.log('Selected Value:', selectedValue);

    if (selectedValue) {
      let instance: any;
      if (this.selectedNumber) {
        console.log('updaaaaaaaate :::::', this.selectedNumber);
        console.log('updaaaaaaaate value :::::', selectedValue);

        // If there's already a selected instance, update its value
        instance = {
          groupe, characteristic

        };
        instance.value = { ...this.selectedNumber.value, valeurNotChar: selectedValue }
      } else {
        // If there's no selected instance, create a new one
        instance = {
          _id: Date.now().toString(),
          groupe,
          characteristic,
          value: {
            _id: Date.now().toString(),
            operateur: '<=',
            valeurNotChar: (selectedValue),
            unite: characteristic.unite
          }
        };
      }
      console.log('Instance:', instance);
      this.selectedNumber = instance;
      this.addToSelectedCharacteristics(instance);
    } /*else {
      if (this.selectedNumber) {
        this.removeFromSelectedCharacteristics({ value: this.selectedNumber, characteristic: characteristic, groupe: groupe });
        this.selectedNumber = null;
      }
    }*/
  }
  handelCalendarInput(event: any, characteristic: any, groupe: any) {
    if (event) {
      const selectedValue = event;
      let instance: any;

      if (this.selectedInstanceDate) {

        instance = {
          groupe: groupe,
          characteristic


        };
        instance.value = { ...this.selectedInstanceDate.value, valeurNotChar: selectedValue, }
      } else {
        instance = {
          groupe,
          characteristic,
          value: {
            _id: Date.now().toString(),
            operateur: '=',
            valeurNotChar: selectedValue,
            unite: characteristic.uniteDeValeur
          }
        };
      }

      this.selectedInstanceDate = instance;

this.updateValueInForm(instance ,groupe ,characteristic)
      // this.addToSelectedCharacteristics(instance);
    } /*else {
      if (this.selectedInstanceDate) {
        this.removeFromSelectedCharacteristics({ value: this.selectedInstanceDate, characteristic: characteristic, groupe: groupe });
        this.selectedInstanceDate = null;
      }
    }*/
  }
  handelSwitchInput(event: any, characteristic: any, groupe: any, value: any) {
    console.log('Switch Value:', value);
    const isChecked = event.checked;
    this.SwitchValue.value = isChecked ? characteristic.defaultValeurNotChar : false;
    console.log('Updated Switch Value:', this.SwitchValue);
    this.addToSelectedCharacteristics({ value: this.SwitchValue, characteristic: characteristic, groupe: groupe });
  }


}
