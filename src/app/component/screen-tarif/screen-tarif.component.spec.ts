import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTarifComponent } from './screen-tarif.component';

describe('ScreenTarifComponent', () => {
  let component: ScreenTarifComponent;
  let fixture: ComponentFixture<ScreenTarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenTarifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenTarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
