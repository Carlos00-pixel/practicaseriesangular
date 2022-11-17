import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarpersonajeComponent } from './insertarpersonaje.component';

describe('InsertarpersonajeComponent', () => {
  let component: InsertarpersonajeComponent;
  let fixture: ComponentFixture<InsertarpersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarpersonajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarpersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
