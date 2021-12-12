import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AlumnoComponent } from './registro/alumnos/alumno/alumno.component';
import { AlumnosComponent } from './registro/alumnos/alumnos.component';
import { TalleresComponent } from './registro/talleres/talleres.component';
import { LoginComponent } from './sesion/login/login.component';
import { RegistrerComponent } from './sesion/registrer/registrer.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrer', component: RegistrerComponent },
  { path: 'alumnos', component: AlumnosComponent},
  { path: 'talleres', component: TalleresComponent },
  { path: 'alumnos/alumno', component: AlumnoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
