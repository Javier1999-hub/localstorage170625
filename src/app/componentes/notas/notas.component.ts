import { Component } from '@angular/core';
import { Nota } from '../../clases/notas.model';
import { NotasService } from '../../localstorage/notas.service';
@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
})

export class NotasComponent {
  nota: Nota[] = [];
  titulo="";
  descripcion="";
  opti="null";
  
  constructor(public notasService: NotasService) { }
  agregarNotass( tit: string, desc: string ){
    if (tit.length > 0 && desc.length > 0){
      this.notasService.crearNota(tit, desc);
      this.titulo="";
      this.descripcion="";
      this.opti="null";
      
     }
  }
}