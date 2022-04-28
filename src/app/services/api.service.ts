import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

   }

   postProduct(product:any){
    return this.http.post<any>('http://localhost:3000/productsList/', product)
   }

   getProduct(){
    return this.http.get<any>('http://localhost:3000/productsList/')
   }

   updateProduct(product:any){
    return this.http.put<any>('http://localhost:3000/productsList/', product)
   }
}

// git remote add origin https://github.com/agwenchez/angular-crud.git
// git branch -M main
// git push -u origin main