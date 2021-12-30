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

  getAlumno(id: any): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.url + '/' + id);
  }

  showAlumno(id: number) {
    return this.http.get<any[]>(`$(this.url)/show/${id}`);
  }

  // postAlumno(alumno: Alumno): Observable<Alumno> {
  //   return this.http.post<Alumno>(`$(this.url)/store`, alumno);
  // }

  public postAlumno (url:string, body: any){
    return this.http.post(url, body);
  }

  updateAlumno(alumno: Alumno, id:any): Observable<any> {
    
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};

    return this.http.put<any>(this.url + '/' + id, alumno, httpOptions);

  }

  destroyAlumno(id: number): Observable<any[]> {
    return this.http.delete<any[]>(this.url + '/' + id);
  }
  
}
