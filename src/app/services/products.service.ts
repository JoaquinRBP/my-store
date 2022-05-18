import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http';
import { CreateProductDTO, Product } from '../models/Product';
import { retry, catchError, map} from 'rxjs/operators';
import { throwError } from 'rxjs';
import {environment} from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiurl = `${environment.API_URL}/products`;

  constructor(private http: HttpClient) { }
  getAllProducts(){
    return this.http.get<Product[]>(`${this.apiurl}`)
    .pipe(
      catchError((error: HttpErrorResponse)=>{
        if(error.status===500){
        }
        return throwError('Ups algo salio mal');
      })
    );
  }/*
  getElementos(){
    return this.http.get('http://localhost:8081/app/api/users/');
  }*/
  getProductsByPage(limit: number, sort: string){
    let params = new HttpParams();
    if(limit && sort){
      params = params.set('limit', limit);
      params = params.set('sort', sort);
    }
    //aca abajo se usaria los params
    return this.http.get<Product[]>(`${this.apiurl}`,{
      params: {limit,sort}
    }).pipe(retry(3),
    map(product => product.map(products=>{
        return {...products, taxes: 0.18*products.price}
    })));
  }
  getProductById(id: number){
    return this.http.get<Product>(`${this.apiurl}/${id})`);
  }
  postProduct(product: CreateProductDTO){
    return this.http.post<Product>(`${this.apiurl}`,product);
  }
  updateProduct(product: any){
    //Put enviamos todo
    //Patch solo un elemento
    return this.http.patch<Product>(`${this.apiurl}/${product.id})`,product);
  }
  deleteProduct(id: number){
    return this.http.delete(`${this.apiurl}/${id}`);
  }
}
