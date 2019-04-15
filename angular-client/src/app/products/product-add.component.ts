import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/entities/productModel';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(  private router: Router) { }
  product = new ProductModel('name', 'code');
  ngOnInit() {
  }

  addProduct(){
    console.log("====================");
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
