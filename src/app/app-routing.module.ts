import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './includes/inicio/inicio.component';
import { AlumnoComponent } from './registro/alumnos/alumno/alumno.component';
import { EditarAlumnoComponent } from './registro/alumnos/alumno/editar-alumno/editar-alumno.component';
import { AlumnosComponent } from './registro/alumnos/alumnos.component';
import { InstrumentosComponent } from './registro/instrumentos/instrumentos.component';
import { TalleresComponent } from './registro/talleres/talleres.component';
import { LoginComponent } from './sesion/login/login.component';
import { RegistrerComponent } from './sesion/registrer/registrer.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'includes/inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrer', component: RegistrerComponent },
  { path: 'alumnos', component: AlumnosComponent},
  { path: 'alumnos/alumno', component: AlumnoComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'alumnos/alumno/editar-alumno/:id', component: EditarAlumnoComponent },
  { path: 'talleres', component: TalleresComponent },
  { path: 'instrumentos', component: InstrumentosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
