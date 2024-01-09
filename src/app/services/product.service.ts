import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // call api
  private baseUrl = 'https://fakestoreapi.com';

  http = inject(HttpClient);

  constructor() {}

  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }
}
