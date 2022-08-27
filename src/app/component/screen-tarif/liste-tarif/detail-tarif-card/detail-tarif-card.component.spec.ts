import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTarifCardComponent } from './detail-tarif-card.component';

describe('DetailTarifCardComponent', () => {
  let component: DetailTarifCardComponent;
  let fixture: ComponentFixture<DetailTarifCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTarifCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTarifCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
