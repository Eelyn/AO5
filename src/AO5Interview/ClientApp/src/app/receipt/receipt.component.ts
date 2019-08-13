import { Component, OnInit, Input } from '@angular/core';
import { ShoppingBasketDto } from '../dto/ShoppingBasketDto';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})

export class ReceiptComponent implements OnInit {
  
  @Input() 
  shoppingBasket: Array<ShoppingBasketDto>;

  private salesTaxTotal: Array<number>;
  private totalItemCost: Array<number>;
  public totalCost: number;
  public salesTaxes: number;

  constructor() { }

  ngOnInit() {
    this.salesTaxTotal = [];
    this.totalItemCost = [];
    this.totalCost = 0;
    this.salesTaxes = 0;
    this.getFigures();
  }

  getFigures() {
    let i = 0;
    for(i=0; i<this.shoppingBasket.length; i++) {
      this.salesTaxTotal[i] = this.shoppingBasket[i].SalesTax;
      this.totalItemCost[i] = this.shoppingBasket[i].Price;
    }

    this.salesTaxTotal.forEach(tax => this.salesTaxes += tax);
    this.totalItemCost.forEach(price => this.totalCost += price);

    console.log(this.totalCost + " <- cost & sales ->" + this.salesTaxes);
  }

}
