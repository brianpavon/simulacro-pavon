import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paises } from '../interfaces/paises';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  urlApi: string = 'https://restcountries.com/v3.1/subregion/south'
  constructor(private http:HttpClient) {

   }
   todos():Observable<Paises[]>{
     return this.http.get<Paises[]>(this.urlApi);
   }
}

