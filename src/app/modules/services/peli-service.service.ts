import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Pelicula } from '../class/peliculas';


@Injectable({
  providedIn: 'root'
})
export class PeliServiceService {
  itemsCollection!: AngularFirestoreCollection<Pelicula>;
  todasLasPeliculas!:Observable<Pelicula[]>

  constructor(private firestore:AngularFirestore) {

  }

  guardarPelicula(nuevaPeli:Pelicula){
    this.firestore.collection('peliculas').add(nuevaPeli);
  }

  traerPeliculas(){
    this.itemsCollection = this.firestore.collection<Pelicula>('peliculas');
    return this.todasLasPeliculas = this.itemsCollection.valueChanges();
  }
}
