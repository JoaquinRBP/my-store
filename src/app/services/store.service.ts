import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myshoppingCar:Product[]=[]
  private myCart = new BehaviorSubject<Product[]>([]);
  //variable + $ => observable
  myCart$ = this.myCart.asObservable();
  constructor() { }
  addProduct(product:Product){
    this.myshoppingCar.push(product);
    this.myCart.next(this.myshoppingCar);
  }
  getShoppingCar(){
    return this.myshoppingCar;
  }
  getTotal(){
    return this.myshoppingCar.reduce((suma,item)=>suma+item.price,0);
  }
}
