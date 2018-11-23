import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Order, ShopServiceRequest} from '../types';
import * as Global from '../global';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly httpHeaders: HttpHeaders;

  constructor(private http: HttpClient, private router: Router) {
    this.httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200');
  }

  fetchAllOrders(): Observable<Array<Order>> {
    return this.http.get<Array<Order>>(Global.backendUrl + 'orders', {headers: this.httpHeaders});
  }

  fetchOneOrder(id: number): Observable<Order> {
    return this.http.get<Order>(Global.backendUrl + 'orders/' + id, {headers: this.httpHeaders});
  }

  addOneOrder(orderRequest: ShopServiceRequest): Observable<Order> {
    return this.http.post<Order>(Global.backendUrl + 'orders', orderRequest, {headers: this.httpHeaders});
  }

  updateOrderStatus(status: string, id: number): Observable<Order> {
    return this.http.put<Order>(Global.backendUrl + 'orders/' + id, status, {headers: this.httpHeaders});
  }
}
