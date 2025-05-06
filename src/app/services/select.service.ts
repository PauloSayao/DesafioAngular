import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carro } from '../interfaces/Carro.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor(private http:HttpClient) { }
  getApi():Observable<Carro[]>{
    const apiUrl='http://localhost:3001/vehicles';
    return this.http.get<Carro[]>(apiUrl);
  }
}
