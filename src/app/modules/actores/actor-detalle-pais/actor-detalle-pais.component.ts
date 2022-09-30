import { Component, Input, OnInit } from '@angular/core';
import { Paises } from 'src/app/interfaces/paises';

@Component({
  selector: 'app-actor-detalle-pais',
  templateUrl: './actor-detalle-pais.component.html',
  styleUrls: ['./actor-detalle-pais.component.css']
})
export class ActorDetallePaisComponent implements OnInit {
  @Input() paisDelActor !: Paises;
  constructor() { }

  ngOnInit(): void {
  }

}
