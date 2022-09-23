import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresModule } from './modules/actores/actores.module';
import { PeliculasModule } from './modules/peliculas/peliculas.module';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';

const routes: Routes = [
  {path:'busqueda',component:BusquedaComponent},
  {path:'bienvenido',redirectTo: 'busqueda',pathMatch:'full'},
  {path:'peliculas',
    loadChildren:()=>import('./modules/peliculas/peliculas.module').then(m=>PeliculasModule)
  },
  {path:'actor',
    loadChildren:()=>import('./modules/actores/actores.module').then(m=>ActoresModule)
  },
  {path:'',redirectTo:'busqueda',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
