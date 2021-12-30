import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
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
    AlumnosComponent
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
