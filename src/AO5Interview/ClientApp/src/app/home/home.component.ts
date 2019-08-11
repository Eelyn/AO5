import { Component, OnInit } from '@angular/core';
import { ShoppingBasketDto } from '../dto/ShoppingBasketDto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {

  public total: number;
  item: string;
  amount: number;
  shoppingBasket: Array<ShoppingBasketDto>;

  constructor() {}

  ngOnInit(): void {
    this.total=0;
    this.shoppingBasket = [];
    let number = 0.86;
    let result = (Math.ceil(number*20)/20).toFixed(2);
    console.log(result);
  }

  /*
  addBook() {
    this.total++;
  }

  addMusic() {
    this.total++;
  }

  addChoc() {
    this.total++;
  }

  addImpChoc() {
    this.total++;
  }

  addImpPerfume() {
    this.total++;
  }

  addPerfume() {
    this.total++;
  }

  addPill() {
    this.total++;
  }
*/
  submit() {
    if((this.amount != null) && (this.item != null)) {
      let newAddition = new ShoppingBasketDto();
      newAddition.ItemName = this.item;
      newAddition.Price = this.amount;
      this.shoppingBasket.push(newAddition);

      let x = this.shoppingBasket[1].ItemName;
      let y = this.shoppingBasket[1].Price;
      console.log(x + ' ' + y);
      this.total++;
      this.item = '';
      this.amount = null;
    }
  }
}