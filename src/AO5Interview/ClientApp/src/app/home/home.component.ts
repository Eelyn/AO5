import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {

  public total: number;

  constructor() {}

  ngOnInit(): void {
    this.total=0;
  }

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

  submit() {

  }
}