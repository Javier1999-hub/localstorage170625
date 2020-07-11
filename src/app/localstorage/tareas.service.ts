import { Injectable } from '@angular/core';
import { Tarea } from '../clases/tareas.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
    constructor(){
        this.MostarrStorage();
    }
  Tarea: Tarea[] = [];
  agregarTarea( termino: string ){
    if (termino.length > 0){
      const index = this.Tarea.length + 1;
      const tareaAux = new Tarea(termino, index);
      this.Tarea.push(tareaAux);
    }
    this.guardamenSttorage();
  }
  
    borrar(){
        this.Tarea.splice(0, this.Tarea.length);
        this.guardamenSttorage();
    }
    
  guardamenSttorage(){
    localStorage.setItem('Tarea', JSON.stringify(this.Tarea));
    console.log(this.Tarea);
  }
  MostarrStorage(){
    if ( localStorage.getItem('Tarea') ){
      this.Tarea = JSON.parse(localStorage.getItem('Tarea'));
    }else
    {
      this.Tarea = [];
    }
  }
}
