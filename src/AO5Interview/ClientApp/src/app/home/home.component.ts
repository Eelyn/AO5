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
  shoppingBasket: Array<ShoppingBasketDto>;
  basicTaxTotal: number;
  importTaxTotal: number;
  totalCost = 0;
  basicTaxTotalString: string;
  importTaxTotalString: string;
  totalCostString: string;

  constructor() {}

  ngOnInit(): void {
    //reset all values
    this.total=0;
    this.shoppingBasket = [];
    this.item = '';
    this.amount = null;
    this.totalCost = 0;
    this.basicTaxTotal = 0;
    this.importTaxTotal = 0;    
    this.genReceipt = false;
    this.basicTaxTotalString = " ";
    this.importTaxTotalString = " ";
    this.totalCostString = " ";
  }

  processTotals() {
    let basicTaxEligibility = this.item.toLowerCase().includes('music' || 'perfume');
    let importTaxEligibility = this.item.toLowerCase().includes('import');

    if(basicTaxEligibility) {
      this.basicTaxTotal += (this.amount * 10/100);
      if(importTaxEligibility) {
        this.importTaxTotal += (this.amount * 5/100);
      }
    }

    this.shoppingBasket.forEach(element => {
        element.Price += this.totalCost;      
    });

    //round values
    this.basicTaxTotalString = (Math.ceil(this.basicTaxTotal*20)/20).toFixed(2);
    this.importTaxTotalString = (Math.ceil(this.importTaxTotal*20)/20).toFixed(2);
    this.totalCostString = (Math.ceil(this.totalCost*20)/20).toFixed(2);
  }

  submit() {
    if((this.amount != null) && (this.item != null)) {
      let newAddition = new ShoppingBasketDto();
      newAddition.ItemName = this.item;
      newAddition.Price = this.amount;
      this.shoppingBasket.push(newAddition);

      this.processTotals();

      //keep count of total added to shopping basket
      this.total++;
      this.item = '';
      this.amount = null;
      this.genReceipt = false;
    }
  }

  generateReceipt() {
    this.genReceipt = true;
  }

  reset() {
    this.genReceipt = false;
  }
}