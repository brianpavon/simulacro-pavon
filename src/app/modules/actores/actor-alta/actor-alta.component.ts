import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Actor } from '../../class/actores';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActorServiceService } from '../../services/actor-service.service';
import { Paises } from 'src/app/interfaces/paises';


@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  nuevoActor!: Actor;
  listaActores:Actor[] = []
  formularioActor : FormGroup;
  eligioPais:boolean = false;

  constructor(private fb:FormBuilder, private firestore:AngularFirestore, private actorsServices:ActorServiceService) {
    this.formularioActor = this.fb.group({
      'nombre':['',[Validators.required, Validators.minLength(2)]],
      'apellido':['',[Validators.required, Validators.minLength(2)]],
      'edad':['',[Validators.required, Validators.min(12),Validators.max(99)]],
      'nacionalidad':['',[Validators.required]],
    })
   }

  ngOnInit(): void {
  }

  altaActor(){
    
      //console.log('en el alta');    
      //console.log(this.formularioActor.value.nacionalidad);
      this.nuevoActor = this.formularioActor.value;      
      this.actorsServices.guardarActor(this.nuevoActor);      
      this.formularioActor.reset();
  }

  cargarPais(pais:Paises){
    //console.log(pais.name.common);
    this.eligioPais= true;
    this.formularioActor.controls.nacionalidad.patchValue(pais.name.common);
  }

}
