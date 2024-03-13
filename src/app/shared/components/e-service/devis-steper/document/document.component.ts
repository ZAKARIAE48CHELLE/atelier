import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { jsPDF } from 'jspdf';
import "src/app/shared/services/amiri_font.js";
import "src/app/shared/services/Amiri_bold.js";

import * as htmlToImage from "html-to-image";
import autoTable from "jspdf-autotable";
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from 'src/app/shared/services/currencyData.service';
@Component({
  selector: 'app-document',
  standalone: true,
  imports: [CommonModule,
    TableModule,
    ButtonModule,
    TranslateModule,
    InputNumberModule,
    FormsModule
  ],
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {

  @Input() acteur: any;
  @Input() Eservice: any;
  linesTransaction: any[] = [];
  devis: any
  personnel: any
  conditionPaiment: any[] = []
  tabPosition: any
  lang!: string;
  typeStatistique: any;
  typeStatistiqueChoisit: any;
  centreAnnajda!: number;
  listCentre: any;
  currentYear!: string;
  showCentre: any;
  logedInCentre: any;
  enregistrementLegale : any[]=[]
  // Example usage:

  currencyData: any[] = []

  ngOnInit() {
    // console.log('acteuuuur', this.acteur);
    // console.log('this.Eservice', this.Eservice);

    console.log('this.Eservice devis', this.Eservice.get('devis').value);
    this.devis = this.Eservice.get('devis').value;
    console.log('this.devis', this.devis);
    this.personnel = this.Eservice.get('personnel').value;
    console.log('this.personnel', this.personnel);
    this.conditionPaiment = this.acteur.conditionPaiment.sort((a: any, b: any) => a.order - b.order);
    // console.log('  this.conditionPaiment', this.conditionPaiment);

    this.enregistrementLegale = this.acteur.enregistrementLegale
    console.log('this.enregistrementLegale',this.enregistrementLegale);
    

    // Fetch currency data from the service

    this.currencyData = this.CurrencyService.getCurrency();
    // console.log('this.currencyData', this.currencyData);
  }
  constructor(private CurrencyService: CurrencyService) { }

  @ViewChild('tableRef') tableRef!: ElementRef;

  isExpanded = false;
  show = true;
  DateNow = formatDate(Date.now(), "dd/MM/yyyy HH:mm", "en-US");
  showLoadingIndicator = false;


  export() {
    this.showLoadingIndicator = true;
    this.show = false;
    this.isExpanded = true;
    this.show = true;
    setTimeout(() => {
      this.exportToPDF();
    }, 1000);
  }

  statistiqueHeader: any = [
    { code: "statistique.bilan", label: "" },
    { code: "statistique.centre", label: "" },
    { code: "code_1", label: "" },

    { code: "ajouter.periode", label: "" },
    { code: "statistique.genereLe", label: "" },
    { code: "statistique.guichet", label: "" }
  ];

  addHeaderAndFooter(doc: any) {
    console.log('header and footer function',doc);
    
    // Header
    doc.setFontSize(10);
    doc.setTextColor(100);
    const pageWidth = doc.internal.pageSize.getWidth();

    doc.text(
      this.text.header,
      (pageWidth - doc.getTextWidth(this.text.header)) / 2,
      15
    );
    let address = '';
    for (let adr of this.acteur.CordonneeGeographique) {
      const fullAddress = `${adr.adress}, ${adr.villePrincipale}, ${adr.cp}, ${adr.region}, ${adr.pays}`;
      const addressLines = doc.splitTextToSize(fullAddress, 200); // Adjust width as needed
      address += addressLines.join('\n') + '\n';
    }
    let telephone: any[] = []
    for (let tele of this.acteur.telephone) {
      telephone.push(tele)
    }
    const devisInfoX = doc.internal.pageSize.getWidth() - 210; // Adjust position as needed
    const pageHeight = doc.internal.pageSize.getHeight();
   
    this.text.footer = `${this.acteur.translations.nomStructure}\n${address}${this.acteur.email}\n${telephone} `;   
    let enregistrement = ''
    for (let adr of this.enregistrementLegale) {
      const fullenregistrement = `${adr.taconomieEnregistrementLegal} : ${adr.numeroEnregistrement}`;
      const enregistrementLines = doc.splitTextToSize(fullenregistrement, 150); // Adjust width as needed
      enregistrement += enregistrementLines.join('\n') + '\n';
    }

    doc.text( enregistrement , devisInfoX ,pageHeight - 40)
    doc.setFontSize(10);
    doc.setTextColor(100);
    // jsPDF 1.4+ uses getWidth, <1.4 uses .width



    doc.setFontSize(10);
    doc.setTextColor(100);
    if (this.lang == "ar") {

      doc.text(
        this.text.footer,
        pageWidth - doc.getTextWidth(this.text.footer),
        pageHeight - 10
      );
    } else {
      doc.text(this.text.footer, 30, pageHeight - 40);
    }
  }

  // createPageGarde(doc: any) {
  //   const annajdaLogo = `assets/images/najda-sh-${this.lang == "ar" ? "ar" : "fr"
  //     }.png`;
  //   const logoProjet = `assets/images/pdf/unies.png`;
  //   const header = `assets/images/pdf/header.png`;
  //   const pageWidth = doc.internal.pageSize.getWidth();

  //   let title = `${this.statistiqueHeader[0].label}: ${this.typeStatistique.find((t: any) => t.value == this.typeStatistiqueChoisit)
  //       .label
  //     }`;
  //   let subTitles: any[] = [];
  //   subTitles.push(
  //     `${this.statistiqueHeader[1].label}: ${this.centreAnnajda == 0
  //       ? this.statistiqueHeader[2].label
  //       : this.listCentre.find((c: any) => c.id == this.centreAnnajda).label
  //     }`
  //   );
  //   if (this.currentYear != "globale")
  //     subTitles.push(`${this.statistiqueHeader[3].label}: ${this.currentYear}`);
  //   subTitles.push(`${this.statistiqueHeader[4].label}: ${this.DateNow}`);
  //   const loadImage = (path: any, padding: any) => {
  //     return new Promise((resolve) => {
  //       const img = new Image();
  //       img.src = path;
  //       img.onload = async function () {
  //         let imageWidth = img.width;
  //         let imageHeight = img.height;
  //         if (imageWidth > pageWidth) {
  //           const ratio = pageWidth / imageWidth;
  //           imageHeight = imageHeight * ratio - padding;
  //           imageWidth = imageWidth * ratio - padding;
  //         }

  //         let x = (pageWidth - imageWidth) / 2;
  //         resolve({ img, x, imageWidth, imageHeight });
  //       };
  //     });
  //   };
  //   return new Promise((resolve) => {
  //     Promise.all([
  //       loadImage(annajdaLogo, 30),
  //       loadImage(logoProjet, 0),
  //       loadImage(header, 0)
  //     ]).then((res: any) => {
  //       doc.addImage(
  //         res[2]["img"],
  //         "PNG",
  //         res[2]["x"],
  //         10,
  //         res[2]["imageWidth"],
  //         res[2]["imageHeight"]
  //       );
  //       let lastPosition = res[2]["imageHeight"] + 80;
  //       doc.addImage(
  //         res[0]["img"],
  //         "PNG",
  //         res[0]["x"],
  //         lastPosition,
  //         res[0]["imageWidth"],
  //         res[0]["imageHeight"]
  //       );

  //       lastPosition += res[0]["imageHeight"] + 40;
  //       let text = title;
  //       doc.setFontSize(25);

  //       let textX = (pageWidth - doc.getTextWidth(text)) / 2;

  //       doc.text(text, textX, lastPosition);
  //       for (let title of subTitles) {
  //         doc.setFontSize(20);
  //         lastPosition += 35;
  //         text = title;
  //         textX = (pageWidth - doc.getTextWidth(text)) / 2;
  //         doc.text(text, textX, lastPosition);
  //       }
  //       lastPosition += 40;
  //       doc.addImage(
  //         res[1]["img"],
  //         "PNG",
  //         res[1]["x"],
  //         lastPosition,
  //         res[1]["imageWidth"],
  //         res[1]["imageHeight"]
  //       );
  //       doc.addPage();
  //       this.addHeaderAndFooter(doc);
  //       resolve("ok");
  //     });
  //   });
  // }

  text = { header: "", footer: "" };

  async exportToPDF() {
    let doc = new jsPDF("p", "px");

    doc.setFont("Amiri-Regular");

    this.text.header = ''

    let address = '';
    for (let adr of this.acteur.CordonneeGeographique) {
      const fullAddress = `${adr.adress}, ${adr.villePrincipale}, ${adr.cp}, ${adr.region}, ${adr.pays}`;
      const addressLines = doc.splitTextToSize(fullAddress, 200); // Adjust width as needed
      address += addressLines.join('\n') + '\n';

    }
   

    let top = 30;
    const padding = 10;
    const elements = document.getElementsByClassName("statContent");
    const arabicTable = sessionStorage.getItem("lang") == "ar";


    // Adjust the loop without the createPageGarde function
    // for (let i = 0; i < elements.length; i++) {
    //   const el = elements.item(i) as HTMLElement;
    //   top = await this.addChartImageToPDF(doc, el, top, i, padding);

    // }
    // Initial position for the elements
    top = await this.addPresentationActeurClienToPDF(doc, top, padding);
    top = await this.addTableToPDF(
      doc,
      // el.className.split(" ")[1],
      'table',
      top+20,
      arabicTable,
      padding
    );
    top += 20
    top = await this.addConditionPaimentToPDF(doc, top + 20, padding);
    // Adjust the save and other operations accordingly
    doc.save(`${this.devis.refTransaction}.pdf`);
    this.show = false;
    this.isExpanded = false;
    this.show = true;
    this.showLoadingIndicator = false;
  }

  labels: any = [
    { label: 'Devis N°', value: 'code_515' },
    { label: 'Date de Creation', value: 'code_516' },
    { label: 'Site Web', value: 'code_172' },
    { label: 'Email', value: 'code_228' },
    { label: 'secteur', value: 'code_437' },
    { label: 'Numéro', value: 'code_520' },
    { label: 'Devis arrete a la somme de ', value: 'code_521' },
    { label: 'condition de paiment  ', value: 'code_511' },
    { label: 'methode de paiment', value: 'code_512' },
    { label: 'telephone', value: 'code_251' },
  ]

  getLabel(key: string): string {
    const labelObj = this.labels.find((item: { label: string; value: string }) => item.value === key);
    return labelObj ? labelObj.label : key; // Return the value if found, otherwise return the key
  }

  async addPresentationActeurClienToPDF(doc: any, position: number, padding: number) {
    // Add the logo image
    const logoImg = new Image();
    logoImg.src = this.acteur.Logo;
    await logoImg.decode();
    const logoWidth = 110; // Adjust width as needed
    const logoHeight = (logoImg.height * logoWidth) / logoImg.width;
    doc.addImage(logoImg.src, "PNG", 30, position, logoWidth, logoHeight);

    // Add "Devis" information on the right side
    const devisInfoX = doc.internal.pageSize.getWidth() - 210; // Adjust position as needed
    let devisInfoY = position + 10; // Adjust vertical spacing as needed
 

    // Calculate the maximum height between the logo and the Devis information
    const maxHeight = Math.max(logoHeight, 20); // Adjust vertical spacing as needed

    // Update the position
    position += maxHeight + 50; // Adjust vertical spacing as needed

    doc.setFontSize(15);

    doc.text(`${this.acteur.translations.nomStructure}`, devisInfoX, devisInfoY);
    devisInfoY += 13; // Adjust vertical spacing as needed
    doc.setFontSize(10);

    // Add address information
    let telephone: any[] = []
    for (let tele of this.acteur.telephone) {
      telephone.push(tele)
    }

    doc.text( `${this.getLabel("code_251")} : ${telephone}` , devisInfoX, devisInfoY);
    devisInfoY += 10; // Adjust vertical spacing as needed
    // Add "Site Web" and "Email" information
    doc.text(`${this.getLabel("code_172")} :  ${this.acteur.SiteWeb}`, devisInfoX, devisInfoY);
    devisInfoY += 10; // Adjust vertical spacing as needed
    doc.text(`${this.getLabel("code_228")} : ${this.acteur.email}`, devisInfoX, devisInfoY);




    let adressPos = position
    
    doc.setFontSize(12);
    doc.text(`${this.getLabel("code_516")} : ${formatDate(this.devis.createdAt, "dd/MM/yyyy", "en-US")}`, 30, adressPos );
    
    position+=10
    doc.setFontSize(10);
    doc.text(`${this.getLabel("code_515")} : ${this.devis.refTransaction}`, 30, position);
    
    
    
    // Add "Acteur" presentation

   
    // Adjust vertical spacing as needed

    // Add "Client" information
    doc.setFontSize(12);
    if(this.personnel.type == 'particulier'){
      doc.text(`${this.personnel.translations.nom.toUpperCase()} ${this.personnel.translations.prenom.toUpperCase() ? this.personnel.translations.prenom : ''}`, devisInfoX, adressPos);
      adressPos += 15; // Adjust vertical spacing as needed
      doc.setFontSize(10);
  
      doc.text(`${this.getLabel("code_228")} : ${this.personnel.emailPersonel}`, devisInfoX, adressPos);
      adressPos += 15; // Adjust vertical spacing as needed
      doc.text(`${this.getLabel("code_251")} : ${this.personnel.telephonePersonel}`, devisInfoX, adressPos);
      adressPos += 15; // Adjust vertical spacing as needed
  
    }
    else{
      doc.text(`${this.personnel.translations.nomStructure.toUpperCase()}`, devisInfoX, adressPos);
      adressPos += 15; // Adjust vertical spacing as needed
      doc.setFontSize(10);
  
      doc.text(`${this.getLabel("code_228")} : ${this.personnel.emailStructure}`, devisInfoX, adressPos);
      adressPos += 15; // Adjust vertical spacing as needed
      doc.text(`${this.getLabel("code_251")} : ${this.personnel.telephoneStructure}`, devisInfoX, adressPos);
      adressPos += 15; // Adjust vertical spacing as needed
      doc.text(`${this.getLabel("code_437")} : ${this.personnel.structure}`, devisInfoX, adressPos);
      adressPos += 15; // Adjust vertical spacing as needed
      doc.text(`${this.getLabel("code_520")} : ${this.personnel.numero}`, devisInfoX, adressPos);
  
    }
   

    this.tabPosition



    // doc.text(condition, 470, this.tabPosition);

    return adressPos + padding;
  }


  async addConditionPaimentToPDF(doc: any, position: number, padding: number) {



    position -= 30

    console.log('addConditionPaimentToPDF =========================<>' , 'this.devis.montantHT ' + this.devis  , 'this.devis.montantTVA' + this.devis.montantTVA  );
    



    let montant = this.numberToWords(this.devis.montantHT + this.devis.montantTVA)

    doc.text(`${this.getLabel("code_521")} :` + ' ' + montant , 30, position)


    position += 20


    let condition = '';
    let methode = '';

    for (let cond of this.acteur.conditionPaiment) {
      const fullAddress = `${cond.pourcentage} %, ${cond.labelPeriode}  , ${cond.modePaiment}`;
      const addressLines = doc.splitTextToSize(fullAddress, 250); // Adjust width as needed
      condition += addressLines.join('\n') + '\n';
      const fullmethode = `${cond.modePaiment}`;
      const methodeLines = doc.splitTextToSize(fullmethode, 250);
      methode += methodeLines.join('\n') + '\n';
    }



    doc.text(`${this.getLabel("code_511")} : `, 30, position)
    doc.text(condition, 100, position);

    position += 40; // Adjust vertical spacing as needed
    doc.text(`${this.getLabel("code_512")} : `, 30, position)

    doc.text(methode, 100, position);


    return position + padding;

  }

  async addTableToPDF(doc: any, tableID: any, position: any, arabic: any, padding: any) {

    console.log('doc =======================>', doc);

    let table = document.getElementById('table');
    if (table && table.tagName === "TABLE") {
      if (arabic) {
        const rtlTable = (await table.cloneNode(true)) as HTMLTableElement;

        if (rtlTable) {
          for (let tr of Array.from(rtlTable.querySelectorAll("tr"))) {
            const tds = Array.from(tr.querySelectorAll("td, th")).reverse();
            for (let td of tds) tr.appendChild(td);
          }
        }

        table = rtlTable;
      }
      const didDrawPageCallback = (data: any) => {
        this.addHeaderAndFooter(doc);
      };
      console.log(table);




      await autoTable(doc, {
        html: table as HTMLTableElement,
        headStyles: {
            fillColor: "#000",
            textColor: "#ffffff",
            font: "Amiri-bold"
        },
        styles: {
            lineColor: "#fff",
            lineWidth: 0,
            font: "Amiri-bold",
            halign: 'right',
        },
        didDrawCell(data : any) {
            if (data.column.index == 0 && data.cell.section == "body") {
                let td = data.cell.raw;
                let img = td?.getElementsByTagName('img')[0];
                if (img) {
                    let dim = data.cell.height - data.cell.padding('vertical');
                    let textPos = data.cell.getTextPos();
                    doc.addImage(img.src, textPos.x-10, textPos.y, dim + 5, dim + 5);
                }
            }

        },
      // didParseCell: function (data: any) {
      
      //     const rows = data.table.body;
      //     const lastThreeRowsStartIndex = rows.length - 3;
          
      //     // Loop through the last three rows
      //     for (let rowIndex = lastThreeRowsStartIndex; rowIndex < rows.length; rowIndex++) {
      //         if (data.row.index === rowIndex) {
      //           console.log('================================' , data);
                
      //           // Apply the style to the cell
      //           data.cell.styles.fontStyle = 'bold'
                  
      //         }
      //     }
      // },

        startY: position,
        pageBreak: "avoid",
        rowPageBreak: "avoid",
 
        didDrawPage: didDrawPageCallback,
        // New callback for styling rows after they are drawn
    } as any); // Casting the options object to any to avoid TypeScript error



      position = doc.lastAutoTable.finalY + padding;
      this.tabPosition = position
    }

    return position;
  }

  // async addChartImageToPDF(doc: any, element: any, top: any, index: any, padding: any) {
  //   const imgData = await htmlToImage.toPng(element);
  //   let elHeight = element.offsetHeight;
  //   let elWidth = element.offsetWidth;
  //   const pageWidth = doc.internal.pageSize.getWidth();

  //   let position = top || 30;
  //   if (elWidth > pageWidth) {
  //     const ratio = pageWidth / elWidth;
  //     elHeight = elHeight * ratio - padding;
  //     elWidth = elWidth * ratio - padding;
  //   }

  //   const pageHeight = doc.internal.pageSize.getHeight();

  //   if (position + elHeight > pageHeight - 10) {
  //     doc.addPage();
  //     position = 30;
  //     this.addHeaderAndFooter(doc);
  //   }

  //   await doc.addImage(
  //     imgData,
  //     "PNG",
  //     padding,
  //     position,
  //     elWidth,
  //     elHeight,
  //     `image${index}`
  //   );
  //   position += elHeight;

  //   return position;
  // }
  numberToWords(number: number): string {
    // const units = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
    // const teens = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
    // const tens = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];
    // const scales = ['', 'mille', 'million', 'milliard', 'billion', 'trillion']; // Add more as needed

    // if (number === 0) return 'zéro';

    // const integerPart = Math.floor(number);
    // const decimalPart = Math.round((number - integerPart) * 100).toFixed(2); // Ensure two decimal places

    // let result = this.convertIntegerToWords(integerPart, units, teens, tens, scales);
    // let decimaleresault :any
    // if (decimalPart !== '00') { // Check if decimal part is not zero
    //   const decimalWords = this.convertIntegerToWords(parseFloat(decimalPart), units, teens, tens, scales); // Parse to remove leading zeros
    //   decimaleresault = ' et ' + decimalWords + ' cent'
    // }
    // else if(decimalPart == '00'){
    //   decimaleresault = ' '
    // }
    
    // result +=   this.getCurrencyName(this.devis.monnaie) + decimaleresault ;
    // return result.trim();

      const units = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
      const teens = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
      const tens = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];
      const scales = ['', 'mille', 'million', 'milliard', 'billion', 'trillion']; // Add more as needed
    
      if (number === 0) return 'zéro';
    
      const integerPart = Math.floor(number);
      const decimalPart = Math.round((number - integerPart) * 100).toFixed(2); // Ensure two decimal places
    
      let result = this.convertIntegerToWords(integerPart, units, teens, tens, scales);
    
      // Add the currency name
      result += '';
    
      // Add the decimal part if it's not '00'
      if (decimalPart !== '00') {
        const decimalWords = this.convertIntegerToWords(parseFloat(decimalPart), units, teens, tens, scales);

        if(decimalWords == ''){
          result += this.getCurrencyName(this.devis.monnaie) ;

        }
        else {
          result +=this.getCurrencyName(this.devis.monnaie) + ' et ' + decimalWords + ' cent';

        }
      }
    
      return result.trim();
    
    
    
  }


  private convertIntegerToWords(number: number, units: string[], teens: string[], tens: string[], scales: string[]): string {
    let result = '';

    for (let i = 0; number > 0; i++) {
      let triplet = number % 1000;
      number = Math.floor(number / 1000);

      const scale = scales[i];
      if (triplet === 0) continue;

      let tripletStr = '';
      if (triplet >= 100) {
        tripletStr += units[Math.floor(triplet / 100)] + ' cent ';
        triplet = triplet % 100;
      }

      if (triplet >= 20) {
        const ten = Math.floor(triplet / 10);
        const unit = triplet % 10;
        tripletStr += tens[ten] + (unit !== 0 ? ('-' + units[unit]) : '');
      } else if (triplet >= 10) {
        tripletStr += teens[triplet - 10] + ' ';
      } else if (triplet > 0) {
        tripletStr += units[triplet] + ' ';
      }

      result = tripletStr + scale + ' ' + result;
    }

    return result;
  }
  // Example usage:
  // Outputs: "one hundred twenty three million four hundred fifty six thousand seven hundred eighty nine"
  getCurrencyName(currencyCode: string): string {
    const codec = currencyCode.toUpperCase(); // Convert input to uppercase for case-insensitive comparison
    for (const currency of this.currencyData) {
      if (currency.code === codec) {
        return currency.name;
      }
    }
    return 'Unknown'; // Return "Unknown" if currency code is not found
  }



}
