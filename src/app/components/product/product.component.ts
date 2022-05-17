import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product:Product = {
    id:'',
    title:'',
    image: '',
    price: 0,
    description: '',
    category: '',
  }
  @Output() emitir = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }
  agregar(){
    this.emitir.emit(this.product);
  }
}
