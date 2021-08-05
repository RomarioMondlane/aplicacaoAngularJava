import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPComponent } from './listar-p.component';

describe('ListarPComponent', () => {
  let component: ListarPComponent;
  let fixture: ComponentFixture<ListarPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
