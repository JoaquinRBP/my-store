import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  myshoppingCar:Product[]=[]
  total=0;
  products:Product[] = [];
  today = new Date();
  fecha = new Date(2021,10,10);
  /*products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://source.unsplash.com/random'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://source.unsplash.com/random'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://source.unsplash.com/random'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: 'https://source.unsplash.com/random'
    },
  ];*/
  constructor(private storeService:StoreService, private productsService:ProductsService) {
    this.myshoppingCar=this.storeService.getShoppingCar();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data=>{
      this.products=data;
    });
  }
  escuchar(elemento: Product){
    this.storeService.addProduct(elemento);
    this.total=this.storeService.getTotal();
    //this.myshoppingCar.push(elemento);
    //this.total += elemento.price;
    //this.total = this.myshoppingCar.reduce((sum,item) => sum + item.price,0)
  }

}
