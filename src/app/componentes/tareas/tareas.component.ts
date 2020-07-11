import { Component } from '@angular/core';
import { Tarea } from '../../clases/tareas.model';

import { TareasService } from '../../localstorage/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  nombreTarea= "";
  tarea: Tarea;
   validar = true;
 constructor(public tareasService: TareasService) { }
 


 
 agregarTarea( termino: string ){
  this.tareasService.agregarTarea(termino) ;
  this.nombreTarea= "";
}


borrar(){
  this.tareasService.borrar();
}
}