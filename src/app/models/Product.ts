export interface Product{
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  taxes?:number;
}
export interface Category{
  id: string;
  name: string;
}
export interface CreateProductDTO{
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}
