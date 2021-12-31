import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './includes/navbar/navbar.component';
import { LoginComponent } from './sesion/login/login.component';
import { RegistrerComponent } from './sesion/registrer/registrer.component';
import { RegistroComponent } from './registro/registro.component';
import { TalleresComponent } from './registro/talleres/talleres.component';
import { InstrumentosComponent } from './registro/instrumentos/instrumentos.component';

import { HttpClientModule } from '@angular/common/http';
import { AlumnoComponent } from './registro/alumnos/alumno/alumno.component';
import { DataTablesModule } from 'angular-datatables';
import { AlumnosComponent } from './registro/alumnos/alumnos.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FooterComponent } from './includes/footer/footer.component';
import { EditarAlumnoComponent } from './registro/alumnos/alumno/editar-alumno/editar-alumno.component';
import { InicioComponent } from './includes/inicio/inicio.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrerComponent,
    RegistroComponent,
    TalleresComponent,
    InstrumentosComponent,
    AlumnoComponent,
    AlumnosComponent,
    FooterComponent,
    EditarAlumnoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
