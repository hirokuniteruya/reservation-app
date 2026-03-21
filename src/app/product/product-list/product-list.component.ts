import { Component, OnInit } from '@angular/core';
import { products } from '../../products'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // products: number[] = [1, 2, 3, 4]
  products: any;

  constructor() { }

  ngOnInit(): void {
    this.products = products;
  }

}
