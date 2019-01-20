import {Component, OnInit, Injector} from '@angular/core';
import {Product, ProductService} from "../shared/product.service";


@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {
  product:Product;
  // constructor(private productService:ProductService) {
  //
  // }

  private productService:ProductService;
  constructor(private injector:Injector) {//只是方便理解，不推荐这么写
    this.productService = injector.get(ProductService);
  }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
