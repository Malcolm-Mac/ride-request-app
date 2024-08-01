import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideSelectionComponent } from './ride-selection.component';

describe('RideSelectionComponent', () => {
  let component: RideSelectionComponent;
  let fixture: ComponentFixture<RideSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RideSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RideSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
