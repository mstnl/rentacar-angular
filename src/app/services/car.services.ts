import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>("http://localhost:5001/api/Araclar");
  }

  /* getProductsByCategoryId(categoryId: number): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`http://localhost:5000/api/categories/${categoryId}/products`);
  } */

  getCar(id: number): Observable<Car> {
    let token = localStorage.getItem('jwt_token');
    const headers = { 'Authorization': `Bearer ${token}` }

    return this.httpClient.get<Car>(`http://localhost:5001/api/Araclar${id}`, {
      headers: headers
    });
  }

  postCar(car: Car): Observable<any> {
    return this.httpClient.post<any>(`http://localhost:5001/api/Araclar`, car);
  }

  putCar(car: Car): Observable<any> {
    return this.httpClient.put<any>(`http://localhost:5001/api/Araclar${car.Id}`, car);
  }

  deleteCar(id: number): Observable<any> {

    let token = localStorage.getItem('jwt_token');
    const headers = { 'Authorization': `Bearer ${token}` }

    return this.httpClient.delete<any>(`http://localhost:5001/api/Araclar${id}`,{
      headers:headers
    });
  }

}
