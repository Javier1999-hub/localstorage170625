import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasagregadasComponent } from './tareasagregadas.component';

describe('TareasagregadasComponent', () => {
  let component: TareasagregadasComponent;
  let fixture: ComponentFixture<TareasagregadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasagregadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasagregadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
