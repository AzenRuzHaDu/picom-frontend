import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenConnectionComponent } from './screen-connection.component';

describe('ScreenConnectionComponent', () => {
  let component: ScreenConnectionComponent;
  let fixture: ComponentFixture<ScreenConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenConnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
