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
import { DataTablesModule } from 'angular-datatables';
import { DatatableComponent } from './components/datatable/datatable.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrerComponent,
    RegistroComponent,
    TalleresComponent,
    InstrumentosComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
