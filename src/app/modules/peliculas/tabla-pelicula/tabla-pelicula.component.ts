import { Pelicula } from '../../class/peliculas';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  @Input() listaDePeliculas:Pelicula[] = [];
  @Output() peliculaSeleccionada: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  mostrarDetalles(paramPelicula:Pelicula){
    this.peliculaSeleccionada.emit(paramPelicula);
    //De aca va al componente busqueda asi despues va al componente detalle
    //console.log(paramPelicula);    
  }

}
