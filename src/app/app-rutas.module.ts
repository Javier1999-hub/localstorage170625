import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { NotasComponent } from './componentes/notas/notas.component';

const routes: Routes = [
  {path: 'tareas', component: TareasComponent},
  {path: 'notas', component: NotasComponent},
  {path: '**', pathMatch: 'full', redirectTo:'tareas'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRutasModule { }
