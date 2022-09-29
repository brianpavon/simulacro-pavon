import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/modules/class/actores';

@Component({
  selector: 'app-actor-tabla',
  templateUrl: './actor-tabla.component.html',
  styleUrls: ['./actor-tabla.component.css']
})
export class ActorTablaComponent implements OnInit {
  @Input() listaActores: Actor[] = []
  @Output() actorSeleccionado : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  verDetalles(actor:Actor){
    this.actorSeleccionado.emit(actor);
  }

}
