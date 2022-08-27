import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionCardComponent } from './inscription-card.component';

describe('InscriptionCardComponent', () => {
  let component: InscriptionCardComponent;
  let fixture: ComponentFixture<InscriptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
