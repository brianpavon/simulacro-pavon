import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/modules/class/actores';

@Component({
  selector: 'app-actor-detalle',
  templateUrl: './actor-detalle.component.html',
  styleUrls: ['./actor-detalle.component.css']
})
export class ActorDetalleComponent implements OnInit {
  @Input() actorSeleccionado !: Actor
  constructor() { }

  ngOnInit(): void {
  }

}
