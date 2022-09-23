import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';


@NgModule({
  declarations: [
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule
  ],
  exports:[
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent
  ]
})
export class PeliculasModule { }
