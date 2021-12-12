import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Taller } from '../models/Taller';

@Injectable({
  providedIn: 'root'
})
export class TalleresService {

  url: string = 'https://api-control-registros.herokuapp.com/api/talleres';

  constructor( private http: HttpClient ) { }
  header = new HttpHeaders()
  .set('Content-Type', 'application/json');

  getTalleres() {
    return this.http.get<Taller[]>(this.url);
  }
}
