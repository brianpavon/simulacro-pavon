import { Component, OnInit } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';
import { Actor } from '../../class/actores';
import { Pelicula } from '../../class/peliculas';
import { PeliServiceService } from '../../services/peli-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  formPeli:FormGroup
  //actorElegido!:Actor
  hayActor:boolean = false;
  nuevaPeli!:Pelicula;
  imagen!:File;
  pathImg:string = '';

  constructor(private fb:FormBuilder,private servPeli:PeliServiceService,private servImg:ImagenService) { 
    this.formPeli = this.fb.group({
      'nombre':['',[Validators.required,Validators.minLength(4)]],
      'tipo':['',[Validators.required,Validators.minLength(4)]],
      'fechaDeEstreno':['',[Validators.required,Validators.minLength(4)]],
      'cantidadDePublico':['',[Validators.required]],
      'actor':['',[Validators.required]],
      'fotoDePelicula':['',[Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  guardarImagen(event:any) {    
    
    const file: File = event.target.files[0];
    this.imagen = file;
    //console.log(event.target.files[0].name);
    this.pathImg = event.target.files[0].name;    
  };

  altaPelicula(){
    //console.log('alta pelicula');
    this.nuevaPeli = this.formPeli.value;
    this.nuevaPeli.id = Math.floor(Math.random() * 10000000);
    this.nuevaPeli.fotoDePelicula = this.pathImg;
    //console.log(this.nuevaPeli);
    this.servImg.guardarImagen(this.imagen,this.pathImg);
    this.servPeli.guardarPelicula(this.nuevaPeli);
    //console.log(this.nuevaPeli);
    this.formPeli.reset();
  }

  elegirActor(actor:Actor){
    //console.log(actor);    
    this.formPeli.controls.actor.patchValue(`${actor.nombre} ${actor.apellido}`);    
    this.hayActor=true
  }

}
