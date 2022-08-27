import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTarifComponent } from './liste-tarif.component';

describe('ListeTarifComponent', () => {
  let component: ListeTarifComponent;
  let fixture: ComponentFixture<ListeTarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeTarifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeTarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
