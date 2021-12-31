import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/Alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  FormRegistroAlm: FormGroup = new FormGroup({});
  data: Alumno[];

  constructor(private formBuilder:FormBuilder,
              private alumnoServices: AlumnosService,
              private router: Router) { }

  ngOnInit(): void {
  this.FormRegistroAlm=this.formBuilder.group(
      {
      nombre: new FormControl('',[
        Validators.required,
        // Validators.pattern('[a-zA-Z ]*')
      ]),
      apellidos : new FormControl('',[
        Validators.required,
        // Validators.pattern('[a-zA-Z ]*')

      ]),
      edad : new FormControl('',[
        Validators.required,
        // Validators.pattern('[0-9]'),
        // Validators.minLength(1),
        // Validators.maxLength(2)

      ]),
      telefono_1 : new FormControl('',[
        Validators.required,
        // Validators.pattern('[0-9 ]'),
        // Validators.minLength(10),
        // Validators.maxLength(10)
      ]),
      telefono_2 : new FormControl('',[
        Validators.required,
        // Validators.pattern('[0-9]'),
        // Validators.minLength(10),
        // Validators.maxLength(10)
      ]),
    });
  }

  postAlumno(): void {
    this.alumnoServices.postAlumno('https://api-control-registros.herokuapp.com/api/alumnos', 
  this.FormRegistroAlm.value)
  .subscribe(respuesta => {
    // console.log('usuario agregado');
    window.location.reload();
  });

  this.router.navigate(['/alumnos']);
    }
  }
