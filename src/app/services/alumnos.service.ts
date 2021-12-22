import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alumno } from '../models/Alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  [x: string]: any;

  url: string = 'https://api-control-registros.herokuapp.com/api/alumnos';

  constructor( private http: HttpClient ) { }
  header = new HttpHeaders()
  .set('Content-Type', 'application/json');

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.url);
  }

  showAlumno(id: number) {
    return this.http.get<any[]>(`$(this.url)/show/${id}`);
  }

  postAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(`$(this.url)/store`, alumno);
  }

  updateAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(`$(this.url)/update/${alumno.id}`, alumno);
  }

  destroyAlumno(id: number) {
    return this.http.delete<any[]>(`$(this.url)/destroy/${id}`);
  }
  
}
