import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Tarea } from '../../clases/tareas.model';
import {TareasService} from '../../localstorage/tareas.service';
@Component({
  selector: 'app-tareasagregadas',
  templateUrl: './tareasagregadas.component.html',
})
export class TareasagregadasComponent implements OnInit {
  tarea: Tarea[];
  @Output() tareaSeleccionada: EventEmitter<Tarea>
  constructor(public tareasService: TareasService) {
    this.tareaSeleccionada=new EventEmitter();
   }

  ngOnInit(): void {
  }
  cheked(tarea: Tarea){

    this.tareaSeleccionada.emit(tarea);
  }

}
