import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/entities/productModel';
import { Router } from '@angular/router';
import { FormGroup,NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pm-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  url = 'http://localhost:3000/products';
  addProductForm :FormGroup;
  constructor(public http: HttpClient,  private router: Router) { }
  product = new ProductModel('','');
  ngOnInit() {
  }

  addProduct(form: NgForm){
    return this.http.post(this.url, form.value);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
