import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://fakestoreapi.com/products'

  constructor(private http: HttpClient) { }
  
  getProducts() {
    return this.http.get<any>(this.apiUrl)
    .pipe(map((res:any) => {
      return res;      
    }))
  }
}
