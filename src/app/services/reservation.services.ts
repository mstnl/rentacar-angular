import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpClient) { }

  getReservations(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>("http://localhost:5001/api/Rezervasyonlar");
  }

  /* getProductsByCategoryId(categoryId: number): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`http://localhost:5000/api/categories/${categoryId}/products`);
  } */

  getReservation(id: number): Observable<Reservation> {
    let token = localStorage.getItem('jwt_token');
    const headers = { 'Authorization': `Bearer ${token}` }

    return this.httpClient.get<Reservation>(`http://localhost:5001/api/Rezervasyonlar${id}`, {
      headers: headers
    });
  }

  postReservation(reservation: Reservation): Observable<any> {
    return this.httpClient.post<any>(`http://localhost:5001/api/Rezervasyonlar`, reservation);
  }

  putReservation(reservation: Reservation): Observable<any> {
    return this.httpClient.put<any>(`http://localhost:5001/api/Rezervasyonlar${reservation.id}`, reservation);
  }

  deleteReservation(id: number): Observable<any> {

    let token = localStorage.getItem('jwt_token');
    const headers = { 'Authorization': `Bearer ${token}` }

    return this.httpClient.delete<any>(`http://localhost:5001/api/Rezervasyonlar${id}`,{
      headers:headers
    });
  }

}