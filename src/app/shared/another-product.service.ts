import { Injectable } from '@angular/core';
import {ProductService, Product} from "./product.service";
import {LoggerService} from "./logger.service";

@Injectable()
export class AnotherProductService implements ProductService{
  getProduct(): Product {
    return new Product(1,"iphone8",6666,"新款啦")
  }

  constructor(public logger:LoggerService) {

  }

}
