import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modules/class/peliculas';

@Component({
  selector: 'app-actor-detalle-pelicula',
  templateUrl: './actor-detalle-pelicula.component.html',
  styleUrls: ['./actor-detalle-pelicula.component.css']
})
export class ActorDetallePeliculaComponent implements OnInit {
  @Input() lasPelis : Pelicula[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
