import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActoresRoutingModule } from './actores-routing.module';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';
import { TablaPaisesComponent } from 'src/app/pages/tabla-paises/tabla-paises.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaActorComponent } from './tabla-actor/tabla-actor.component';
import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';
import { ActorTablaComponent } from './actor-tabla/actor-tabla.component';
import { ActorDetalleComponent } from './actor-detalle/actor-detalle.component';
import { ActorDetallePaisComponent } from './actor-detalle-pais/actor-detalle-pais.component';


@NgModule({
  declarations: [
    ActorAltaComponent,
    ActorListadoComponent,
    TablaPaisesComponent,
    TablaActorComponent,
    ActorPeliculaComponent,
    ActorTablaComponent,
    ActorDetalleComponent,
    ActorDetallePaisComponent
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
