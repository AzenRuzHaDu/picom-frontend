import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenListAnnoncesComponent } from './screen-list-annonces.component';

describe('ScreenListAnnoncesComponent', () => {
  let component: ScreenListAnnoncesComponent;
  let fixture: ComponentFixture<ScreenListAnnoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenListAnnoncesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenListAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
