import { Component,EventEmitter, OnInit, Output  } from '@angular/core';
import { Actor } from '../../class/actores';
import { ActorServiceService } from '../../services/actor-service.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {
  @Output() actorSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  listaActores:Actor[] = [];  
  constructor(private servActores:ActorServiceService) {

  }

  ngOnInit(): void {
    this.cargarActores();
  }

  cargarActores(){
    this.servActores.devolverActores().subscribe(
      actores=>{
        //console.log(actores);
        this.listaActores=actores;
        //console.log(this.listaActores);
      });
  }

  enviarActor(actor:Actor){
    this.actorSeleccionado.emit(actor);
  }

}
