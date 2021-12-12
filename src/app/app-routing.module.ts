import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableComponent } from './components/datatable/datatable.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlumnoComponent } from './registro/alumnos/alumno/alumno.component';
import { LoginComponent } from './sesion/login/login.component';
import { RegistrerComponent } from './sesion/registrer/registrer.component';


const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'Datatable', component: DatatableComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrer', component: RegistrerComponent },
  { path: 'alumnos/alumno/:id', component: AlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
