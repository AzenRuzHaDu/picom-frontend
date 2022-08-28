import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAddAnnonceComponent } from './screen-add-annonce.component';

describe('ScreenAddAnnonceComponent', () => {
  let component: ScreenAddAnnonceComponent;
  let fixture: ComponentFixture<ScreenAddAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenAddAnnonceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenAddAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
