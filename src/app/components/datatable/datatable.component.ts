import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Alumno } from 'src/app/models/Alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { LanguageApp } from './datatable';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger = new Subject();
  data: any;
  alumno: Alumno[];
  titulo: string = 'Listado de Alumnos';


  constructor(private httpClient: HttpClient,
              private alumnoService: AlumnosService,
              private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      language: LanguageApp.spanish_datatables,
      pagingType: 'full_numbers',
      pageLength: 2,
      responsive: true
    };
    this.httpClient.get<Alumno[]>('https://api-control-registros.herokuapp.com/api/alumnos')
      .subscribe((res: any) =>{
        this.data = res.data;
        console.log(this.data);
        this.dtTrigger.next(Alumno);
      });

  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
