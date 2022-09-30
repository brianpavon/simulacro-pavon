import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Paises } from 'src/app/interfaces/paises';
import { Actor } from 'src/app/modules/class/actores';
import { PaisesService } from 'src/app/services/paises.service';
import { ActorServiceService } from '../../services/actor-service.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {
  actoresFirestore:Actor[] = [];
  actorParaMostrar !: Actor;
  verActor : boolean = false;
  paisDelActor !: Paises;
  verPais : boolean = false;
  constructor(private actServ:ActorServiceService) { }

  ngOnInit(): void {
    this.traerActores();
    //this.buscarPais();
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
    this.verActor = true;
  }

  mostrarDetallePais(pais:Paises){    
    //console.log(pais);
    this.paisDelActor = pais;
    this.verPais = true;
  }

  

}
