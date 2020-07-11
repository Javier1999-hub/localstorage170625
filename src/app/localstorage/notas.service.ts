import { Injectable } from '@angular/core';
import { Nota } from '../clases/notas.model';

@Injectable({
    providedIn: 'root'
  })

  export class NotasService {


    constructor() {
      this.cargarSTorage();
    }
    nota: Nota[] = [];
  
    crearNota( titulo: string, descr: string){
      const nuevaNota = new Nota(titulo, descr);
      this.nota.push(nuevaNota);
      this.guardarSTorage();
    }
    borrarNotas(){
      this.nota.splice(0, this.nota.length);
      this.guardarSTorage();
  }
  
    guardarSTorage(){
      localStorage.setItem('notas', JSON.stringify(this.nota));
    }
    cargarSTorage(){
      if ( localStorage.getItem('notas') ){
        this.nota = JSON.parse(localStorage.getItem('notas'));
      }else{
        this.nota = [];
      }
  
    }
  }
  