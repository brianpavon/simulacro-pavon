import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Paises } from 'src/app/interfaces/paises';
import { Actor } from 'src/app/modules/class/actores';

@Component({
  selector: 'app-actor-tabla',
  templateUrl: './actor-tabla.component.html',
  styleUrls: ['./actor-tabla.component.css']
})
export class ActorTablaComponent implements OnInit {
  @Input() listaActores: Actor[] = []
  @Output() actorElegido : EventEmitter<any> = new EventEmitter<any>();
  @Output() paisActor : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  verDetallesActor(actor:Actor){
    this.actorElegido.emit(actor);
  }

  verDetallePais(pais:Paises){    
    //console.log(pais);
    this.paisActor.emit(pais);
  }

}
