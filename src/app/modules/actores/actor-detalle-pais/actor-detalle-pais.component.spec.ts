import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorDetallePaisComponent } from './actor-detalle-pais.component';

describe('ActorDetallePaisComponent', () => {
  let component: ActorDetallePaisComponent;
  let fixture: ComponentFixture<ActorDetallePaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorDetallePaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorDetallePaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
