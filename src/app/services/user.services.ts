import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenModel } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login(kullaniciAdi: string, sifre: string): Observable<TokenModel> {

    let body = {
      username: kullaniciAdi, // hata olabilir yer değiştirebilir kontroledilecek
      password: sifre
    };

    return this.httpClient.post<TokenModel>('http://localhost:5001/api/Kullanicilar', body);
  }
}