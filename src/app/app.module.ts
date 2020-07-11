import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { NotasComponent } from './componentes/notas/notas.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { AppRutasModule } from './app-rutas.module';
import { TareasagregadasComponent } from './componentes/tareasagregadas/tareasagregadas.component';
import { NotasagregadasComponent } from './componentes/notasagregadas/notasagregadas.component';
import { Footer1Component } from './componentes/footer1/footer1.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    NotasComponent,
    NavegacionComponent,
    TareasagregadasComponent,
    NotasagregadasComponent,
    Footer1Component,
  ],
  imports: [
    BrowserModule,
    AppRutasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
