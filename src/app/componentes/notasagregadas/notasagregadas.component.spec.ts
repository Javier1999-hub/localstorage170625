import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasagregadasComponent } from './notasagregadas.component';

describe('NotasagregadasComponent', () => {
  let component: NotasagregadasComponent;
  let fixture: ComponentFixture<NotasagregadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasagregadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasagregadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
