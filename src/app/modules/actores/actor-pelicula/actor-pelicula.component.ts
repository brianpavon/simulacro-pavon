import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Paises } from 'src/app/interfaces/paises';
import { Actor } from 'src/app/modules/class/actores';
import { PaisesService } from 'src/app/services/paises.service';
import { Pelicula } from 'src/app/modules/class/peliculas';
import { ActorServiceService } from '../../services/actor-service.service';
import { PeliServiceService } from '../../services/peli-service.service';
import { ImagenService } from 'src/app/services/imagen.service';

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
  peliculasFirestore:Pelicula[] = [];
  pelisDelActor !:Pelicula[]
  verPelis : boolean = false;
  constructor(private actServ:ActorServiceService,private peliServ:PeliServiceService,private imgServ:ImagenService) { }

  ngOnInit(): void {
    this.traerActores();
    this.traerPeliculas();
  }

  traerActores(){
    this.actServ.devolverActores().subscribe(
      actores=>{
        //console.log(actores);
        this.actoresFirestore = actores;
        
      }
    )
  }

  traerPeliculas(){
    this.peliServ.traerPeliculas().subscribe(
      pelis=>{
        this.peliculasFirestore = pelis;
        //console.log(this.peliculasFirestore);
        this.peliculasFirestore.forEach(peli => {
          this.imgServ.descargarImagen(peli.fotoDePelicula).subscribe(
            url=>{
              //console.log(url);
              peli.fotoDePelicula = url;
            }
          )
        });
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

  mostrarDetallePelis(actor:Actor){
    //console.log(this.peliculasFirestore);
    this.pelisDelActor = this.peliculasFirestore.filter(peli=>peli.actor === actor.nombre+" "+actor.apellido);
    console.log(this.pelisDelActor);
    this.verPelis = true;    
  }

  

}
