import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/modules/class/actores';
import { ActorServiceService } from '../../services/actor-service.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {
  actoresFirestore:Actor[] = [];
  actorParaMostrar !: Actor;  
  constructor(private actServ:ActorServiceService) { }

  ngOnInit(): void {
    this.traerActores();
  }

  traerActores(){
    this.actServ.devolverActores().subscribe(
      actores=>{
        console.log(actores);
        this.actoresFirestore = actores;
        
      }
    )
  }

  mostrarDetalleActor(actor:Actor){
    this.actorParaMostrar = actor;
  }

}
