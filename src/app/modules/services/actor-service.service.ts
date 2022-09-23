import { Injectable } from '@angular/core';
import { Actor } from '../class/actores';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorServiceService {
  itemsCollection!: AngularFirestoreCollection<Actor>;
  todosLosActores!: Observable<Actor[]>;
  constructor(private firestore:AngularFirestore) {    
  }

  guardarActor(nuevoActor:Actor){
    this.firestore.collection('actores').add(nuevoActor);
  }
  
  devolverActores(){
    this.itemsCollection = this.firestore.collection<Actor>('actores');
    return this.todosLosActores = this.itemsCollection.valueChanges();
  }
}
