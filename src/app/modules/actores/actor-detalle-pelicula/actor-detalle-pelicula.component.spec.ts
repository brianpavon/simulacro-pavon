import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorDetallePeliculaComponent } from './actor-detalle-pelicula.component';

describe('ActorDetallePeliculaComponent', () => {
  let component: ActorDetallePeliculaComponent;
  let fixture: ComponentFixture<ActorDetallePeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorDetallePeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorDetallePeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
