import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/modules/class/actores';

@Component({
  selector: 'app-actor-tabla',
  templateUrl: './actor-tabla.component.html',
  styleUrls: ['./actor-tabla.component.css']
})
export class ActorTablaComponent implements OnInit {
  @Input() listaActores: Actor[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
