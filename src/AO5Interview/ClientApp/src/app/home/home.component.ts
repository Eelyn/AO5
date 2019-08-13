import { Component, OnInit } from '@angular/core';
import { ShoppingBasketDto } from '../dto/ShoppingBasketDto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {

  public total: number;
  public genReceipt: boolean;
  item: string;
  amount: number;
  processedAmount: number;
  shoppingBasket: Array<ShoppingBasketDto>;
  basicTax: number;
  importTax: number;

  constructor() {}

  ngOnInit(): void {
    //reset all values
    this.total=0;
    this.shoppingBasket = [];
    this.item = '';
    this.amount = null;
    this.processedAmount = null;
    this.basicTax = 0;
    this.importTax = 0;    
    this.genReceipt = false;
  }

  processTotals() {
    //check for tax eligibility
    let basicTaxEligibility = this.item.toLowerCase().includes('music') ||  this.item.toLowerCase().includes('perfume');
    let importTaxEligibility = this.item.toLowerCase().includes('import');

    if(basicTaxEligibility) {
      this.basicTax = Math.ceil((this.amount * 10/100)*20)/20;
      this.processedAmount = this.amount + this.basicTax;
    } else {
      this.processedAmount = this.amount;
    }

    if(importTaxEligibility) {
      this.importTax = Math.ceil((this.amount * 5/100)*20)/20;
      this.processedAmount += this.importTax;
    }
  }
 
  submit() {  
    if((this.amount != null) && (this.item != null)) {
      this.processTotals();
      let newOrder = new ShoppingBasketDto();
      newOrder.ItemName = this.item;
      newOrder.Price = this.processedAmount;
      newOrder.SalesTax = this.basicTax + this.importTax;
      this.shoppingBasket.push(newOrder);

      //keep count of total added to shopping basket
      this.total++;

      //reset for next item
      this.item = '';
      this.amount = null;
      this.processedAmount = null;
      this.basicTax = null;
      this.importTax = null;
      this.genReceipt = false;
    }
  }

  generateReceipt() {
    this.genReceipt = true;
  }

  reset() {
    this.genReceipt = false; 
    this.shoppingBasket = [];
    this.total = 0;
  }
}