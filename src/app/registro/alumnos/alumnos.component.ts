import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Alumno } from 'src/app/models/Alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};

  dtTrigger = new Subject();
  data: Alumno[];
  titulo: string = 'Listado de Alumnos';


  constructor(private alumnoService: AlumnosService) { }

  ngOnInit(): void {
    this.dtOptions = {
      language: { url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/es-mx.json'},
      pagingType: 'full_numbers',
      pageLength: 2,
      responsive: true
    };
    this.getAlumnos();
  }

  getAlumnos(): void {
    this.alumnoService.getAlumnos().subscribe(
      (response: any) => {
        console.log(response);
        this.data = response.data;
        this.dtTrigger.next(Alumno);
      });
  }

  postAlumno(): void {
    // this.alumnoService.postAlumno().subscribe();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
