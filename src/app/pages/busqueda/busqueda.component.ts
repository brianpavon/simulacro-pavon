import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modules/class/peliculas';
import { PeliServiceService } from 'src/app/modules/services/peli-service.service';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
//listaPeliculasBusqueda : Pelicula[];
peliculaParaMostrar!: Pelicula;
mostrarDetalle:boolean = false;
pelisFirestore:Pelicula[]= [];

constructor(private servPelis:PeliServiceService, private servImg:ImagenService) {
}

ngOnInit(): void {
  this.traerPeliculas();
}
peliculaParaDetalle(peli: Pelicula){
  this.peliculaParaMostrar = peli;
  this.mostrarDetalle = true;
}
limpiarDetalle(){
  this.mostrarDetalle = false;
}

traerPeliculas(){
  this.servPelis.traerPeliculas().subscribe(
    pelis=>{
      this.pelisFirestore = pelis;
      //console.log(this.pelisFirestore);
      
      this.pelisFirestore.forEach(element => {
        this.servImg.descargarImagen(element.fotoDePelicula).subscribe(
          url=>{
            console.log(url);
            element.fotoDePelicula = url;
          }
        )
      });
    }
  )
  
}

}
