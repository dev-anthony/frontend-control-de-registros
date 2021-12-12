import { Component, OnDestroy, OnInit } from '@angular/core';
import { data } from 'jquery';
import { Subject } from 'rxjs';
import { Taller } from 'src/app/models/Taller';
import { TalleresService } from 'src/app/services/talleres.service';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css']
})
export class TalleresComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};

  dtTrigger = new Subject();
  data: Taller[];
  titulo: string = 'Listado de Alumnos';


  constructor(private talleresService: TalleresService) { }

  ngOnInit(): void {
    this.dtOptions = {
      language: { url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/es-mx.json'},
      pagingType: 'full_numbers',
      pageLength: 2,
      responsive: true
    };
    this.getTalleres();
  }

  getTalleres(): void {
    this.talleresService.getTalleres().subscribe(
      (response: any) => {
        console.log(response);
        this.data = response.data;
        this.dtTrigger.next(data);
      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
