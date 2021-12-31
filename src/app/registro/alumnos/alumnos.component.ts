import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Alumno } from 'src/app/models/Alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';

declare var alert: any;

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject<any>();
  dtTrigger = new Subject<any>();
  
  data: Alumno[];
  titulo: string = 'Listado de Alumnos';


  constructor(private alumnoService: AlumnosService) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      language: { url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/es-mx.json'},
      pagingType: 'full_numbers',
      pageLength: 10,
      responsive: true
    };
    this.getAlumnos();
  }

  getAlumnos(): void {

    this.alumnoService.getAlumnos().subscribe(
      (response: any) => {
        console.log(response);
        this.data = response.data;
        this.dtTrigger.next(0);
      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  
  deleteAlumno(id: any): void {
    this.alumnoService.destroyAlumno(id).subscribe( () => { 
      // console.log(id);
      window.location.reload();
      alert();
    } );
  }

}

