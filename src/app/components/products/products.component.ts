import { Component, OnInit } from '@angular/core';
import { CreateProductDTO, Product } from 'src/app/models/Product';
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
  showProductDetail=false;
  productElegido:Product ={
    id:0,
    title:'',
    image: '',
    price: 0,
    description: '',
    category:'',
    };
  /*products:       t[] = [
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
    this.obtenerDatos();
    this.obtenerapi();
    /*this.productsService.getProductsByPage(8,'desc')
    .subscribe(data=>{
      this.products=data;
    })*/
    /*this.productsService.getAllProducts().subscribe(data=>{
      this.products=data;
    });*/
  }
  obtenerapi(){
    /* this.productsService.getElementos().subscribe(data=>{
      console.log(data);
    })*/
  }
  async obtenerDatos(){
    const data = await this.productsService.getProductsByPage(8,'desc');
    data.subscribe(products=>{
      this.products=products;
    });
  }
  escuchar(elemento: Product){
    this.storeService.addProduct(elemento);
    this.total=this.storeService.getTotal();
    //this.myshoppingCar.push(elemento);
    //this.total += elemento.price;
    //this.total = this.myshoppingCar.reduce((sum,item) => sum + item.price,0)
    this.createProduct();
    console.log('----------------');
    //this.updateProduct();
    this.productElegido=elemento;
    this.deleteProduct();
  }
  toggleProductDetail(){
    this.showProductDetail=!this.showProductDetail;
  }
  escuchaProduct(id:number){
    this.productsService.getProductById(id).subscribe(data=>{
      this.toggleProductDetail();
      this.productElegido=data;
    });
  }
  createProduct(){
    const product: CreateProductDTO= {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    }
    this.productsService.postProduct(product)
    .subscribe(data=>{
      console.log(data);
      this.products.push(data);
    });
  }
  updateProduct(){
    const product= {
      id:'7',
      price: 13.5,
    }
    this.productsService.updateProduct(product).subscribe(data=>{
      console.log(data);
    })
  }
  deleteProduct(){
    const id = this.productElegido.id;
    this.productsService.deleteProduct(id).subscribe(data=>{
      const index = this.products.findIndex(item=>item.id=this.productElegido.id);
      this.products.splice(index,1);
      console.log(data);
    })
  }
}
