import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/Alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {

  FormEditAlumno: FormGroup = new FormGroup({});
  data: Alumno[];

  constructor(private formBuilder:FormBuilder,
    private alumnoServices: AlumnosService,
    private router: ActivatedRoute,
    private nav: Router) { }

    ngOnInit(): void {
      this.FormEditAlumno=this.formBuilder.group(
          {
    //crear un validator para el nombre que solo acepte letras de la a-z y con caracteres especiales
          nombre: new FormControl ('', [
            Validators.required,
            Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*')
          ]),
    
          apellidos : new FormControl('',[
            Validators.required,
            Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*')
          ]),
          edad : new FormControl('',[
            Validators.required,
            Validators.pattern('[0-9]{1,2}'),
            Validators.maxLength(2),
            Validators.minLength(2)
          ]),
          telefono_1 : new FormControl('',[
            Validators.required,
            Validators.pattern('[0-9]{10}'),
            Validators.maxLength(10),
            Validators.minLength(10)
          ]),
          telefono_2 : new FormControl('',[
            Validators.required,
            Validators.pattern('[0-9]{10}'),
            Validators.maxLength(10),
            Validators.minLength(10)
          ]),
        });

        let id = this.router.snapshot.paramMap.get('id');
        // console.log(id);
        this.getAlumno(id);
      }

      getAlumno(id: any) {
        this.alumnoServices.getAlumno(id).subscribe(
          (data: any) => {
            this.data = data.data;
            // console.log(this.data);
            this.mostrarAlumno(this.data);
          }
        );
      }

      mostrarAlumno(data: any) {
        this.FormEditAlumno.patchValue({
          nombre: data.nombre,
          apellidos: data.apellidos,
          edad: data.edad,
          telefono_1: data.telefono_1,
          telefono_2: data.telefono_2
        });
        // console.log(data.nombre);
      }

      updateAlumno() {
        let alumnoT = new Alumno();
    
    alumnoT.nombre = this.FormEditAlumno.value.nombre;
    alumnoT.apellidos = this.FormEditAlumno.value.apellidos;
    alumnoT.edad = this.FormEditAlumno.value.edad;
    alumnoT.telefono_1 = this.FormEditAlumno.value.telefono_1;
    alumnoT.telefono_2 = this.FormEditAlumno.value.telefono_2;
    // console.log(alumnoT);
    this.alumnoServices.updateAlumno(alumnoT, this.router.snapshot.paramMap.get('id')).subscribe(
      (data: any) => {
        this.nav.navigate(['/alumnos']);
        // console.log(data);
    } );
  }

  deleteAlumno(){
    
  }

}
