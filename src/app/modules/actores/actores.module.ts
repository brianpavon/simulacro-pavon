import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActoresRoutingModule } from './actores-routing.module';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';
import { TablaPaisesComponent } from 'src/app/pages/tabla-paises/tabla-paises.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaActorComponent } from './tabla-actor/tabla-actor.component';
import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';


@NgModule({
  declarations: [
    ActorAltaComponent,
    ActorListadoComponent,
    TablaPaisesComponent,
    TablaActorComponent,
    ActorPeliculaComponent
  ],
  imports: [
    CommonModule,
    ActoresRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    //TablaPaisesComponent
  ],
  exports:[
    ActorAltaComponent,
    ActorListadoComponent,
    TablaActorComponent
  ]
})
export class ActoresModule { }
