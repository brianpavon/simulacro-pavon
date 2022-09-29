import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';
import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';

const routes: Routes = [
  {path:'listado',component:ActorListadoComponent},    
  {path:'alta',component:ActorAltaComponent},
  {path:'actorpelicula',component:ActorPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActoresRoutingModule { }
