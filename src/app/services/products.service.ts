import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://localhost:5001/api/Products'

  constructor(private http: HttpClient) { }
  
  getProducts() {
    return this.http.get<any>(this.apiUrl)
    .pipe(map((res:any) => {
      return res;      
    }))
  }

  async getProduct(id :number) {
    let result: any; 

    await this.http.get(this.apiUrl + `/${id}`)
    .toPromise()
    .then(res => { result = res;})
    .catch(error => {
      console.log(error);
    })

    return result
  }
    
}
