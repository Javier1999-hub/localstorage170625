import { Component } from '@angular/core';
import { Nota } from '../../clases/notas.model';
import { NotasService } from '../../localstorage/notas.service';

@Component({
  selector: 'app-notasagregadas',
  templateUrl: './notasagregadas.component.html',
  styleUrls: ['./notasagregadas.component.css']
})
export class NotasagregadasComponent {

  nota: Nota[] = [];
  constructor(public notaService: NotasService ) { }
}
