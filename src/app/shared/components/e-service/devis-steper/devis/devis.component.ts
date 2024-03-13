import { ChangeDetectorRef, Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { acteurSocioEcanomique } from 'src/app/shared/models/acteurSocioRcanomique.model';
import { ActeurService } from 'src/app/shared/services/Acteur.service';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ligneTransaction } from 'src/app/shared/models/ligneTransaction.model';
import { ProduitServiceSolPropre2 } from 'src/app/shared/models/ProduitServiceSolPropre2.model';
import { TransactionCommerciale } from 'src/app/shared/models/TransactionCommerciale.model';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-devis',
  standalone: true,
  imports: [CommonModule, TableModule, InputNumberModule, FormsModule, DialogModule, TranslateModule, ButtonModule],
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent {


  constructor() { }

  @Input() products: any[] = [];
  selectedProduct: any;
  counter: number = 0;
  cartProducts: any[] = []
  displayProductDialog: boolean = false;
  availableProducts: any[] = []
  cart: ligneTransaction[] = [];
  @Output() nextStep = new EventEmitter<any>();
  @Input() data: any


  ngOnInit() {
    console.log('on init products', this.products);
    this.availableProducts = this.products;
    if (this.data) {
      console.log('//////// deeeeeeeeeeevi', this.data);
      this.cart = this.data.ligneTransaction;
    }
  }

  showProductDialog() {
    // Filter products to exclude those already in the cart
    this.availableProducts = this.products.filter(product => !this.cart.some(cartProduct => cartProduct.refProduit.id === product.id));
    this.displayProductDialog = true;
  }

  removeProductFromCart(productId: string) {
    console.log(productId);

    const index = this.cart.findIndex(product => product.refProduit.id === productId);
    console.log(index);

    if (index !== -1) {
      this.cart.splice(index, 1); // Remove the product from the cart
    }
  }

  // addProductToCart(product: any) {
  //   console.log('product ===>',product);

  //   // Calculate qte and totale for the added product
  //   const qte = product.qteMinParCommande;
  //   const totale = qte * product.tarifUHTpardefaut; 
  //   const productWithQteAndTotal = { ...product, qte, totale };
  //   // Push the product to the cartProducts array
  //   this.cartProducts.push(productWithQteAndTotal);
  //   // Close the dialog after adding to cart
  //   this.displayProductDialog = false;
  // }



  addToCart(product: ProduitServiceSolPropre2) {
    // Calculate the initial total based on the product's price and quantity
    let total = this.calculateTotal(product, product.qteMinParCommande);

    const tva = this.calculateTVA(product, product.qteMinParCommande)
    // Create a new ligneTransaction for the selected product
    const newTransaction: ligneTransaction = {
      _id: '',
      etatobjet: 'string',
      refProduit: product,
      translations: { language: 'en', designation: product.translations.designationProduit, descriptif: product.translations.descriptifProduit },
      puht: product.tarifUHTpardefaut,
      quantite: product.qteMinParCommande,
      unite: product.unityProduit,
      remise: 0,
      prixPromoSpe: 0,
      tauxTVA: tva,
      refFournisseur: product.acteur,
      transactionCommerciale: '1',
      instructions: [],
      total: total  // Assign the initial total to the transaction
    };
    console.log('newTransaction === > ', newTransaction);

    // Add the new transaction to the cart
    this.cart.push(newTransaction);
    this.displayProductDialog = false;
  }
  calculateTVA(product: ProduitServiceSolPropre2, quantite: any): number {
    return parseFloat(((product.tarifUHTpardefaut * quantite) * product.tVApardefaut / 100).toFixed(2));
  }
  updateTotal(product: ProduitServiceSolPropre2, newQuantity: any) {
    // Find the transaction corresponding to the product in the cart
    const transaction = this.cart.find(transaction => transaction.refProduit === product);

    if (transaction) {
      // Update the quantity
      transaction.quantite = newQuantity;
      // Recalculate the total
      transaction['total'] = this.calculateTotal(product, newQuantity);
      transaction['tauxTVA'] = this.calculateTVA(product, newQuantity);
    }
  }

  calculateTotal(product: ProduitServiceSolPropre2, quantity: number): number {
    // Calculate the total based on the product's price and the new quantity
    return parseFloat((product.tarifUHTpardefaut * quantity).toFixed(2));
  }

  submit() {
    // Calculate montantHT
    // Calculate the sum of montantHT with two numbers after the comma
    let montantHT = parseFloat(this.cart.reduce((acc, transaction) => acc + transaction['puht'] * transaction['quantite'], 0).toFixed(2));
    const monnaie = this.cart.length > 0 ? this.cart[0].refProduit.monnaiePays : '';
    console.log('suuuuuuubmit =================================', montantHT);

    console.log(' this.cart[0]["monnaiePays"] ', this.cart[0].refProduit.monnaiePays);

    // Calculate the sum of montantRemise with two numbers after the comma
    const montantRemise = parseFloat(this.cart.reduce((acc, transaction) => acc + transaction['remise'], 0).toFixed(2));

    // Calculate the sum of montantTVA with two numbers after the comma
    const montantTVA = parseFloat(this.cart.reduce((acc, transaction) => acc + transaction['tauxTVA'], 0).toFixed(2));



    console.log('montantHT:', montantHT);
    console.log('montantRemise:', montantRemise);
    console.log('montantTVA:', montantTVA);

    let TransactionCommerciale: TransactionCommerciale = ({
      _id: 'string',
      etatobjet: 'string',
      classe: 'string',
      fluxTransaction: 'string',
      multiFournisseur: false,
      refTransaction: this.generateReference('N'),
      dateTransaction: 'string',
      dateEnregistrement: 'string',
      montantHT: montantHT,
      montantRemise: montantRemise,
      montantTVA: montantTVA,
      //@ts-ignore
      monnaie: monnaie,
      translations: {
        language: 'string',
        commentaireTransaction: 'string'
      },
      LangueCommande: 'string',
      urlDocPdfTransaction: 'string',
      auteurTransaction: 'string',
      etatTransaction: 'string',
      transactionCommercialePrincipal: [],
      transactionCommercialeAssociee: [],
      ligneTransaction: this.cart,
      instanceActeur: [],
      paiements: [],
      autreConditions: [],
      conditionDuPaiment: [],
      documentAssociee: [],
      objetAssociee: [],
      livraison: [],
      bonDeLivraison: [],
      instanceCoordonnee: [],
      probleme: [],
      indicateurDeSuiviEtRealisation: [],
      etatsObjets: [],
      instructions: [],
      createdAt: new Date('10-10-2023'),
    })

    console.log(TransactionCommerciale);
    this.nextStep.emit(TransactionCommerciale);

  }
  generateReference(input: string): string {
    const randomNumber = Math.floor(Math.random() * 100000);
    return input + randomNumber.toString().padStart(8, '0');
  }

}
