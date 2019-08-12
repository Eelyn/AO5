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
  basicTaxTotalString: string;
  importTaxTotalString: string;
  totalCostString: string; 

  constructor() { }

  ngOnInit() {
  }

}
