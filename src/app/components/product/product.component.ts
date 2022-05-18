import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product:Product = {
    id:0,
    title:'',
    image: '',
    price: 0,
    description: '',
    category:'',
  }
  @Output() emitir = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  agregar(){
    this.emitir.emit(this.product);
  }
  verDetalle(){
    this.showProduct.emit(this.product.id);
  }
}
