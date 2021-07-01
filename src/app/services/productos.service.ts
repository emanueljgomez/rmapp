import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get('https://my-json-server.typicode.com/emanueljgomez/mockjson/items')
      .toPromise();
  }

  getProduct(id) {
    return this.http
      .get(
        'https://my-json-server.typicode.com/emanueljgomez/mockjson/items/' + id
      )
      .toPromise();
  }
}
