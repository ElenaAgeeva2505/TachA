import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBaseProduct() {
    return this.http.get('https://dummyjson.com/products?limit=10&skip=0&select=title,price')
  }

}
