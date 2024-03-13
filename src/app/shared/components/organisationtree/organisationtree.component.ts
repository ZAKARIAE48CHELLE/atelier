import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TreeNode } from 'primeng/api';
import { organigramePersonnel } from '../../models/organigramePersonnel.model';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DialogTestComponent } from '../dialog-test/dialog-test.component';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-organisationtree',
  standalone: true,
  imports: [CommonModule,OrganizationChartModule,DialogModule,ButtonModule,DialogTestComponent],
  templateUrl: './organisationtree.component.html',
  styleUrls: ['./organisationtree.component.scss']
})
export class OrganisationtreeComponent {
  @Input() type : any ; 
  @Input() acteur : any ;
  node: TreeNode[] = [];
  @Output() structureClick: EventEmitter<any> = new EventEmitter<any>();
  selectedNodes !: TreeNode[];
  visible: boolean = false;
  popupnode : TreeNode[]=[]
  ref!: DynamicDialogRef;
constructor( private dialogService : DialogService ,        private config : DynamicDialogConfig,
  ){
    if(this.config?.data){
      this.type = this.config.data?.type
      this.acteur = this.config.data?.event
    }


    
    console.log('default type',this.type);

}
  ngOnInit(){
    
    console.log(this.type,'------',this.config.data?.type);
    
    if(this.type == 'personnel') {
      this.initializeTreeNodes(this.acteur?.organigramePersonnel, this.type);
      console.log('this.acteur?.organigramePersonnel',this.acteur?.organigramePersonnel);
      
    }else if(this.type == 'structure'){
      this.initializeTreeNodes(this.acteur?.OrganigrameStructure ,this.type );
      console.log('this.acteur?.OrganigrameStructure',this.acteur?.OrganigrameStructure);
    }else if(this.type == 'structurePerso') {
      this.initializeTreeNodes(this.acteur?.organigramePersonnel, this.type);
      console.log('this.acteur?.event',this.config.data?.event?.organigramePersonnel);
      
    }

  }
  initializeTreeNodes(personnel: any[] | undefined,type : any, parentId?: string): TreeNode[] {
    const result: TreeNode[] = [];
    
    if(type == 'personnel' || type ==  'structurePerso') {
      
      if (!personnel) {
        return result;
      }
      personnel.forEach(person => {
        const newNode: TreeNode = {
          expanded: true,
          type: 'person',
          // styleClass: 'bg-blue-300	 text-white',
          data: {
            id: person._id,
            parentId: parentId,
            image: person.photo,
            name: `${person.nom} ${person.prenom}`,
            title: person.fonction,
          },
          children: this.initializeTreeNodes(person.organigramePersonnelAsso, type , person._id),
        };
    
        result.push(newNode);
      });  
    }else if(type == 'structure'){

      if (!personnel) {
      return result;
    }
    personnel.forEach(person => {
      const newNode: TreeNode = {
        expanded: true,
        type: 'person',
        // styleClass: 'bg-blue-300	 text-white',
        data: {
          id: person._id,
          parentId: parentId,
          name: `${person.typeStructure} : ${person.nom}`,
          title: person.Effectif,
          alldata : person
        },
        children: this.initializeTreeNodes(person.OrganigrameStructureAsso, type , person._id),

      };
      result.push(newNode);
    }); 
    }
   
      return  this.node = result;
    
    
  }


  onStructureNodeClick(event: any) {

      this.structureClick.emit(event.node.data);
    // console.log('this.selectedNodes',this.selectedNodes);
    console.log('event.node.data',event.node.data.alldata);
    
    // this.initializeTreeNodes(event.node.data.alldata.organigramePersonnel, 'structurePerso');
    if(this.type == 'structure')
    this.ref = this.dialogService.open(OrganisationtreeComponent, {
      header: 'employer',
      width: '60%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {
      event : event.node.data.alldata,
      type : 'structurePerso'
      },
    });
  }
  
  



 



}
